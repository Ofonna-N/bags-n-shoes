"use client";

import NavbarMenubtn from "@/app/components/navbar/NavbarMenubtn";
import FilterMenuWrapper from "./FilterMenuWrapper";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/customHooks/storeHooks";
import {
  updateFromState,
  updateToState,
} from "@/appstore/slices/PriceRangeFilterSlice";
import {
  addPriceRangeBadge,
  removePriceRangeBadge,
} from "@/appstore/slices/SelectPanelSlice";
import { filterSortingStateTypes } from "@/utility/baseExports";

interface Props {
  isSideMenu?: boolean;
  menuTitle: string;
}

const priceRangeKey = "price-range";

const FilterPriceRangeMenu: React.FC<Props> = ({ menuTitle, isSideMenu }) => {
  const [toggleDropdwn, setToggleDropdwn] = useState(false);

  const dispach = useAppDispatch();
  const fromState = useAppSelector((state) => state.PriceRangeFilterSlice.from);
  const toState = useAppSelector((state) => state.PriceRangeFilterSlice.to);

  const onMenuBtnClicked = () => {
    setToggleDropdwn((prev) => !prev);
  };

  const onReset = () => {
    dispach(updateFromState({ from: undefined }));
    dispach(updateToState({ to: undefined }));
    dispach(
      removePriceRangeBadge({
        key: priceRangeKey,
      })
    );
  };

  useEffect(() => {
    // console.log("from", fromState, "to", toState);
    // console.log("from type", typeof fromState, "to type", typeof toState);
    if (!fromState && !toState) return;
    dispach(
      addPriceRangeBadge({
        key: priceRangeKey,
        categoryKey: filterSortingStateTypes.priceRange,
        value: `$${
          typeof fromState === "number"
            ? fromState?.toFixed(2)
            : (999).toFixed(2)
        }-$${
          typeof toState === "number" ? toState?.toFixed(2) : (999).toFixed(2)
        }`,
        type: filterSortingStateTypes.priceRange,
      })
    );
  }, [fromState, toState]);

  const priceRangeDisplay = () => {
    return (
      <div className="flex gap-7 text-[1.6rem] pb-12 pt-4 px-[3rem] justify-center flex-col items-center sm:flex-row">
        <label htmlFor="from" className="relative whitespace-nowrap">
          $
          <input
            type="number"
            id="from"
            placeholder=" "
            className="peer ml-3 py-2 h-[5rem] md:w-[14rem] text-[1.6rem] focus:border-black focus:ring-black"
            value={fromState || ""}
            onChange={(e) => {
              // console.log("From: ", fromState, "to", toState);
              dispach(updateFromState({ from: e.target.value }));
            }}
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
            className="peer ml-3 py-2 h-[5rem]  md:w-[14rem] text-[1.6rem] focus:border-black focus:ring-black"
            value={toState || ""}
            onChange={(e) => {
              dispach(updateToState({ to: e.target.value }));
            }}
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
    );
  };

  const displayMenu = () => {
    if (!isSideMenu) {
      return (
        <FilterMenuWrapper
          menuTitle={menuTitle}
          menuHeaderTitle={"The highest price is $615.00"}
          onReset={onReset}
        >
          {priceRangeDisplay()}
        </FilterMenuWrapper>
      );
    } else {
      return (
        <div>
          <h3 className="text-[1.6rem] py-[2rem] text-center">
            Highest price is $615
          </h3>

          {priceRangeDisplay()}
        </div>
      );
    }
  };

  return displayMenu();
};

export default FilterPriceRangeMenu;
