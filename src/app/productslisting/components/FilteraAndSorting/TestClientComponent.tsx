"use client";

import { GetProducts } from "@/utility/AsyncFetchFunctions";
import { useEffect } from "react";

const TestClientComponent = () => {
  // useEffect(() => {
  //   const products = GetProducts();
  //   products.then((response) => {
  //     console.log(response, "Test component caLL");
  //   });
  //   console.log("brr");
  // }, []);
  return (
    <>
      <div className="relative h-full bg-slate-700">
        <div className="bg-red-950 absolute w-[30%] h-full"></div>
      </div>
    </>
  );
};

export default TestClientComponent;
