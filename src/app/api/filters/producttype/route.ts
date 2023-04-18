import { ProductsFilter } from "@/utility/CustomTypes";
import { apiURLColors, apiURLProducts } from "@/utility/baseExports";
import { DocumentData } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  const productsResponse = await fetch(apiURLProducts);
  const products: DocumentData[] = await productsResponse.json();

  const productTypes: ProductsFilter[] = [];
  let curIndex = 0;
  products.forEach((product) => {
    if (
      Object.hasOwn(product, "category") &&
      productTypes.some((filter, index) => {
        curIndex = index;
        return filter.key === product.category.name;
      })
    ) {
      productTypes[curIndex].count += 1;
    } else {
      productTypes.push({ key: product.category.name, count: 1 });
    }
  });
  return NextResponse.json(productTypes);
}
