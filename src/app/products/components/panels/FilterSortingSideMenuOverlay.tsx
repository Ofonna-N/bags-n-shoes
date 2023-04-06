"use client";
import MenuSidePanelWrapper from "@/app/components/panels/MenuSidePanelWrapper";
import FilterSortingSideMenu from "./FilterSortingSideMenu";
import { useAppDispatch, useAppSelector } from "@/customHooks/storeHooks";
import {
  toggleFilterSideMenu,
  toggleFilterSideMenuOverlay,
} from "@/appstore/slices/SideMenuToggleSlice";
import { useEffect } from "react";

const FilterSortingSideMenuOverlay = () => {
  const toggled = useAppSelector(
    (state) => state.SideMenuToggleSlice.FilteringMenuToggled.overlayToggled
  );
  const dispach = useAppDispatch();

  // const filterMenuToggled = useAppSelector(
  //   (state) => state.SideMenuToggleSlice.FilteringMenuToggled.toggled
  // );

  const onCloseOverlay = () => {
    dispach(toggleFilterSideMenu({ toggle: false }));
    setTimeout(() => {
      dispach(toggleFilterSideMenuOverlay({ toggle: false }));
    }, 200);
  };

  useEffect(() => {
    if (toggled) {
      const timeout = setTimeout(() => {
        dispach(toggleFilterSideMenu({ toggle: true }));
        // console.log("Open side menu on overlay");
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [toggled]);

  return (
    <>
      {toggled && (
        <div
          className="bg-[#00000063] fixed w-full h-[100vh] md:hidden"
          onClick={() => onCloseOverlay()}
        >
          <MenuSidePanelWrapper isLeft={false} isNavMenu={false}>
            <FilterSortingSideMenu onCloseOverlay={onCloseOverlay} />
          </MenuSidePanelWrapper>
        </div>
      )}
    </>
  );
};

export default FilterSortingSideMenuOverlay;
