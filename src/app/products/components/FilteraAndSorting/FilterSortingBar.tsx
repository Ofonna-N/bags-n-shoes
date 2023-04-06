"use client";

import React from "react";
import { VscSettings } from "react-icons/vsc";
import FilterCheckboxMenu from "./FilterCheckboxMenu";
import FilterPriceRangeMenu from "./FilterPriceRangeMenu";
import SortingDropdown from "./SortingDropdown";
import { useAppDispatch } from "@/customHooks/storeHooks";
import { toggleFilterSideMenuOverlay } from "@/appstore/slices/SideMenuToggleSlice";

const FilterSortingBar = () => {
  const dispachFilterMenu = useAppDispatch();

  return (
    <div className="py-6 flex justify-between text-[1.4rem] border-b gap-8 items-center">
      <button
        className="flex items-center gap-2  md:hidden"
        onClick={() =>
          dispachFilterMenu(toggleFilterSideMenuOverlay({ toggle: true }))
        }
      >
        <VscSettings />
        Filter and sort
      </button>
      <div className="hidden md:flex flex-wrap gap-[2.5rem]">
        <span>Filter:</span>
        <FilterCheckboxMenu menuTitle="Availability" />
        <FilterPriceRangeMenu menuTitle="Price" />
        <FilterCheckboxMenu menuTitle="Color" />
        <FilterCheckboxMenu menuTitle="Product type" />
      </div>
      <div className="flex gap-4 grow justify-end">
        <span className="hidden md:flex md:gap-3 md:items-center">
          <span>Sort by:</span>
          <SortingDropdown />
        </span>
      </div>
      <div>
        <span>32 products</span>
      </div>
    </div>
  );
};

export default FilterSortingBar;
