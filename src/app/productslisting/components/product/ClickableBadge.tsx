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
      className={`text-white px-[15px] py-[5px] rounded-[25px] border border-black
      ${selected ? `bg-black` : ""}`}
      onClick={() => clickHanlder(label)}
    >
      {label}
    </button>
  );
};

export default ClickableBadge;
