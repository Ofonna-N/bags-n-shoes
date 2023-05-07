"use client";

import { CiMenuBurger } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { toggleSideMenu } from "@/appstore/slices/SideMenuToggleSlice";
import { useAppDispatch, useAppSelector } from "@/customHooks/storeHooks";

const MenuToggler = () => {
  const menuDispach = useAppDispatch();
  const sideMenuToggled = useAppSelector(
    (state) => state.SideMenuToggleSlice.NavMenutoggled.toggled
  );
  // console.log(auth);
  return (
    <button
      onClick={() => {
        menuDispach(toggleSideMenu());
      }}
    >
      {sideMenuToggled ? (
        <GrClose className="text-[2.5rem] cursor-pointer lg:hidden" />
      ) : (
        <CiMenuBurger className="text-[2.5rem] cursor-pointer lg:hidden" />
      )}
    </button>
  );
};

export default MenuToggler;
