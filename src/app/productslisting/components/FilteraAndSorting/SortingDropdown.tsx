"use client";

import { setDropDownValue } from "@/appstore/slices/SortingDropdownSlice";
import { useAppDispatch, useAppSelector } from "@/customHooks/storeHooks";
import { sortingDropDownValues } from "@/utility/baseExports";
import React from "react";

const SortingDropdown = () => {
  const dropDownState = useAppSelector(
    (state) => state.SortingDropdownSlice.value
  );

  const dispach = useAppDispatch();

  return (
    <select
      className="text-[1.4rem] py-4 cursor-pointer border-0 focus:ring-black"
      value={dropDownState}
      onChange={(e) => dispach(setDropDownValue({ value: e.target.value }))}
    >
      <option value={sortingDropDownValues.name_asc}>
        Alphabetically, A-Z
      </option>
      <option value={sortingDropDownValues.name_des}>
        Alphabetically, Z-A
      </option>
      <option value={sortingDropDownValues.price_asc}>Price, low-high</option>
      <option value={sortingDropDownValues.price_desc}>Price, high-low</option>
    </select>
  );
};

export default SortingDropdown;
