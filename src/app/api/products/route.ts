// import { database } from "../../../../firebaseInit";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // const docRef = doc(database, "products", "Art Deco");
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   console.log(docSnap.data().color);
  //   return NextResponse.json(docSnap.data().color);
  // } else {
  //   return NextResponse.json("doesnt exist");
  // }

  return NextResponse.json("querySnapshot.docs");
}
