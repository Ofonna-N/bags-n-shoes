"use client";
import React from "react";
import { IconType } from "react-icons";

interface Props {
  label?: string;
  icon?: IconType;
  iconStart?: boolean; //define position of icon, start or at end of label position
  className?: string;
  clickHandler: () => void;
}

const IconButton: React.FC<Props> = ({
  label,
  icon: Icon,
  iconStart,
  className,
  clickHandler,
}) => {
  return (
    <button
      onClick={() => clickHandler()}
      className={`flex items-center gap-2 ${className}`}
    >
      {" "}
      {iconStart && Icon && <Icon />} {label} {!iconStart && Icon && <Icon />}
    </button>
  );
};

export default IconButton;
