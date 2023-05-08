"use client";

import { baseImageUrl } from "@/utility/baseExports";
import Image from "next/image";

interface Props {
  label: string;
  imageSrc: string;
  clickHandler: () => void;
}

const SearchFilterCard: React.FC<Props> = ({
  label,
  imageSrc,
  clickHandler,
}) => {
  return (
    <button
      className="flex px-[1.5rem] py-[15px] w-full items-center gap-8 hover:bg-[#F2F2F2]"
      onClick={clickHandler}
    >
      <div className="relate w-[50px] h-[50px] bg-white">
        <Image
          src={
            baseImageUrl + imageSrc ||
            "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-art-deco-cyclamen-1_ec8e69b6-92ea-4c48-b8b6-34601cf3c070_1100x.jpg?v=1637106934"
          }
          width={100}
          height={100}
          alt="search image"
          className="w-full h-full"
        />
      </div>
      <p className="text-[1.4rem]">{label}</p>
    </button>
  );
};

export default SearchFilterCard;
