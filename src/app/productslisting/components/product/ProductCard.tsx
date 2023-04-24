"use client";
import Image from "next/image";
import { baseImageUrl } from "@/utility/baseExports";
import Badge from "./BasicBadge";

interface Props {
  name: string;
  price: number;
  color: string;
  quatity: number;
  salePrice: number;
  onSale?: boolean;
  // quantity:number;
  // category:{name:string, type:string};
}

const ProductCard: React.FC<Props> = ({
  name,
  price,
  color,
  quatity,
  onSale,
  salePrice,
}) => {
  return (
    <div className="max-w-[600px] justify-self-center cursor-pointer">
      <div className="relative overflow-hidden">
        <Image
          className="hover:scale-110 transition-all aspect-square"
          src={
            baseImageUrl + color ||
            "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-art-deco-cyclamen-1_ec8e69b6-92ea-4c48-b8b6-34601cf3c070_1100x.jpg?v=1637106934"
          }
          width={512}
          height={512}
          alt="Product Image"
          priority={false}
        />
        {quatity < 1 && (
          <Badge
            label="Sold out"
            className="absolute left-[1rem] bottom-[10px] bg-black"
          />
        )}
        {onSale && (
          <Badge
            label="On sale"
            className="absolute left-[1rem] bottom-[10px] bg-blue-800"
          />
        )}
      </div>
      <div>
        <h3 className="text-[1.3rem]"> {name || "Art Deco"}</h3>
        <span className="text-[1.8rem]">
          {onSale ? (
            <span>
              <span className="line-through text-[1.4rem] text-gray-700">
                ${price.toFixed(2)}
              </span>{" "}
              ${salePrice.toFixed(2)}
            </span>
          ) : (
            <span>${price.toFixed(2)}</span>
          )}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
