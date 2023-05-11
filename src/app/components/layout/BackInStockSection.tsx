import React from "react";
import Container from "../containers/Container";
import { GetProduct } from "@/utility/AsyncFetchFunctions";
import ProductCard from "@/app/productslisting/components/product/ProductCard";
import CategoryCard from "./CategoryCard";

const BackInStockSection = async () => {
  const product = await GetProduct("8", false);

  return (
    <Container>
      <div className="mb-[7rem]">
        <h3 className="text-[2rem] md:text-[2.4rem]">Back in stock!</h3>
        <div className="grid gap-[10px] grid-cols-2 md:grid-cols-3">
          <div className="col-span-2 md:row-span-2 md:col-span-2">
            {/* <div className="h-full flex flex-col bg-blue-950 justify-self-center">
              <div className="h-full">
                <img
                  src="https://cdn.shopify.com/s/files/1/0551/9242/0441/collections/Mlouye_-_Bags_collection_750x.jpg?v=1637109194"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="bg-red-500 ">Bags</p>
            </div> */}
            <CategoryCard
              label="Bags"
              img="https://cdn.shopify.com/s/files/1/0551/9242/0441/collections/Mlouye_-_Bags_collection_750x.jpg?v=1637109194"
            />
          </div>
          <div>
            <ProductCard product={product} />
          </div>
          <div>
            <CategoryCard
              label="Shoes"
              img="https://cdn.shopify.com/s/files/1/0551/9242/0441/collections/Mlouye_-_Shoe_collection_750x.jpg?v=1637109743"
            />
            {/* <div className="h-full bg-blue-800 justify-self-center">
              <div className="h-full">
                <img
                  src="https://cdn.shopify.com/s/files/1/0551/9242/0441/collections/Mlouye_-_Shoe_collection_750x.jpg?v=1637109743"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <p>Shoes</p>
            </div> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BackInStockSection;
