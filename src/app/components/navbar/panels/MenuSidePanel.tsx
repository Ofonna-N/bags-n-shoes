"use client";

import React, { useState } from "react";
import SideMenuBtn from "../SideMenuBtn";
import { useAppSelector } from "@/customHooks/storeHooks";

const MenuSidePanel = () => {
  const [subMenuToggled, setSubMenuToggled] = useState(false);
  const menuState = useAppSelector((state) => state.SideMenuToggleSlice);

  const onSideMenuBtnClicked = () => {
    setSubMenuToggled(true);
  };
  const onSubMenuBtnClicked = () => {
    setSubMenuToggled(false);
  };

  return (
    <div
      className={`bg-red-500 absolute overflow-hidden pt-16 top-0 lg:hidden left-0 h-[100vh] transition-all ${
        menuState.toggled ? "w-[80%] md:w-1/2" : "w-0"
      }`}
    >
      <SideMenuBtn label="Bags" onClicked={onSideMenuBtnClicked} />
      <SideMenuBtn label="Shoes" onClicked={onSideMenuBtnClicked} />
      <div
        className={`bg-orange-900 absolute top-0 right-0 h-full transition-all ${
          subMenuToggled ? "w-full" : "w-0"
        } `}
      >
        <SideMenuBtn label="Bags" back onClicked={onSubMenuBtnClicked} />
      </div>
    </div>
  );
};

export default MenuSidePanel;
