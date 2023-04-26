import React from "react";

interface Props {
  label: string;
  clickHandler: () => void;
  className?: string;
}

const MenuSelectBtn: React.FC<Props> = ({ label, clickHandler, className }) => {
  return (
    <button
      className={`${className || ""}  w-full text-left h-full `}
      onClick={clickHandler}
    >
      {label}
    </button>
  );
};

export default MenuSelectBtn;
