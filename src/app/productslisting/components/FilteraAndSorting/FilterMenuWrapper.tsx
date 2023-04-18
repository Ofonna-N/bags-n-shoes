import NavbarMenubtn from "@/app/components/navbar/NavbarMenubtn";
import React, { useState } from "react";

interface Props {
  menuTitle: string;
  menuHeaderTitle: string;
  onReset: () => void;
  children: React.ReactNode;
}

const FilterMenuWrapper: React.FC<Props> = ({
  menuTitle,
  menuHeaderTitle,
  onReset,
  children,
}) => {
  const [toggleDropdwn, setToggleDropdwn] = useState(false);

  const onMenuBtnClicked = () => {
    setToggleDropdwn((prev) => !prev);
  };

  return (
    <div
      className="relative tab"
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
      <NavbarMenubtn btnLabel={menuTitle} btnClicked={onMenuBtnClicked} />
      <div
        className={`${
          toggleDropdwn ? "block" : "hidden"
        } absolute top-[150%] left-0 bg-white border min-w-[35rem] z-50`}
      >
        <div className="flex justify-between border-b mb-3 text-2xl p-[2rem]">
          <span> {menuHeaderTitle}</span>
          <button className="border-b border-black" onClick={() => onReset()}>
            Reset
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default FilterMenuWrapper;
