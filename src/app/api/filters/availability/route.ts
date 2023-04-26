import { Product, ProductsFilter } from "@/utility/CustomTypes";
import { apiURLProducts } from "@/utility/baseExports";
import { NextResponse } from "next/server";

export async function GET() {
  const productsResponse = await fetch(apiURLProducts);
  const products = await productsResponse.json();
  // const products: DocumentData[] = await productsResponse.json();

  const availability: ProductsFilter[] = [
    {
      key: "In Stock",
      count: 0,
    },
    {
      key: "Out of Stock",
      count: 0,
    },
  ];

  products.forEach((product: Product) => {
    if (product.attributes.quantity > 0) {
      availability[0].count += 1;
    } else {
      availability[1].count += 1;
    }
  });
  // products.forEach((product) => {
  //   if (product.InStock) {
  //     availability[0].count += 1;
  //   } else {
  //     availability[1].count += 1;
  //   }
  // });

  return NextResponse.json(availability);
}
