import Link from "next/link";
import React from "react";
import Container from "../components/containers/Container";
import CartItem from "./components/CartItem";
import EmptyBtn from "../productslisting/components/product/EmptyBtn";
import CartDisplay from "./components/CartDisplay";
import { getRandomSort } from "@/utility/baseExports";
import { GetFilteredProducts } from "@/utility/AsyncFetchFunctions";
import FeaturedProductsWrappper from "../productslisting/components/product/FeaturedProductsWrappper";
import ProductCard from "../productslisting/components/product/ProductCard";

const CartPage = async () => {
  const featuredProducts = await GetFilteredProducts(
    `maxCount=4&availability=In Stock&sort=${getRandomSort()}`
  );
  return (
    <Container>
      <CartDisplay />
      <div>
        <h3 className="text-[3rem]">Featured collection</h3>
        <FeaturedProductsWrappper length={featuredProducts.length}>
          {featuredProducts.map((product) => (
            <li key={product.id} className="max-w-[50rem]">
              <ProductCard product={product} />
            </li>
          ))}
        </FeaturedProductsWrappper>
        <span className="block translate-y-[-7rem]">
          <Link
            href={"/productslisting"}
            className="bg-base text-white block text-center py-[1.5rem] w-[30rem] mx-auto"
          >
            View all
          </Link>
        </span>
      </div>
    </Container>
  );
};

export default CartPage;
