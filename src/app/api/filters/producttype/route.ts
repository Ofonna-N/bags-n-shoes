import { Category, Product, ProductsFilter } from "@/utility/CustomTypes";
import { apiURLCategories } from "@/utility/baseExports";
import { NextResponse } from "next/server";

export async function GET() {
  const categoryResponse = await fetch(apiURLCategories, {
    cache: "no-store",
  });
  const categories: Category[] = await categoryResponse.json();

  const categoryNames: ProductsFilter[] = [];

  // categoryNames = categories.map(category => category.attributes.name);

  categories.forEach((category) => {
    const catName = category.attributes.name;
    categoryNames.push({
      key: catName,
      count: category.attributes.products.data.length,
    });
    // let index = 0;
    // if (
    //   categoryNames.some((category, i) => {
    //     index = i;
    //     return category.key == catName;
    //   })
    // ) {
    //   categoryNames[index].count += 1;
    // } else {
    //   categoryNames.push({ key: catName, count: 1 });
    // }
  });

  return NextResponse.json(categoryNames);
}
