"use client";

import { useAppSelector } from "@/customHooks/storeHooks";
import { useEffect } from "react";

const ToggleLister = () => {
  const NavsideMenuToggled = useAppSelector(
    (state) => state.SideMenuToggleSlice.NavMenutoggled.toggled
  );
  const FilterSortingSideMenutoggled = useAppSelector(
    (state) => state.SideMenuToggleSlice.FilteringMenuToggled.overlayToggled
  );

  const SearchBarMenuToggled = useAppSelector(
    (state) => state.SideMenuToggleSlice.SeachBarMenuToggled.overlayToggled
  );

  useEffect(() => {
    document.body.style.overflowY = `${
      NavsideMenuToggled || FilterSortingSideMenutoggled || SearchBarMenuToggled
        ? "hidden"
        : "visible"
    }`;
  }, [NavsideMenuToggled, FilterSortingSideMenutoggled, SearchBarMenuToggled]);
  return null;
};

export default ToggleLister;
