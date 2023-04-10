"use client";

import CheckboxInput from "@/app/components/inputs/CheckboxInput";
import React, { useState } from "react";
import FilterMenuWrapper from "./FilterMenuWrapper";

interface Props {
  menuTitle: string;
}

const FilterCheckboxMenu: React.FC<Props> = ({ menuTitle }) => {
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>({});

  const onCheckboxSelected = (checked: boolean, id: string) => {
    setSelectedCount((prev) => (checked ? prev + 1 : prev - 1));
    setCheckboxStates((prev) => {
      // console.log(id);
      //console.log(prev);
      if (id in prev) {
        //console.log(prev, id);
        prev[id] = checked;
      } else {
        prev[id] = checked;
      }

      return prev;
    });
  };

  const onResetCheckboxes = () => {
    setCheckboxStates((prev) => {
      for (const key in prev) {
        prev[key] = false;
      }

      return prev;
    });
    setSelectedCount(0);
  };

  return (
    <FilterMenuWrapper
      menuTitle={menuTitle}
      menuHeaderTitle={`${selectedCount} Selected`}
      onReset={onResetCheckboxes}
    >
      <div className="flex flex-col gap-4 pb-6 pt-4 px-[3rem]">
        <CheckboxInput
          inputLabel={`${menuTitle} In Stock`}
          onChecked={onCheckboxSelected}
          checkedState={checkboxStates[`${menuTitle} In Stock`] || false}
        />
        <CheckboxInput
          inputLabel={`${menuTitle} Out of Stock`}
          onChecked={onCheckboxSelected}
          checkedState={checkboxStates[`${menuTitle} Out of Stock`] || false}
        />
      </div>
    </FilterMenuWrapper>
  );
};

export default FilterCheckboxMenu;
