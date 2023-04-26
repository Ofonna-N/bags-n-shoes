"use client";

import { useAppSelector } from "@/customHooks/storeHooks";

const ProductsPageTitle = () => {
  const categoryName = useAppSelector(
    (state) => state.CategoryFilterSlice.category
  );
  return <h2 className="text-[4rem] my-12 capitalize">{categoryName}</h2>;
};

export default ProductsPageTitle;
