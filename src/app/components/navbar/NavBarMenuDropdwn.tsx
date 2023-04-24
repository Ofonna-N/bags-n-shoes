"use client";

import { useState } from "react";
import NavbarMenubtn from "./NavbarMenubtn";

interface Props {
  label: string;
}

const NavBarMenuDropdwn: React.FC<Props> = ({ label }) => {
  const [toggleDropdwn, setToggleDropdwn] = useState(false);

  const onMenuBtnClicked = () => {
    setToggleDropdwn((prev) => !prev);
  };
  return (
    <div
      className="relative z-50"
      tabIndex={0}
      onBlur={(e) => {
        // console.log("current target", e.currentTarget);
        // console.log("target", e.target);
        // console.log("related target", e.relatedTarget);
        if (e.currentTarget.contains(e.relatedTarget)) {
          return;
        } else {
          // onResetCheckboxes();
          // onMenuBtnClicked();
          setToggleDropdwn(false);
        }
      }}
    >
      <NavbarMenubtn
        btnLabel={label}
        btnClicked={onMenuBtnClicked}
        isClicked={toggleDropdwn}
      />
      <div
        tabIndex={0}
        className={`absolute top-[150%] min-w-[20rem] flex flex-col gap-8 ${
          toggleDropdwn ? "block" : "hidden"
        } bg-white border p-4`}
      >
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
      </div>
    </div>
  );
};

export default NavBarMenuDropdwn;
