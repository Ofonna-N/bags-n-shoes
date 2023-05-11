// import { database } from "../../../../firebaseInit";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

import { backendUrl } from "@/utility/baseExports";

export async function GET() {
  const productsResponse = await fetch(
    `${backendUrl}/api/products?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );
  const responseJson = await productsResponse.json();
  // const products = responseJson.data;

  return NextResponse.json(responseJson);
}
