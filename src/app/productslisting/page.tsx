import Container from "../components/containers/Container";
import FilterSortingBar from "./components/FilteraAndSorting/FilterSortingBar";
import FilterSortingSelectPanel from "./components/FilteraAndSorting/FilterSortingSelectPanel";
import ProductsContainerServe from "./components/product/ProductsContainerServe";
import { Suspense } from "react";

const ProductsPage = async () => {
  return (
    <Container>
      <h2 className="text-[4rem] my-12">Products</h2>
      {/** @ts-expect-error  Async Server Component*/}
      <FilterSortingBar />
      <FilterSortingSelectPanel />

      <Suspense fallback={<h1>Loading...</h1>}>
        {/** @ts-expect-error  Async Server Component*/}
        <ProductsContainerServe />
      </Suspense>
    </Container>
  );
};

export default ProductsPage;
