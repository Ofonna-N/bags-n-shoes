"use client";

import React, { useState } from "react";
import SideMenuBtn from "../SideMenuBtn";

import SubMenuSidePanel from "../../panels/SubMenuSidePanel";

const MenuSidePanel = () => {
  const [subMenuToggled, setSubMenuToggled] = useState({
    title: "",
    toggled: false,
  });

  const onSideMenuBtnClicked = (title: string) => {
    setSubMenuToggled({ title, toggled: true });
  };
  const onSubMenuBtnClicked = () => {
    setSubMenuToggled({ title: "", toggled: false });
  };

  return (
    <div className="mt-16">
      <SideMenuBtn
        label="Bags"
        onClicked={() => onSideMenuBtnClicked("Bags")}
      />
      <SideMenuBtn
        label="Shoes"
        onClicked={() => onSideMenuBtnClicked("Shoes")}
      />
      <SubMenuSidePanel
        data={subMenuToggled}
        onBackbtnClicked={onSubMenuBtnClicked}
      >
        From Main Menu
      </SubMenuSidePanel>
    </div>
  );
};

export default MenuSidePanel;
