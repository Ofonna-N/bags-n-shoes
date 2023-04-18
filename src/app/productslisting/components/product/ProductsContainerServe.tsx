import { DocumentData } from "firebase/firestore";
import React from "react";
import ProductsContainer from "./ProductsContainer";
import { GetProducts } from "@/app/layout";

// interface Props {
//   data: Promise<DocumentData[]>;
// }

const ProductsContainerServe = async () => {
  const productsData = await GetProducts();
  // const productsData = await data;
  return (
    <>
      <ProductsContainer productsData={productsData} />
    </>
  );
};

export default ProductsContainerServe;
