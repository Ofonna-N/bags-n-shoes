// import { database } from "../../../../firebaseInit";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { database } from "../../../../firebaseInit";
import { collection, getDocs } from "firebase/firestore";
import { siteUrl } from "@/utility/baseExports";
import { Product } from "@/utility/CustomTypes";

export async function GET() {
  const productsResponse = await fetch(`${siteUrl}/api/products?populate=*`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });
  const responseJson = await productsResponse.json();
  const products = responseJson.data;

  return NextResponse.json(products);
  // const productsCol = collection(database, "products");
  // const productsSnapshot = await getDocs(productsCol);
  // const productsDocuments = productsSnapshot.docs;
  // console.log(productsDocuments, "from route");
  // return NextResponse.json(productsDocuments.map((doc) => doc.data()));

  // return NextResponse.json("querySnapshot.docs");
}
