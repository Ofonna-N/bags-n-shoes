import { NextRequest, NextResponse } from "next/server";

import { Product } from "@/utility/CustomTypes";
import { sortingDropDownValues } from "@/utility/baseExports";
type Params = {
  [key: string]: string;
};
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const params: string[] = [];
  const colors = searchParams.getAll("color");
  const productType = searchParams.getAll("producttype");
  const availability = searchParams.getAll("availability");
  const priceFrom = searchParams.get("from");
  const priceTo = searchParams.get("to");
  const sort = searchParams.get("sort");
  const categoryFilter = searchParams.get("category");

  if (categoryFilter) {
    params.push(
      `filters[$or][0][category][name]=${categoryFilter}&filters[$or][1][subcategory][name]=${categoryFilter}`
    );
  }

  if (colors.length > 0) {
    // constraints.push(where("colors", "in", colors));
    colors.forEach((color) => {
      params.push(`filters[colors][$contains]=${color}`);
    });
  }
  //work on querying categories!!!!!!!!!!!!
  if (productType.length > 0) {
    productType.forEach((category) => {
      params.push(`filters[category][name][$eq]=${category}`);
    });
    // constraints.push(where("category.name", "in", productType));
  }

  if (availability.length > 0) {
    availability.forEach((status) => {
      if (status === "In Stock") {
        params.push(`filters[quantity][$gt]=${0}`);
      } else {
        params.push(`filters[quantity][$lt]=${1}`);
      }
    });
  }
  if (priceFrom || priceTo) {
    params.push(`filters[price][$lte]=${priceTo}`);
    params.push(`filters[price][$gte]=${priceFrom}`);
  }
  if (sort) {
    switch (sort) {
      case sortingDropDownValues.name_asc:
        params.push("sort=name:asc");
        break;
      case sortingDropDownValues.name_des:
        params.push("sort=name:desc");
        break;
      case sortingDropDownValues.price_asc:
        params.push("sort=price:asc");
        break;
      case sortingDropDownValues.price_desc:
        params.push("sort=price:desc");
        break;

      default:
        break;
    }
  }
  const productsResponse = await fetch(
    `http://127.0.0.1:1337/api/products?populate=*&${params.join("&")}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    }
  );
  const responseJson = await productsResponse.json();
  const products: Product[] = responseJson.data;
  return NextResponse.json(products);
}