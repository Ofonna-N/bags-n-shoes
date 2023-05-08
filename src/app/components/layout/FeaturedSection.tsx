import React from "react";
import Container from "../containers/Container";
import { GetFilteredProducts } from "@/utility/AsyncFetchFunctions";
import ProductCard from "@/app/productslisting/components/product/ProductCard";

const FeaturedSection = async () => {
  const products = await GetFilteredProducts("maxCount=8");

  return (
    <Container>
      <div className="p-[2rem]">
        <div className="text-center mb-12">
          <h2 className="text-[3rem] md:text-[4rem] mb-7">
            Obsessive Attention. Intelligent Effort.
          </h2>
          <p className="text-[1.5rem] md:text-[1.6rem] text-base2">
            Functional handbags made of luxurious materials to improve people's
            lives in small but mighty ways.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, i) => (
            <li>
              {/* <div className="max-w-[40rem] bg-red-600 justify-self-center">
                <div className="aspect-square w-20rem">img</div>
                <p>Name</p>
                <p>Price</p>
              </div> */}
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default FeaturedSection;
