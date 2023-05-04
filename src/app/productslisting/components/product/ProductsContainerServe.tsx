import React from "react";
import ProductsContainer from "./ProductsContainer";
import { GetProducts } from "@/utility/AsyncFetchFunctions";
// import { GetProducts } from "@/app/layout";

// interface Props {
//   data: Promise<DocumentData[]>;
// }

const ProductsContainerServe = async () => {
  const productsData = await GetProducts();

  // const productsData = await data;
  return (
    <>
      <ProductsContainer />
    </>
  );
};

export default ProductsContainerServe;
