import React from "react";

import FilterCheckboxMenu from "./FilterCheckboxMenu";
import FilterPriceRangeMenu from "./FilterPriceRangeMenu";
import SortingDropdown from "./SortingDropdown";
import FilterSortingSideMenuBtn from "./FilterSortingSideMenuBtn";
import TestClientComponent from "./TestClientComponent";
import {
  GetColorFilters,
  GetProductTypes,
  GetProducts,
  GetProductsAvailability,
} from "@/utility/AsyncFetchFunctions";
// import {
//   GetColorFilters,
//   GetProductTypes,
//   GetProducts,
//   GetProductsAvailability,
// } from "@/app/layout";

const FilterSortingBar = async () => {
  const colorsPromise = GetColorFilters();
  const producttypePromise = GetProductTypes();
  const availabilityPromise = GetProductsAvailability();

  const [colorsFilter, producttypeFilter, availabilityFilter] =
    await Promise.all([colorsPromise, producttypePromise, availabilityPromise]);

  const productsCount = await (await GetProducts()).length;
  // console.log(availabilityPromise, "logging Availability");
  return (
    <div className="py-2 mb-2 flex justify-between text-[1.4rem]  gap-8 items-center">
      <FilterSortingSideMenuBtn />
      <div className="hidden md:flex flex-wrap gap-[2.5rem]">
        <span>Filter:</span>
        <FilterCheckboxMenu
          menuTitle="Availability"
          checkboxData={availabilityFilter}
        />
        <FilterPriceRangeMenu menuTitle="Price" />
        <FilterCheckboxMenu
          menuTitle="Color"
          checkboxData={colorsFilter}
          // isSideMenu
        />
        <FilterCheckboxMenu
          menuTitle="Product type"
          checkboxData={producttypeFilter}
        />
      </div>
      <div className="flex gap-4 grow justify-end">
        <span className="hidden md:flex md:gap-3 md:items-center">
          <span className="whitespace-nowrap">Sort by:</span>
          <SortingDropdown />
        </span>
      </div>
      <div>
        <span className="whitespace-nowrap">{productsCount} products</span>
      </div>

      {/* <TestClientComponent data={await colorsFilter.json()} /> */}
    </div>
  );
};

export default FilterSortingBar;
