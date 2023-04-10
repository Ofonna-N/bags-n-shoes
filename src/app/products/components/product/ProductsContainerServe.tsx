import { DocumentData } from "firebase/firestore";
import React from "react";
import ProductsContainer from "./ProductsContainer";

interface Props {
  data: Promise<DocumentData>[];
}

const ProductsContainerServe = async ({ data }: Props) => {
  const productsData = await data;
  return (
    <>
      <ProductsContainer productsData={productsData} />
    </>
  );
};

export default ProductsContainerServe;
