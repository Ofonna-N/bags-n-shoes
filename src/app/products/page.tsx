import Container from "../components/containers/Container";
import FilterSortingBar from "./components/FilteraAndSorting/FilterSortingBar";

const ProductsPage = () => {
  return (
    <Container>
      <h2 className="text-[4rem] my-12">Products</h2>
      <FilterSortingBar />
    </Container>
  );
};

export default ProductsPage;
