import Container from "@/app/components/containers/Container";
// import { GetFilteredProducts, GetProduct } from "@/utility/AsyncFetchFunctions";
import {
  getRandomSort,
  siteUrl,
  sortingDropDownValues,
} from "@/utility/baseExports";
import React from "react";
import Image from "next/image";
import pdExtraImg from "@/assets/images/pdextra.webp";
import ProductDetails from "../components/product/ProductDetails";
import ProductCard from "../components/product/ProductCard";
import FeaturedProductsWrappper from "../components/product/FeaturedProductsWrappper";
import { Product } from "@/utility/CustomTypes";
import {
  GetFilteredProducts,
  GetProduct,
} from "@/app/functions/RouteAlternative";

type DynamicRouteProp = {
  params: { productId: string };
};

// async function GetRawProduct(id: string) {
//   const pResponse = await fetch(
//     `${siteUrl}/api/products?populate=*&filters[id][$eq]=${id}`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
//       },
//     }
//   );
//   const productData = await pResponse.json();
//   const product = productData.data[0];
//   return product;
// }

// async function GetFeaturedProductsRaw(
//   productName: string,
//   categoryName: string,
//   sort: string
// ) {
//   let sortValue = "sort[0]=name:asc";
//   switch (sort) {
//     case sortingDropDownValues.name_asc:
//       sortValue = "sort[0]=name:asc";
//       break;
//     case sortingDropDownValues.name_des:
//       sortValue = "sort[0]=name:desc";
//       break;
//     case sortingDropDownValues.price_asc:
//       sortValue = "sort[0]=price:asc";
//       break;
//     case sortingDropDownValues.price_desc:
//       sortValue = "sort[0]=price:desc";
//       break;

//     default:
//       break;
//   }
//   const pResponse = await fetch(
//     `${siteUrl}/api/products?populate=*&pagination[pageSize]=4&filters[name][$ne]=${productName}&${sortValue}&filters[category][name][$eq]=${categoryName}`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
//       },
//     }
//   );

//   const productsJson = await pResponse.json();
//   const products = productsJson.data;
//   // console.log(products, "YEEER");
//   return products;
// }

const ProductPage = async ({ params }: DynamicRouteProp) => {
  // const product: Product = await GetRawProduct(params.productId);
  // const featuredProducts: Product[] = await GetFeaturedProductsRaw(
  //   product.attributes.name,
  //   product.attributes.category.data.attributes.name,
  //   getRandomSort()
  // );
  // console.log(featuredProducts.length, "Yessirsky");
  // console.log(product.attributes.name, "Yessirsky");
  const product = await GetProduct(params.productId);
  const featuredProducts = await GetFilteredProducts(
    `maxCount=4&exclude=${product.attributes.name}&producttype=${
      product.attributes.category.data.attributes.name
    }&sort=${getRandomSort()}`
  );
  // return null;
  return (
    <Container>
      <div className="">
        <ProductDetails product={product} />
        <div className="flex flex-col md:flex-row  w-full bg-slate-200">
          <div className="w-full p-[7rem]">
            <h3 className="text-[4rem]">A new kind of bag</h3>
            <p className="text-[1.8rem] text-base2">
              Unexpected shapes with smart details, functionality, a new luxury
              feel with a contemporary price point.
            </p>
          </div>
          <div className="min-h-[31.2rem] relative w-full overflow-hidden">
            <Image
              src={pdExtraImg}
              width={548}
              height={312}
              alt="new kind of bag"
              className="absolute h-full w-full object-cover "
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full mb-[2rem]">
          <div className=" w-full p-[4rem]">
            <h3 className="text-[2.5rem]"> Free Shipping</h3>
            <p className="text-[1.6rem] text-base2">
              We offer free worldwide express shipping on all orders.
              You&apos;ll receive your order an estimated 1–4 days after
              shipment.
            </p>
          </div>
          <div className=" w-full p-[4rem]">
            <h3 className="text-[2.5rem]">Hassle-Free Exchanges</h3>
            <p className="text-[1.6rem] text-base2">
              Exchanges are free. Try from the comfort of your home. We will
              collect from your home, work or an alternative address.
            </p>
          </div>
        </div>
        <h3 className="text-[3rem] mb-[1rem]">You may also like</h3>
        <FeaturedProductsWrappper length={featuredProducts.length}>
          {featuredProducts.map((product) => (
            <li key={product.id} className="max-w-[50rem]">
              <ProductCard product={product} />
            </li>
          ))}
        </FeaturedProductsWrappper>
      </div>
    </Container>
  );
};

export default ProductPage;
