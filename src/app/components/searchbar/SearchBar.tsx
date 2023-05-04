"use client";

import { ChangeEvent } from "react";
import { CiSearch } from "react-icons/ci";

interface Props {
  search: string;
  focusHandler?: (focused: boolean) => void;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  submitHandler: () => void;
}

const SearchBar: React.FC<Props> = ({
  search,
  changeHandler,
  focusHandler,
  submitHandler,
}) => {
  return (
    <form
      className="relative text-[1.6rem] "
      onSubmit={(e) => {
        e.preventDefault();
        submitHandler();
      }}
    >
      <input
        type="text"
        placeholder=" "
        className="peer w-full pl-[2rem] pr-[5rem] pt-[1.5rem] h-[5rem] text-[1.6rem] 
        focus:border-black focus:border-[1px] focus:ring-black focus:shadow-black"
        onChange={changeHandler}
        value={search}
        onFocus={() => {
          if (focusHandler) {
            focusHandler(true);
          }
        }}
        onBlur={(e) => {
          if (focusHandler) {
            // console.log("related Target", e);
            setTimeout(() => focusHandler(false), 100);
          }
        }}
      />
      <label
        className="absolute left-[2rem] text-[1rem] top-[8%] translate-y-[0] 
      peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-[1.3rem]
      peer-focus:left-[2rem]  peer-focus:top-[8%] peer-focus:translate-y-[0] peer-focus:text-[1rem]
      
      transition-all select-none pointer-events-none"
      >
        Search
      </label>
      <button>
        <CiSearch className="absolute right-[1rem] top-[50%] translate-y-[-50%] text-[2.5rem]" />
      </button>
    </form>
  );
};

export default SearchBar;
