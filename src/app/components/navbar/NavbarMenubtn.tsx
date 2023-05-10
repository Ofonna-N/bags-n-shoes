"use client";

import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface Props {
  btnLabel: string;
  animate?: boolean;
  isClicked?: boolean;
  btnClicked: () => void;
}

const NavbarMenubtn: React.FC<Props> = ({
  btnLabel,
  animate,
  isClicked,
  btnClicked,
}) => {
  const [flip, setFlip] = useState(false);
  const clickHandler = () => {
    if (animate) setFlip((prev) => !prev);
    if (isClicked) setFlip(isClicked);
    btnClicked();
  };
  const getBtn = () => {
    if (isClicked) return <BsChevronUp className="mt-1" />;
    if (animate) {
      return flip ? (
        <BsChevronUp className="mt-1" />
      ) : (
        <BsChevronDown className="mt-1" />
      );
    } else {
      return <BsChevronDown className="mt-1" />;
    }
  };

  return (
    <button className="flex items-center gap-1" onClick={clickHandler}>
      <span
        className={`capitalize border-b-base ${
          isClicked ? "border-b" : ""
        } hover:border-b`}
      >
        {btnLabel}
      </span>
      {getBtn()}
    </button>
  );
};

export default NavbarMenubtn;
