"use client";
import Image from "next/image";
import { baseImageUrl } from "@/utility/baseExports";

interface Props {
  name: string;
  price: number;
  color: { name: string; image_1?: string; image_2?: string }[];
  // quantity:number;
  // category:{name:string, type:string};
}

const ProductCard: React.FC<Props> = ({ name, price, color }) => {
  return (
    <div className="max-w-[600px] justify-self-center cursor-pointer">
      <div className="overflow-hidden">
        <Image
          className="hover:scale-110 transition-all aspect-square"
          src={
            baseImageUrl + color[0].image_1 ||
            "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-art-deco-cyclamen-1_ec8e69b6-92ea-4c48-b8b6-34601cf3c070_1100x.jpg?v=1637106934"
          }
          width={512}
          height={512}
          alt="Product Image"
          priority={false}
        />
      </div>
      <div>
        <h3 className="text-[1.3rem]"> {name || "Art Deco"}</h3>
        <span className="text-[1.8rem]">${price.toFixed(2) || "$165.32"}</span>
      </div>
    </div>
  );
};

export default ProductCard;
