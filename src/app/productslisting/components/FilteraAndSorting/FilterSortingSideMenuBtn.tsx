"use client";

import { toggleFilterSideMenuOverlay } from "@/appstore/slices/SideMenuToggleSlice";
import IconButton from "@/components/buttons/IconButton";
import { useAppDispatch } from "@/customHooks/storeHooks";
import { VscSettings } from "react-icons/vsc";

const FilterSortingSideMenuBtn = () => {
  const dispachFilterMenu = useAppDispatch();
  return (
    <>
      <IconButton
        label="Filter and sort"
        icon={VscSettings}
        iconStart
        className="md:hidden"
        clickHandler={() =>
          dispachFilterMenu(toggleFilterSideMenuOverlay({ toggle: true }))
        }
      />
    </>
  );
};

export default FilterSortingSideMenuBtn;
