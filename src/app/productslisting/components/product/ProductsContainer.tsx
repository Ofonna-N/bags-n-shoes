"use client";
import ProductCard from "./ProductCard";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import { useEffect, useState } from "react";
import IconButton from "@/components/buttons/IconButton";
import { useAppSelector } from "@/customHooks/storeHooks";
// import { GetFilteredProducts } from "@/app/layout";
import { Product } from "@/utility/CustomTypes";
import {
  GetFilteredProducts,
  GetProducts,
} from "@/utility/AsyncFetchFunctions";
import { apiURLFilteredProducts } from "@/utility/baseExports";

const ProductsContainer = () => {
  const filterValues = useAppSelector((state) => state.SelectPanelSlice);
  const sortValues = useAppSelector(
    (state) => state.SortingDropdownSlice.value
  );
  const categoryFilterSelection = useAppSelector(
    (state) => state.CategoryFilterSlice.category
  );
  const searchFilterValue = useAppSelector(
    (state) => state.SearchFilterSlice.search
  );
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const productsPerPage = 8;
  const numPages = Math.ceil(filteredProducts.length / productsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const pagClickHandler = (pageNo: number) => {
    setCurrentPage(pageNo);
  };

  const productsDisplay = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  useEffect(() => {
    const filterProducts = async () => {
      let params: string = "";
      if (searchFilterValue) params += `search=${searchFilterValue}&`;
      if (categoryFilterSelection && categoryFilterSelection !== "products") {
        params += `category=${categoryFilterSelection}&`;
      }

      params += `sort=${sortValues}&`;
      filterValues.forEach((filter) => {
        if (filter.categoryKey === "priceRange") {
          const prices = filter.value.split("-");
          params += `${params.length > 1 ? "&" : ""}from=${prices[0].slice(1)}`;
          params += `${params.length > 1 ? "&" : ""}to=${prices[1].slice(1)}`;
        } else {
          params += `${params.length > 1 ? "&" : ""}${filter.categoryKey}=${
            filter.value
          }`;
        }
      });
      // console.log(params);
      // const products = await GetFilteredProducts(params);
      // console.log("params: ", params);

      const productsResponse = await fetch(
        `${apiURLFilteredProducts}?${params}`
      );
      const products = await productsResponse.json();

      setFilteredProducts(products);
      // console.log("ARRR", products);
    };
    filterProducts();
    setCurrentPage(1);
    // console.log(filterProducts());
  }, [filterValues, sortValues, categoryFilterSelection, searchFilterValue]);

  return (
    <div className="relative">
      {filteredProducts.length === 0 ? "Loading..." : ""}
      <ul className="mx-auto mb-24 grid gap-x-6 gap-y-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productsDisplay.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              // id={product.id}
              // name={product.attributes.name}
              // price={product.attributes.price}
              // color={
              //   product.attributes.colors[
              //     Object.keys(product.attributes.colors)[0]
              //   ]
              // }
              // quatity={product.attributes.quantity}
              // onSale={product.attributes.onSale}
              // salePrice={product.attributes.salePrice}
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
        {numPages > 1 &&
          Array.from({ length: numPages }, (_, i) => i + 1).map((pageNum) => (
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
