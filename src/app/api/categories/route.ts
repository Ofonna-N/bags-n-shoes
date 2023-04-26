import { siteUrl } from "@/utility/baseExports";
import { NextResponse } from "next/server";

export async function GET() {
  const categoriesResponse = await fetch(
    `${siteUrl}/api/categories?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    }
  );

  const categoriesJSON = await categoriesResponse.json();

  const categories = categoriesJSON.data;

  return NextResponse.json(categories);
}
