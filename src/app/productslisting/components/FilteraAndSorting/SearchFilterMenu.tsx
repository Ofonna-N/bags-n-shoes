"use client";
import SearchBarFilter from "@/app/components/searchbar/SearchBarFilter";
import { useAppSelector } from "@/customHooks/storeHooks";
import React from "react";

const SearchFilterMenu = () => {
  const searchFilterMenu = useAppSelector(
    (state) => state.SearchFilterSlice.toggleSearchHeader
  );
  if (!searchFilterMenu) return null;
  return (
    <div onSubmit={(e) => e.preventDefault()} className="mb-[1rem]">
      <h2 className="text-center text-[3rem] py-[2rem]">Search Results</h2>
      <SearchBarFilter isMenu />
    </div>
  );
};

export default SearchFilterMenu;
