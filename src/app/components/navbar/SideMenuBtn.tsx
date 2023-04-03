"use client";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import React from "react";

interface Props {
  label: string;
  onClicked: () => void;
  back?: boolean;
}
//buttons on the draw side panel for small screens, two span elements contianed inside button
const SideMenuBtn: React.FC<Props> = ({ label, back, onClicked }) => {
  const regularBtn = (
    <button
      className="w-full bg-orange-400 hover:bg-slate-600 flex justify-between items-center px-8 py-4 text-[1.6rem]"
      onClick={onClicked}
    >
      <span>{label}</span>
      <span>
        <BsArrowRight fontSize="16px" />
      </span>
    </button>
  );

  const backBtn = (
    <button
      className="w-full bg-orange-400 hover:bg-slate-600 flex justify-start items-center px-8 py-4 text-[1.3rem]"
      onClick={onClicked}
    >
      <span className="mr-3">
        <BsArrowLeft fontSize="16px" />
      </span>
      <span>{label}</span>
    </button>
  );

  return back ? backBtn : regularBtn;
};

export default SideMenuBtn;
