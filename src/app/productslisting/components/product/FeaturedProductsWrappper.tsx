import React from "react";

type Props = {
  children: React.ReactNode;
  length: number;
};

const FeaturedProductsWrappper: React.FC<Props> = ({ children, length }) => {
  return (
    <ul
      className={`bg-red-600 col-span-2 grid grid-cols-2 lg:grid-cols-${length} justify-items-center gap-2 py-[1rem] mb-[10rem]`}
    >
      {children}
    </ul>
  );
};

export default FeaturedProductsWrappper;
