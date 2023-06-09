import React from "react";

interface Props {
  label: string;
  className?: string;
}

const BasicBadge: React.FC<Props> = ({ label, className }) => {
  return (
    <span
      className={`text-white font-light text-[1.2rem] rounded-[20px] px-[1rem] py-[0.25rem] align-middle ${
        className || "bg-blue-800"
      }`}
    >
      {label || "Badge"}
    </span>
  );
};

export default BasicBadge;
