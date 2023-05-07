import { Product } from "@/utility/CustomTypes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const params: string[] = [];
  const colors = searchParams.getAll("color");

  //   const productType = searchParams.getAll("producttype");
  //   const availability = searchParams.getAll("availability");
  //   const priceFrom = searchParams.get("from");
  //   const priceTo = searchParams.get("to");

  if (colors.length > 0) {
    colors.forEach((color) => {
      params.push(`filters[colors][$contains]=${color}`);
    });
  }

  const productsResponse = await fetch(
    `http://127.0.0.1:1337/api/products?populate=*&${params.join("&")}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );
  const products: Product[] = await productsResponse.json();
  return NextResponse.json(products);
}

//http://localhost:3000/api/filters/products?color=Cyclamen&color=Mediterranean%20Blue&color=Emerald&color=Black&from=0.00&to=3.00&availability=In%20Stock&producttype=bags&producttype=shoes
//   return NextResponse.json("hello!" + " - " + (p === "mike"));
//   return NextResponse.json(
//     `colors:${colors} - categories:${productType} - availability:${availability} - price:${priceFrom}-${priceTo}`
//   );
