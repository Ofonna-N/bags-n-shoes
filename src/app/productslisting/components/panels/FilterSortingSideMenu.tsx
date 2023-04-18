"use client";

import SideMenuBtn from "@/app/components/navbar/SideMenuBtn";
import SubMenuSidePanel from "@/app/components/panels/SubMenuSidePanel";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import SortingDropdown from "../FilteraAndSorting/SortingDropdown";
import { ProductsFilter } from "@/utility/CustomTypes";
import FilterCheckboxMenu from "../FilteraAndSorting/FilterCheckboxMenu";
import FilterPriceRangeMenu from "../FilteraAndSorting/FilterPriceRangeMenu";

interface Props {
  colorFilter: ProductsFilter[];
  availabilityFilter: ProductsFilter[];
  productTypeFilter: ProductsFilter[];
  onCloseOverlay: () => void;
}
const submenus = ["Availability", "Price", "Color", "Product type"];
const FilterSortingSideMenu: React.FC<Props> = ({
  onCloseOverlay,
  colorFilter,
  availabilityFilter,
  productTypeFilter,
}) => {
  const [subMenuToggled, setSubMenuToggled] = useState({
    title: "Default",
    toggled: false,
  });
  // console.log("HELLOOOO!!!");
  // console.log(subMenuToggled, "state check");
  const onSideMenuBtnClicked = (title: string) => {
    setSubMenuToggled({ title, toggled: true });
  };
  const onSubMenuBtnClicked = () => {
    setSubMenuToggled({ title: "empty", toggled: false });
  };

  const displayFilterMenu = () => {
    // console.log(colorFilter, "about to set color Filter");
    switch (subMenuToggled.title) {
      case "Color":
        return (
          <FilterCheckboxMenu
            isSideMenu={true}
            menuTitle="Color"
            checkboxData={colorFilter}
          />
        );
      case "Availability":
        return (
          <FilterCheckboxMenu
            isSideMenu={true}
            menuTitle="Availability"
            checkboxData={availabilityFilter}
          />
        );
      case "Product type":
        return (
          <FilterCheckboxMenu
            isSideMenu={true}
            menuTitle="Product type"
            checkboxData={productTypeFilter}
          />
        );
      case "Price":
        return <FilterPriceRangeMenu menuTitle="Price" isSideMenu />;
      default:
        return <h1>Hello!</h1>;
    }
  };

  return (
    <div>
      <div className="relative bg-slate-600 flex flex-col items-center gap-2 text-[1.4rem] py-3">
        <span>Filter & Sort</span>
        <span>
          {availabilityFilter[0].count + availabilityFilter[1].count} producs
        </span>
        <button
          onClick={() => {
            onCloseOverlay();
          }}
        >
          <GrClose className="absolute right-4 top-[50%] translate-y-[-50%] text-[2rem]" />
        </button>
      </div>
      <ul className="mt-16">
        {submenus.map((subMenu) => (
          <li key={subMenu}>
            <SideMenuBtn
              label={subMenu}
              onClicked={() => onSideMenuBtnClicked(subMenu)}
            />
          </li>
        ))}

        <span className="flex justify-between items-center px-[3rem] text-[1.6rem]">
          Sort by:
          <SortingDropdown />
        </span>
        <SubMenuSidePanel
          data={subMenuToggled}
          onBackbtnClicked={onSubMenuBtnClicked}
        >
          {displayFilterMenu()}
        </SubMenuSidePanel>
      </ul>
    </div>
  );
};

export default FilterSortingSideMenu;
