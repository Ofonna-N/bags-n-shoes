"use client";

import NavBarMenuDropdwn from "./NavBarMenuDropdwn";

const CategoryBtnsContainer = () => {
  return (
    <div className="text-[1.4rem] ml-6 hidden lg:flex lg:gap-8">
      <NavBarMenuDropdwn label="Bags" />
      <NavBarMenuDropdwn label="Shoes" />
    </div>
  );
};

export default CategoryBtnsContainer;
