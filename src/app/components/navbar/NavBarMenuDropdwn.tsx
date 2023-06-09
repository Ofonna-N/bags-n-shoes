"use client";

import { useState } from "react";
import NavbarMenubtn from "./NavbarMenubtn";
import { SubCategory } from "@/utility/CustomTypes";
import { useAppDispatch } from "@/customHooks/storeHooks";
import MenuSelectBtn from "./MenuSelectBtn";
import { updateCateryFilter } from "@/appstore/slices/CategoryFilterSlice";
import {
  setSearchFilter,
  toggleSearchFilter,
} from "@/appstore/slices/SearchFilterSlice";
import { useRouter } from "next/navigation";

interface Props {
  label: string;
  subCategory: SubCategory[];
}

const NavBarMenuDropdwn: React.FC<Props> = ({ label, subCategory }) => {
  const [toggleDropdwn, setToggleDropdwn] = useState(false);

  const dispach = useAppDispatch();
  const router = useRouter();

  const onMenuBtnClicked = () => {
    setToggleDropdwn((prev) => !prev);
  };

  const menuSelectBtnClicked = (select: string) => {
    dispach(updateCateryFilter({ category: select }));
    dispach(toggleSearchFilter({ toggle: false }));
    dispach(setSearchFilter({ search: "" }));
    router.push("/productslisting");
  };

  return (
    <div
      className="relative z-50"
      tabIndex={0}
      onBlur={(e) => {
        // console.log("current target", e.currentTarget);
        // console.log("target", e.target);
        // console.log("related target", e.relatedTarget);
        if (e.currentTarget.contains(e.relatedTarget)) {
          return;
        } else {
          // onResetCheckboxes();
          // onMenuBtnClicked();
          setToggleDropdwn(false);
        }
      }}
    >
      <NavbarMenubtn
        btnLabel={label}
        btnClicked={onMenuBtnClicked}
        isClicked={toggleDropdwn}
      />
      <ul
        tabIndex={0}
        className={`absolute  top-[150%] min-w-[20rem] flex flex-col gap-8 ${
          toggleDropdwn ? "block" : "hidden"
        } bg-white border px-[3rem] py-[2.5rem]`}
      >
        <li>
          <MenuSelectBtn
            label={"Shop All"}
            clickHandler={() => menuSelectBtnClicked(label)}
            className="text-base2 hover:text-gray-900 hover:font-semibold"
          />
        </li>
        {subCategory.map((sub) => (
          <li className="capitalize" key={sub.id}>
            <MenuSelectBtn
              label={sub.attributes.name}
              clickHandler={() => menuSelectBtnClicked(sub.attributes.name)}
              className="text-base2 hover:text-gray-900 hover:font-semibold"
            />
          </li>
        ))}
        {/* <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span>
        <span>Hello</span> */}
      </ul>
    </div>
  );
};

export default NavBarMenuDropdwn;
