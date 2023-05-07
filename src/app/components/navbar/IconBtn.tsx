"use client";
import React from "react";

interface Props {
  icon: any;
  className: string;
  disabled?: boolean;
  clickHandler?: () => void;
}

const IconBtn: React.FC<Props> = ({
  icon,
  className,
  disabled = false,
  clickHandler,
}) => {
  return (
    <button className={className} onClick={clickHandler} disabled={disabled}>
      {icon}
    </button>
  );
};

export default IconBtn;
