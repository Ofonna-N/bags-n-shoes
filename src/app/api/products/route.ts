// import { database } from "../../../../firebaseInit";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

import { siteUrl } from "@/utility/baseExports";

export async function GET() {
  const productsResponse = await fetch(`${siteUrl}/api/products?populate=*`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });
  const responseJson = await productsResponse.json();
  const products = responseJson.data;

  return NextResponse.json(products);
}
