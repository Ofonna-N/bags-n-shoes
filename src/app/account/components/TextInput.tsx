"use client";
import React from "react";

type Props = {
  label: string;
  type: string;
  value: string;
  changeEvtHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // attributes?: { [key: string]: string };
};

const TextInput: React.FC<Props> = ({
  label,
  type,
  value,
  changeEvtHandler,
}) => {
  return (
    <div className="h-[5rem] relative mb-[2rem]">
      <label>
        <input
          type={type}
          required
          value={value}
          placeholder=" "
          className="peer w-full pl-[2rem] pr-[5rem] pt-[1.5rem] h-full text-[1.6rem] 
        focus:border-black focus:border-[1px] focus:ring-black focus:shadow-black"
          onChange={changeEvtHandler}
        />
        <span
          className="absolute left-[2rem] text-[1.2rem] top-[15%] translate-y-[0] 
      peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-[1.4rem]
      peer-focus:left-[2rem]  peer-focus:top-[8%] peer-focus:translate-y-[0] peer-focus:text-[1.2rem]
      
      transition-all select-none pointer-events-none"
        >
          {label}
        </span>
      </label>
    </div>
  );
};

export default TextInput;
