import Container from "../components/containers/Container";
import FilterSortingBar from "./components/FilteraAndSorting/FilterSortingBar";
import FilterSortingSelectPanel from "./components/FilteraAndSorting/FilterSortingSelectPanel";
import ProductsContainerServe from "./components/product/ProductsContainerServe";
import { Suspense } from "react";
import ProductsPageTitle from "./components/product/ProductsPageTitle";

const ProductsPage = async () => {
  return (
    <Container>
      <ProductsPageTitle />
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
