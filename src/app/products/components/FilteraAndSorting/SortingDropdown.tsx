"use client";

import React from "react";

const SortingDropdown = () => {
  return (
    <select className="text-[1.4rem] py-4 cursor-pointer border-0 focus:ring-black">
      <option value="">Alphabetically, A-Z</option>
      <option value="">Alphabetically, Z-A</option>
      <option value="">Price, low-high</option>
      <option value="">Price, high-low</option>
    </select>
  );
};

export default SortingDropdown;
