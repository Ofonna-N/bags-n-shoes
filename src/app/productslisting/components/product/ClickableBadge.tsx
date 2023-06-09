"use client";
import React from "react";

type Props = {
  label: string;
  selectedColor: string;
  selected: boolean;
  clickHanlder: (id: string) => void;
};

const ClickableBadge: React.FC<Props> = ({
  label,
  selectedColor,
  selected,
  clickHanlder,
}) => {
  // console.log(selected);
  return (
    <button
      className={`px-[15px] py-[5px] rounded-[25px] border-base border-[1px] hover:outline-[2px] hover:outline outline-base transition-all duration-75
      ${selected ? `bg-base text-white ` : ""}`}
      onClick={() => clickHanlder(label)}
    >
      {label}
    </button>
  );
};

export default ClickableBadge;
