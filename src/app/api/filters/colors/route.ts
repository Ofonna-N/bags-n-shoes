import { GetProducts } from "@/utility/AsyncFetchFunctions";
import { Product, ProductsFilter } from "@/utility/CustomTypes";
import { apiURLProducts, siteUrl } from "@/utility/baseExports";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(siteUrl + apiURLProducts, {
    cache: "no-store",
  });
  const productsMeta = await response.json();

  const products: Product[] = productsMeta.data;

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
