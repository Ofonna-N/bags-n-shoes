// import { database } from "../../../../firebaseInit";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

import { siteUrl } from "@/utility/baseExports";

export async function GET() {
  const productsResponse = await fetch(`${siteUrl}/api/products?populate=*`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
    cache: "no-store",
  });
  const responseJson = await productsResponse.json();
  // const products = responseJson.data;

  return NextResponse.json(responseJson);
}
