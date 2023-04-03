"use client";

import CategoryMenuBtn from "./CategoryMenuBtn";

const CategoryBtnsContainer = () => {
  return (
    <div className="text-2xl ml-6 hidden lg:flex lg:gap-8">
      <CategoryMenuBtn label="Bags" />
      <CategoryMenuBtn label="Shoes" />
    </div>
  );
};

export default CategoryBtnsContainer;
