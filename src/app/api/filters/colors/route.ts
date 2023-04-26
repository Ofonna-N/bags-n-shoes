import { Product, ProductsFilter } from "@/utility/CustomTypes";
import { apiURLProducts } from "@/utility/baseExports";
import { NextResponse } from "next/server";

export async function GET() {
  const productsResponse = await fetch(apiURLProducts);
  const products = await productsResponse.json();

  const colors: ProductsFilter[] = [];
  products.forEach((product: Product) => {
    for (const [key, value] of Object.entries(product.attributes.colors)) {
      let index = 0;
      if (
        colors.some((color, i) => {
          index = i;
          return color.key == key;
        })
      ) {
        colors[index].count += 1;
      } else {
        colors.push({ key, count: 1 });
      }
    }
  });

  return NextResponse.json(colors);
}
