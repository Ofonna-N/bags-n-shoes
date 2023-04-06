"use client";

import NavbarMenubtn from "@/app/components/navbar/NavbarMenubtn";
import FilterMenuWrapper from "./FilterMenuWrapper";
import React, { useState } from "react";

interface Props {
  menuTitle: string;
}
const FilterPriceRangeMenu: React.FC<Props> = ({ menuTitle }) => {
  const [toggleDropdwn, setToggleDropdwn] = useState(false);

  const onMenuBtnClicked = () => {
    setToggleDropdwn((prev) => !prev);
  };

  const onReset = () => {
    // setCheckboxStates((prev) => {
    //   for (const key in prev) {
    //     prev[key] = false;
    //   }
    //   return prev;
    // });
    //setSelectedCount(0);
  };
  return (
    <FilterMenuWrapper
      menuTitle={menuTitle}
      menuHeaderTitle={"The highest price is $615.00"}
      onReset={onReset}
    >
      <div className="flex gap-7 text-[1.6rem] pb-12 pt-4 px-[3rem]">
        <label htmlFor="from" className="relative whitespace-nowrap">
          $
          <input
            type="number"
            id="from"
            placeholder=" "
            className="peer ml-3 py-2 h-[5rem] w-[14rem] text-[1.6rem] focus:border-black focus:ring-black"
          />
          <span
            className="absolute 
            left-[2.45rem] top-1 text-[1.2rem] transition-all
            peer-placeholder-shown:left-[2.45rem] peer-placeholder-shown:top-[1.3rem] peer-placeholder-shown:text-[1.6rem]"
          >
            From
          </span>
        </label>
        <label htmlFor="to" className="relative whitespace-nowrap">
          $
          <input
            type="number"
            id="to"
            placeholder=" "
            className="peer ml-3 py-2 h-[5rem] w-[14rem] text-[1.6rem] focus:border-black focus:ring-black"
          />
          <span
            className="absolute 
            left-[2.45rem] top-1 text-[1.2rem] transition-all
            peer-placeholder-shown:left-[2.45rem] peer-placeholder-shown:top-[1.3rem] peer-placeholder-shown:text-[1.6rem]"
          >
            To
          </span>
        </label>
      </div>
    </FilterMenuWrapper>
    // <div
    //   className="relative tab"
    //   tabIndex={0}
    //   onBlur={(e) => {
    //     // console.log("current target", e.currentTarget);
    //     // console.log("target", e.target);
    //     // console.log("related target", e.relatedTarget);
    //     if (e.currentTarget.contains(e.relatedTarget)) {
    //       return;
    //     } else {
    //       setToggleDropdwn(false);
    //     }
    //   }}
    // >
    //   <NavbarMenubtn btnLabel={menuTitle} btnClicked={onMenuBtnClicked} />
    //   <div
    //     className={`${
    //       toggleDropdwn ? "block" : "hidden"
    //     } absolute top-[150%] left-0 bg-white border min-w-[35rem]`}
    //   >
    //     <div className="flex justify-between border-b mb-3 text-2xl p-[2rem]">
    //       <span>The highest price is $615.00</span>
    //       <button
    //         className="border-b border-black"
    //         onClick={() => onResetCheckboxes()}
    //       >
    //         Reset
    //       </button>
    //     </div>
    //     <div className="flex gap-7 text-[1.6rem] pb-12 pt-4 px-[3rem]">
    //       <label htmlFor="from" className="relative whitespace-nowrap">
    //         $
    //         <input
    //           type="number"
    //           id="from"
    //           placeholder=" "
    //           className="peer ml-3 py-2 h-[5rem] w-[14rem] text-[1.6rem] focus:border-black focus:ring-black"
    //         />
    //         <span
    //           className="absolute
    //         left-[2.45rem] top-1 text-[1.2rem] transition-all
    //         peer-placeholder-shown:left-[2.45rem] peer-placeholder-shown:top-[1.3rem] peer-placeholder-shown:text-[1.6rem]"
    //         >
    //           From
    //         </span>
    //       </label>
    //       <label htmlFor="to" className="relative whitespace-nowrap">
    //         $
    //         <input
    //           type="number"
    //           id="to"
    //           placeholder=" "
    //           className="peer ml-3 py-2 h-[5rem] w-[14rem] text-[1.6rem] focus:border-black focus:ring-black"
    //         />
    //         <span
    //           className="absolute
    //         left-[2.45rem] top-1 text-[1.2rem] transition-all
    //         peer-placeholder-shown:left-[2.45rem] peer-placeholder-shown:top-[1.3rem] peer-placeholder-shown:text-[1.6rem]"
    //         >
    //           To
    //         </span>
    //       </label>
    //     </div>
    //   </div>
    // </div>
  );
};

export default FilterPriceRangeMenu;
