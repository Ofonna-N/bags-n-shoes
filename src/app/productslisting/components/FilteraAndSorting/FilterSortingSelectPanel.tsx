"use client";

import { useState } from "react";
import SelectBadge from "./SelectBadge";
import { useAppDispatch, useAppSelector } from "@/customHooks/storeHooks";
import { filterSortingStateTypes } from "@/utility/baseExports";
import {
  removeCheckboxBadge,
  removePriceRangeBadge,
} from "@/appstore/slices/SelectPanelSlice";
import {
  subtractSelectedCheckboxCount,
  toggleCheckboxFilter,
} from "@/appstore/slices/CheckboxFilterSlice";
import {
  updateFromState,
  updateToState,
} from "@/appstore/slices/PriceRangeFilterSlice";

const FilterSortingSelectPanel = () => {
  const seletBadges = useAppSelector((state) => state.SelectPanelSlice);
  const dispach = useAppDispatch();

  // const [badges, setBadges] = useState<string[]>(["bags", "low-high"]);

  const deleteBadge = (key: string, type: string, categoryKey: string) => {
    switch (type) {
      case filterSortingStateTypes.checkbox:
        // console.log("removing checkbox", "key", key);
        dispach(removeCheckboxBadge({ key }));
        dispach(
          toggleCheckboxFilter({
            menuKey: categoryKey,
            menuCheckBoxValue: { checkBoxKey: key, value: false },
          })
        );
        dispach(subtractSelectedCheckboxCount({ menuKey: categoryKey }));
        break;
      case filterSortingStateTypes.priceRange:
        dispach(updateFromState({ from: undefined }));
        dispach(updateToState({ to: undefined }));
        dispach(removePriceRangeBadge({ key }));
        break;
      default:
        break;
    }

    // if (type === filterSortingStateTypes.checkbox) {
    //   console.log("removing checkbox", "key", key);
    //   dispach(removeCheckboxBadge({ key, value: key, type, categoryKey }));
    //   dispach(
    //     toggleCheckboxFilter({
    //       menuKey: categoryKey,
    //       menuCheckBoxValue: { checkBoxKey: key, value: false },
    //     })
    //   );
    //   dispach(subtractSelectedCheckboxCount({ menuKey: categoryKey }));
    // }
    //setBadges((prev) => prev.filter((value) => value !== id));
  };

  return (
    <ul className="py-[1.3rem] px-5 mb-6 flex items-center flex-wrap gap-4 text-[1.1rem]">
      {seletBadges.map((badge) => (
        <li key={badge.key}>
          <SelectBadge
            title={badge.value}
            clickHanlder={() =>
              deleteBadge(badge.key, badge.type, badge.categoryKey)
            }
          />
        </li>
      ))}
      {seletBadges.length > 0 && (
        <button
          className="border-b-[2px] border-zinc-700"
          onClick={() => {
            seletBadges.forEach((badge) => {
              deleteBadge(badge.key, badge.type, badge.categoryKey);
            });
          }}
        >
          Clear All
        </button>
      )}
    </ul>
  );
};

export default FilterSortingSelectPanel;
