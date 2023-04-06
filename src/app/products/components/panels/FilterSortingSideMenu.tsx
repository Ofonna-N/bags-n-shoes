"use client";

import SideMenuBtn from "@/app/components/navbar/SideMenuBtn";
import SubMenuSidePanel from "@/app/components/panels/SubMenuSidePanel";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import SortingDropdown from "../FilteraAndSorting/SortingDropdown";

interface Props {
  onCloseOverlay: () => void;
}
const FilterSortingSideMenu: React.FC<Props> = ({ onCloseOverlay }) => {
  const [subMenuToggled, setSubMenuToggled] = useState(false);

  const onSideMenuBtnClicked = () => {
    setSubMenuToggled(true);
  };
  const onSubMenuBtnClicked = () => {
    setSubMenuToggled(false);
  };

  return (
    <div>
      <div className="relative bg-slate-600 flex flex-col items-center gap-2 text-[1.4rem] py-3">
        <span>Filter & Sort</span>
        <span>32 producs</span>
        <button
          onClick={() => {
            onCloseOverlay();
          }}
        >
          <GrClose className="absolute right-4 top-[50%] translate-y-[-50%] text-[2rem]" />
        </button>
      </div>
      <div className="mt-16">
        <SideMenuBtn label="Availability" onClicked={onSideMenuBtnClicked} />
        <SideMenuBtn label="Price" onClicked={onSideMenuBtnClicked} />
        <SideMenuBtn label="Color" onClicked={onSideMenuBtnClicked} />
        <SideMenuBtn label="Product type" onClicked={onSideMenuBtnClicked} />
        <span className="flex justify-between items-center px-[3rem] text-[1.6rem]">
          Sort by:
          <SortingDropdown />
        </span>
        <SubMenuSidePanel
          isToggled={subMenuToggled}
          onBackbtnClicked={onSubMenuBtnClicked}
        />
      </div>
    </div>
  );
};

export default FilterSortingSideMenu;
