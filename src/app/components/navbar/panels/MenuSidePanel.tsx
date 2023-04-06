"use client";

import React, { useState } from "react";
import SideMenuBtn from "../SideMenuBtn";

import SubMenuSidePanel from "../../panels/SubMenuSidePanel";

const MenuSidePanel = () => {
  const [subMenuToggled, setSubMenuToggled] = useState(false);

  const onSideMenuBtnClicked = () => {
    setSubMenuToggled(true);
  };
  const onSubMenuBtnClicked = () => {
    setSubMenuToggled(false);
  };

  return (
    <div className="mt-16">
      <SideMenuBtn label="Bags" onClicked={onSideMenuBtnClicked} />
      <SideMenuBtn label="Shoes" onClicked={onSideMenuBtnClicked} />
      <SubMenuSidePanel
        isToggled={subMenuToggled}
        onBackbtnClicked={onSubMenuBtnClicked}
      />
    </div>
  );
};

export default MenuSidePanel;
