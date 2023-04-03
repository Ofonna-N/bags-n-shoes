"use client";

import { BsSearch } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { BsBag } from "react-icons/bs";
import IconBtn from "./IconBtn";

const NavBarRightSideWrapper = () => {
  return (
    <div className="flex text-[2rem] gap-6">
      <IconBtn icon={<BsSearch />} className="" />
      <IconBtn icon={<RxAvatar />} className="hidden md:block" />
      <IconBtn icon={<BsBag />} className="" />
    </div>
  );
};

export default NavBarRightSideWrapper;
