"use client";

import { DocumentData } from "firebase/firestore";

const TestClientComponent = ({ data }: { data: any }) => {
  console.log(data);
  return <div className="absolute top-8">Test component here!</div>;
};

export default TestClientComponent;
