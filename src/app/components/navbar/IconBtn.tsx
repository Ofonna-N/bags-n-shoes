"use client";
import React from "react";

interface Props {
  icon: any;
  className: string;
  clickHandler?: () => void;
}

const IconBtn: React.FC<Props> = ({ icon, className, clickHandler }) => {
  return (
    <button className={className} onClick={clickHandler}>
      {icon}
    </button>
  );
};

export default IconBtn;
