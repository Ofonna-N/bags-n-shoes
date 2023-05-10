"use client";
import { updateCateryFilter } from "@/appstore/slices/CategoryFilterSlice";
import { useAppDispatch } from "@/customHooks/storeHooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const CategoryCard = ({ img, label }: { img: string; label: string }) => {
  const dispach = useAppDispatch();
  const router = useRouter();

  const menuSelectBtnClicked = () => {
    dispach(updateCateryFilter({ category: label.toLowerCase() }));
    // dispach(toggleSearchFilter({ toggle: false }));
    // dispach(setSearchFilter({ search: "" }));
    router.push("/productslisting");
  };

  return (
    <button
      className=" group h-full flex flex-col bg-blue-950 justify-self-center overflow-hidden"
      onClick={() => menuSelectBtnClicked()}
    >
      <div className="h-full">
        <Image
          width={1024}
          height={1024}
          src={img}
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 transition-all"
        />
      </div>
      <p className="bg-white flex justify-between w-full items-center text-[1.8rem] z-30">
        {label}
        <BsArrowRight className="text-[2.5rem] mr-[1rem] transition-all group-hover:mr-0" />
      </p>
    </button>
  );
};

export default CategoryCard;
