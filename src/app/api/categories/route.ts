import { backendUrl } from "@/utility/baseExports";
import { NextResponse } from "next/server";

export async function GET() {
  const categoriesResponse = await fetch(
    `${backendUrl}/api/categories?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );

  const categoriesJSON = await categoriesResponse.json();

  const categories = categoriesJSON.data;

  return NextResponse.json(categories);
}
