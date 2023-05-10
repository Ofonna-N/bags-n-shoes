import { siteUrl } from "@/utility/baseExports";
import { NextResponse } from "next/server";

export async function GET() {
  const categoriesResponse = await fetch(
    `${siteUrl}/api/categories?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      cache: "no-store",
    }
  );

  const categoriesJSON = await categoriesResponse.json();

  const categories = categoriesJSON.data;

  return NextResponse.json(categories);
}
