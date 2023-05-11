import Container from "../components/containers/Container";
import FilterSortingBar from "./components/FilteraAndSorting/FilterSortingBar";
import FilterSortingSelectPanel from "./components/FilteraAndSorting/FilterSortingSelectPanel";
import { Suspense } from "react";
import ProductsPageTitle from "./components/product/ProductsPageTitle";
import ProductsContainer from "./components/product/ProductsContainer";
import SearchFilterMenu from "./components/FilteraAndSorting/SearchFilterMenu";

const ProductsPage = async () => {
  return (
    <Container>
      <SearchFilterMenu />
      <ProductsPageTitle />
      {/** @ts-expect-error  Async Server Component*/}
      <FilterSortingBar />
      <FilterSortingSelectPanel />

      <ProductsContainer />
      {/* <Suspense fallback={<h1>Loading..</h1>}>
      </Suspense> */}
    </Container>
  );
};

export default ProductsPage;
