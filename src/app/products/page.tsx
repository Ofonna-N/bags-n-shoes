import {
  collection,
  DocumentData,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";

import { database } from "../../../firebaseInit";
import Container from "../components/containers/Container";
import FilterSortingBar from "./components/FilteraAndSorting/FilterSortingBar";
import ProductsContainerServe from "./components/product/ProductsContainerServe";
import { Suspense } from "react";

async function getProducts(): Promise<DocumentData[]> {
  const productsCol = collection(database, "products");
  const productsSnapshot = await getDocs(productsCol);
  const productsDocuments = productsSnapshot.docs;

  return productsDocuments.map((doc) => doc.data());
}

const ProductsPage = async () => {
  const productsData = getProducts();

  return (
    <Container>
      <h2 className="text-[4rem] my-12">Products</h2>
      <FilterSortingBar />

      <Suspense fallback={<h1>Loading...</h1>}>
        {/** @ts-expect-error  Async Server Component*/}
        <ProductsContainerServe data={productsData} />
      </Suspense>
    </Container>
  );
};

export default ProductsPage;
