"use client";

import React from "react";

interface Props {
  inputLabel: string;
  checkedState: boolean;
  count: number;
  onChecked: (checked: boolean, id: string) => void;
}

const CheckboxInput: React.FC<Props> = ({
  inputLabel,
  checkedState,
  count,
  onChecked,
}) => {
  //console.log(inputLabel);
  const label = inputLabel.split(" ").splice(1).join(" ");
  return (
    <label
      htmlFor={`${inputLabel || "checkbox"}`}
      className="flex items-center gap-2 cursor-pointer text-[1.4rem] py-[1rem]"
    >
      <input
        type="checkbox"
        id={`${inputLabel || "checkbox"}`}
        className=" text-black  w-[1.4rem] h-[1.4rem] focus:ring-0"
        checked={checkedState}
        onChange={(ev) => {
          onChecked(ev.target.checked, label);
        }}
      />
      {label} ({count})
    </label>
  );
};

export default CheckboxInput;
