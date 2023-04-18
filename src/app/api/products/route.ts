// import { database } from "../../../../firebaseInit";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { database } from "../../../../firebaseInit";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  const productsCol = collection(database, "products");
  const productsSnapshot = await getDocs(productsCol);
  const productsDocuments = productsSnapshot.docs;
  // console.log(productsDocuments, "from route");
  return NextResponse.json(productsDocuments.map((doc) => doc.data()));

  // return NextResponse.json("querySnapshot.docs");
}
