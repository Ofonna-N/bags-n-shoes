"use client";
import { DocumentData } from "firebase/firestore";
import ProductCard from "./ProductCard";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import { useState } from "react";
import IconButton from "@/components/buttons/IconButton";

const ProductsContainer = ({
  productsData,
}: {
  productsData: DocumentData[];
}) => {
  //products from database
  // const productsData = await getProducts();

  //pagination data
  const productsPerPage = 8;
  const numPages = Math.ceil(productsData.length / productsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const pagClickHandler = (pageNo: number) => {
    setCurrentPage(pageNo);
  };

  const productsDisplay = productsData.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // console.log(productsData);

  return (
    <div>
      <ul className="mx-auto mb-24 grid gap-x-6 gap-y-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productsDisplay.map((product) => (
          <li key={product.name}>
            <ProductCard
              name={product.name}
              price={product.price}
              color={product.color}
            />
          </li>
        ))}
      </ul>

      <ul className="flex justify-center gap-4 text-[1.6rem] mb-24">
        <li>
          {currentPage > 1 && (
            <IconButton
              icon={AiOutlineDoubleLeft}
              clickHandler={() => pagClickHandler(currentPage - 1)}
            />
          )}
        </li>
        {Array.from({ length: numPages }, (_, i) => i + 1).map((pageNum) => (
          <li
            key={pageNum}
            className={`hover:border-b ${
              currentPage === pageNum ? "border-b border-black" : ""
            }`}
          >
            <button className="px-8" onClick={() => pagClickHandler(pageNum)}>
              {pageNum}
            </button>
          </li>
        ))}
        <li>
          {" "}
          {currentPage < numPages && (
            <IconButton
              icon={AiOutlineDoubleRight}
              clickHandler={() => pagClickHandler(currentPage + 1)}
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default ProductsContainer;
