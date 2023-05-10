import React from "react";
import Container from "../containers/Container";
import { GetFilteredProducts } from "@/utility/AsyncFetchFunctions";
import ProductCard from "@/app/productslisting/components/product/ProductCard";

const FeaturedSection = async () => {
  const products = await GetFilteredProducts("maxCount=8");

  return (
    <Container>
      <div className="p-[2rem] mb-[4rem]">
        <div className="text-center mb-12">
          <h2 className="text-[3rem] md:text-[4rem] mb-7">
            Obsessive Attention. Intelligent Effort.
          </h2>
          <p className="text-[1.5rem] md:text-[1.6rem] text-base2">
            Functional handbags made of luxurious materials to improve
            people&apos;s lives in small but mighty ways.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, i) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default FeaturedSection;
