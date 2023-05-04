"use client";

import { BsSearch } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { BsBag } from "react-icons/bs";
import IconBtn from "./IconBtn";
import { useAppDispatch, useAppSelector } from "@/customHooks/storeHooks";
import { toggleSearchBarMenuOverlay } from "@/appstore/slices/SideMenuToggleSlice";
import { useRouter } from "next/navigation";

const NavBarRightSideWrapper = () => {
  const dispach = useAppDispatch();
  const router = useRouter();

  const cartBtnClickHandler = () => {
    router.push("/cart");
  };

  const accountClickHandler = () => {
    router.push("/account/login");
  };

  const cartItemsTotal = useAppSelector(
    (state) => state.CartSlice.totalQuantity
  );
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
