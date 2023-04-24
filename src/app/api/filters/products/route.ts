import { NextRequest, NextResponse } from "next/server";
import { database } from "../../../../../firebaseInit";
import {
  CollectionReference,
  DocumentData,
  QueryConstraint,
  and,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import next from "next/types";
import { Product } from "@/utility/CustomTypes";
type Params = {
  [key: string]: string;
};
export async function GET(request: NextRequest) {
  // const productsCol: CollectionReference<DocumentData> = collection(
  //   database,
  //   "products"
  // );

  // const constraints: QueryConstraint[] = [];
  const searchParams = request.nextUrl.searchParams;
  const params: string[] = [];
  const colors = searchParams.getAll("color");
  const productType = searchParams.getAll("producttype");
  const availability = searchParams.getAll("availability");
  const priceFrom = searchParams.get("from");
  const priceTo = searchParams.get("to");

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
        // constraints.push(where("InStock", "==", true));
      } else {
        params.push(`filters[quantity][$lt]=${1}`);
        // constraints.push(where("InStock", "==", false));
      }
    });
  }
  if (priceFrom || priceTo) {
    params.push(`filters[price][$lte]=${priceTo}`);
    params.push(`filters[price][$gte]=${priceFrom}`);
    // constraints.push(where("price", ">=", Number(priceFrom)));
    // constraints.push(where("price", "<=", Number(priceTo)));
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
  // let q =
  //   constraints.length > 0
  //     ? query(productsCol, ...constraints)
  //     : query(productsCol);

  // const productsSnapshot = await getDocs(q);
  // const productsDocuments = productsSnapshot.docs;
  // const filteredProducts = productsDocuments.map((doc) => doc.data());
  //http://localhost:3000/api/filters/products?color=Cyclamen&color=Mediterranean%20Blue&color=Emerald&color=Black&from=0.00&to=3.00&availability=In%20Stock&producttype=bags&producttype=shoes
  //   return NextResponse.json("hello!" + " - " + (p === "mike"));
  //   return NextResponse.json(
  //     `colors:${colors} - categories:${productType} - availability:${availability} - price:${priceFrom}-${priceTo}`
  //   );
  // return NextResponse.json(filteredProducts);
}
