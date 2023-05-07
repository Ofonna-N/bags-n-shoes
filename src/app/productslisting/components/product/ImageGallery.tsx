"use client";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import IconBtn from "@/app/components/navbar/IconBtn";
import { baseImageUrl } from "@/utility/baseExports";
import Image from "next/image";

type Props = {
  images: string[];
  selectedColor: string;
};

const ImageGallery: React.FC<Props> = ({ images, selectedColor }) => {
  const scrollPanelRef = useRef<HTMLUListElement | null>(null);
  const [selectedImg, setSelectedImg] = useState(1);

  useEffect(() => {
    console.log(selectedColor);
    if (scrollPanelRef.current) {
      setSelectedImg(1);
      scrollPanelRef.current.scroll({
        left: 0,
        behavior: "smooth",
      });
    }
  }, [selectedColor]);

  return (
    <div className="w-full md:hidden bg-slate-800">
      <ul
        ref={scrollPanelRef}
        className="bg-amber-700 flex overflow-x-hidden snap-x snap-mandatory "
      >
        <li className="w-full aspect-square shrink-0 p-2 snap-center">
          <Image
            src={baseImageUrl + selectedColor}
            width={768}
            height={768}
            alt="Select Image"
            className="w-full h-full"
          />
          {/* <div className="bg-red-800 w-full h-full flex justify-center items-center shrink-0">
            <span className="bg-slate-400 px-3 rounded-lg">
              {selectedColor}
            </span>
          </div> */}
        </li>
        {images.map((img) => (
          <li
            key={img}
            className="w-full aspect-square shrink-0 p-2 snap-center"
          >
            {/* <div className="bg-red-800 w-full h-full flex justify-center items-center shrink-0">
              <span className="bg-slate-400 px-3 rounded-lg">{img}</span>
            </div> */}
            <Image
              src={baseImageUrl + img}
              width={768}
              height={768}
              alt="Select Image"
              className="w-full h-full"
            />
          </li>
        ))}
      </ul>
      <div className="flex justify-center py-[2rem]">
        <IconBtn
          icon={<FaAngleLeft />}
          className={`px-4 disabled:text-slate-600`}
          disabled={selectedImg <= 1}
          clickHandler={() => {
            setSelectedImg((prev) => prev - 1);
            if (scrollPanelRef.current) {
              //   console.log(scrollPanelRef.current.scrollLeft);
              // scrollPanelRef.current.scroll
              scrollPanelRef.current.scroll({
                left:
                  scrollPanelRef.current.scrollLeft -
                  scrollPanelRef.current.offsetWidth,
                behavior: "smooth",
              });
            }
          }}
        />
        <span className="px-[3px]">
          {selectedImg <= 0 ? 1 : selectedImg} / {images.length + 1}
        </span>
        <IconBtn
          icon={<FaAngleRight />}
          className={`px-4 disabled:text-slate-600`}
          disabled={selectedImg >= images.length + 1}
          clickHandler={() => {
            setSelectedImg((prev) => prev + 1);
            if (scrollPanelRef.current) {
              scrollPanelRef.current.scroll({
                left:
                  scrollPanelRef.current.scrollLeft +
                  scrollPanelRef.current.offsetWidth,
                behavior: "smooth",
              });
              //   scrollPanelRef.current.scrollLeft +=
              //     scrollPanelRef.current.offsetWidth;
              //   console.log(scrollPanelRef.current.scrollLeft);
            }
          }}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
