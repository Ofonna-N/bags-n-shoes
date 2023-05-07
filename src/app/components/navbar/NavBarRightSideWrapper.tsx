"use client";

import { BsSearch } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { BsBag } from "react-icons/bs";
import IconBtn from "./IconBtn";
import { useAppDispatch, useAppSelector } from "@/customHooks/storeHooks";
import { toggleSearchBarMenuOverlay } from "@/appstore/slices/SideMenuToggleSlice";
import { useRouter } from "next/navigation";
import useValidAccount from "@/customHooks/useValidAccount";
import { useEffect, useState } from "react";

const NavBarRightSideWrapper = () => {
  const dispach = useAppDispatch();
  const router = useRouter();
  // const [loggedIn, setLoggedIn] = useState(false);
  const userExist = useAppSelector((state) => state.UserSlice.userExist);

  const cartBtnClickHandler = () => {
    router.push("/cart");
  };

  const accountClickHandler = () => {
    if (userExist) {
      console.log("account route");
      router.push("/account");
    } else {
      console.log("login route");
      router.push("/account/login");
    }
  };

  const cartItemsTotal = useAppSelector(
    (state) => state.CartSlice.totalQuantity
  );

  // useEffect(() => {
  //   if (validAccount) {
  //     setLoggedIn(true);
  //     console.log("settting logged in");
  //   } else {
  //     setLoggedIn(false);
  //     console.log("setting logged out");
  //   }
  // }, [validAccount]);

  return (
    <div className="flex text-[2rem] gap-6">
      <IconBtn
        icon={<BsSearch />}
        className=""
        clickHandler={() => {
          dispach(toggleSearchBarMenuOverlay({ toggle: true }));
        }}
      />
      <IconBtn
        icon={<RxAvatar />}
        className="hidden md:block"
        clickHandler={accountClickHandler}
      />
      <span className="relative">
        <IconBtn
          icon={<BsBag />}
          className=""
          clickHandler={cartBtnClickHandler}
        />
        <span className="pointer-events-none select-none absolute bottom-[-1px] left-[10px] bg-black  px-[5px] text-white text-[1.3rem] rounded-[50%] flex items-center justify-center">
          {cartItemsTotal > 0 && cartItemsTotal}
        </span>
      </span>
    </div>
  );
};

export default NavBarRightSideWrapper;
