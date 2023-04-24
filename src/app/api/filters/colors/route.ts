import { Product, ProductsFilter } from "@/utility/CustomTypes";
import { apiURLProducts } from "@/utility/baseExports";
import { DocumentData } from "firebase/firestore";
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
  // const productsResponse = await fetch(apiURLProducts);
  // const products: DocumentData[] = await productsResponse.json();

  // const colors: ProductsFilter[] = [];

  // products.forEach((product) => {
  //   if (product.color && Array.isArray(product.color)) {
  //     product.color.forEach((colorData) => {
  //       // if (colorData === undefined || colorData.name === undefined) {
  //       //   console.log(colorData);
  //       //   console.log("Fatal ERORRR!!!!!!!");
  //       //   return;
  //       // }
  //       let index = 0;
  //       if (
  //         !colors.some((element, i) => {
  //           index = i;
  //           return colorData.name === element.key;
  //         })
  //       ) {
  //         const data = { key: colorData.name, count: 1 };
  //         colors.push(data);
  //       } else {
  //         // const data = {color:colorData.name, count:1};
  //         // colors.push(data);
  //         colors[index].count += 1;
  //       }
  //     });
  //   }
  // });

  // return NextResponse.json(colors);
}
