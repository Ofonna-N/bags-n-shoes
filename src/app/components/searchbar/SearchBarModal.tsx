"use client";
import { useAppDispatch, useAppSelector } from "@/customHooks/storeHooks";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import {
  toggleSearchBarMenu,
  toggleSearchBarMenuOverlay,
} from "@/appstore/slices/SideMenuToggleSlice";
import SideMenuBtn from "../navbar/SideMenuBtn";
import { Product } from "@/utility/CustomTypes";
import SearchBarFilter from "./SearchBarFilter";

const SearchBarModal = () => {
  const dispach = useAppDispatch();
  const toggled = useAppSelector(
    (state) => state.SideMenuToggleSlice.SeachBarMenuToggled.overlayToggled
  );
  const searchbarToggled = useAppSelector(
    (state) => state.SideMenuToggleSlice.SeachBarMenuToggled.toggled
  );

  useEffect(() => {
    if (toggled) {
      const timeout = setTimeout(() => {
        dispach(toggleSearchBarMenu({ toggle: true }));
        // console.log("YEERRRRRR3x");
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      dispach(toggleSearchBarMenu({ toggle: false }));
    }
  }, [toggled]);

  //   useEffect(()=>{

  //   }, []);

  return (
    toggled && (
      <div className="relative mt-1">
        <div className="absolute top-0 bottom-[100%] bg-overlay h-[110vh] w-full z-[500]">
          {searchbarToggled && (
            // TODO: animate drop down fade
            <div className="p-[3rem] bg-white animate-dropDown">
              <SearchBarFilter
                closeHandler={() =>
                  dispach(toggleSearchBarMenuOverlay({ toggle: false }))
                }
              />
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default SearchBarModal;
