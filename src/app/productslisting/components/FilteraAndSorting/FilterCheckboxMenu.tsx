"use client";

import CheckboxInput from "@/app/components/inputs/CheckboxInput";
import React, { useEffect, useState } from "react";
import FilterMenuWrapper from "./FilterMenuWrapper";
import { useAppDispatch, useAppSelector } from "@/customHooks/storeHooks";
import {
  addSelectedCheckboxCount,
  resetSelectedCheckboxCount,
  subtractSelectedCheckboxCount,
  toggleCheckboxFilter,
} from "@/appstore/slices/CheckboxFilterSlice";
import { ProductsFilter } from "@/utility/CustomTypes";
import {
  addCheckboxBadge,
  removeCheckboxBadge,
} from "@/appstore/slices/SelectPanelSlice";
import { filterSortingStateTypes } from "@/utility/baseExports";

interface Props {
  menuTitle: string;
  checkboxData: ProductsFilter[];
  isSideMenu?: boolean;
}

const FilterCheckboxMenu: React.FC<Props> = ({
  menuTitle,
  checkboxData,
  isSideMenu,
}) => {
  // const [selectedCount, setSelectedCount] = useState<number>(0);
  const dispach = useAppDispatch();
  const menuKey = menuTitle.toLowerCase().replaceAll(" ", "");
  const checkBoxFilterState = useAppSelector(
    (state) => state.CheckboxFilterSlice
  );

  const checkBoxesDisplay = () => {
    // for (const [key, value] of Object.entries(checkBoxFilterState)) {

    // }
    if (!checkBoxFilterState[menuKey]) return undefined;
    // console.log(checkboxData, "logging checkbox data");
    return (
      <ul className="flex flex-col gap-4 pb-6 pt-4 px-[3rem]">
        {Object.entries(checkBoxFilterState[menuKey]).map((data, i) => {
          const [checkBoxKey, value] = data;
          if (checkBoxKey === "selected") return; //exclude non menu keys under this menu
          return (
            <li key={checkBoxKey}>
              <CheckboxInput
                inputLabel={`${menuKey} ${checkBoxKey}`}
                onChecked={onCheckboxSelected}
                checkedState={
                  (typeof value === "boolean" ? value : false) || false
                }
                count={checkboxData[i]?.count}
              />
            </li>
          );
        })}
      </ul>
    );
  };

  const onCheckboxSelected = (checked: boolean, id: string) => {
    if (checked) {
      dispach(addSelectedCheckboxCount({ menuKey }));
      dispach(
        addCheckboxBadge({
          key: id,
          value: id,
          type: filterSortingStateTypes.checkbox,
          categoryKey: menuKey,
        })
      );
    } else {
      subtractSelectedCheckboxCount({ menuKey });
      dispach(
        removeCheckboxBadge({
          key: id,
        })
      );
    }

    dispach(
      toggleCheckboxFilter({
        menuKey,
        menuCheckBoxValue: { checkBoxKey: id, value: checked },
      })
    );
  };

  const onResetCheckboxes = () => {
    for (const [key, value] of Object.entries(checkBoxFilterState[menuKey])) {
      subtractSelectedCheckboxCount({ menuKey });
      dispach(
        removeCheckboxBadge({
          key,
        })
      );
      dispach(
        toggleCheckboxFilter({
          menuKey,
          menuCheckBoxValue: { checkBoxKey: key, value: false },
        })
      );
    }
    // dispach(setSelectedCheckboxCount({ menuKey, selected: 0 }));
    dispach(resetSelectedCheckboxCount({ menuKey }));
  };

  useEffect(() => {
    if (Object.hasOwn(checkBoxFilterState, menuKey)) {
      // console.log("Redux state already exists");
      return;
    }
    for (const { key, count } of checkboxData) {
      // console.log(key, "this is our key");
      dispach(
        toggleCheckboxFilter({
          menuKey,
          menuCheckBoxValue: { checkBoxKey: key, value: false },
        })
      );
    }
    // dispach(setSelectedCheckboxCount({ menuKey, selected: 0 }));
    dispach(resetSelectedCheckboxCount({ menuKey }));
  }, [checkboxData]);

  const getMenu = () => {
    return isSideMenu ? (
      <>{checkBoxesDisplay()}</>
    ) : (
      <FilterMenuWrapper
        menuTitle={menuTitle}
        menuHeaderTitle={`${
          (Object.hasOwn(checkBoxFilterState, menuKey) &&
            checkBoxFilterState[menuKey]?.selected) ||
          0
        } Selected`}
        onReset={onResetCheckboxes}
      >
        <>{checkBoxesDisplay()}</>
      </FilterMenuWrapper>
    );
  };

  return <>{getMenu()}</>;
};

export default FilterCheckboxMenu;
