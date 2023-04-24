import React from "react";

interface Props {
  label: string;
  className?: string;
}

const BasicBadge: React.FC<Props> = ({ label, className }) => {
  return (
    <span
      className={`text-white font-light text-[1.15rem] rounded-[20px] px-[1rem] py-[0.25rem] ${
        className || "bg-slate-800"
      }`}
    >
      {label || "Badge"}
    </span>
  );
};

export default BasicBadge;
