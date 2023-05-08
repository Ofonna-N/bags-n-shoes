"use client";

import React, { FC, ReactNode, useState } from "react";
import { useAppSelector } from "@/customHooks/storeHooks";

type Props = {
  isLeft?: boolean;
  isNavMenu: boolean;
  children: ReactNode;
};

const MenuSidePanelWrapper: FC<Props> = ({
  isLeft = true,
  isNavMenu,
  children,
}) => {
  const menuState = useAppSelector((state) =>
    isNavMenu
      ? state.SideMenuToggleSlice.NavMenutoggled
      : state.SideMenuToggleSlice.FilteringMenuToggled
  );

  return (
    <div
      className={`bg-white border-slate-300 border-r absolute overflow-hidden top-0 lg:hidden ${
        isLeft ? "left-0" : "right-0 border-l"
      } h-[100vh] transition-all ${
        menuState.toggled ? "w-[80%] md:w-1/2" : "w-0"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default MenuSidePanelWrapper;
