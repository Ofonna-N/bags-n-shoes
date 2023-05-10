"use client";
import React, { useEffect, useRef, useState } from "react";
import { GrClose } from "react-icons/gr";
import { BsCheckLg } from "react-icons/bs";
import EmptyBtn from "./EmptyBtn";
import Link from "next/link";
import { useAppSelector } from "@/customHooks/storeHooks";
import Image from "next/image";
import IconBtn from "@/app/components/navbar/IconBtn";
import { useRouter } from "next/navigation";

type Props = {
  name: string;
  color: string;
  size?: string;
  imgSrc: string;
};

const AddedToCartPopUp: React.FC<Props> = ({ name, color, size, imgSrc }) => {
  const cartQuantity = useAppSelector((state) => state.CartSlice.totalQuantity);
  const router = useRouter();
  const popUpRef = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState("hidden");

  const mountRef = useRef(false);

  const outOfFocusHandler = (e: MouseEvent) => {
    if (popUpRef.current && !popUpRef.current.contains(e.target as Node)) {
      //   console.log("out of pop up focus");
      setDisplay("hidden");
    }
  };

  useEffect(() => {
    console.log(cartQuantity, "quantity");
    if (!mountRef.current) {
      mountRef.current = true;
      return;
    }
    if (cartQuantity <= 0) return;
    // console.log("changing display");
    const timeout = setTimeout(() => {
      setDisplay("block");
    }, 100);
    return () => {
      clearTimeout(timeout);
      setDisplay("hidden");
      console.log("use effect cleanup");
    };
  }, [cartQuantity]);

  useEffect(() => {
    document.addEventListener("click", outOfFocusHandler);

    return () => document.removeEventListener("click", outOfFocusHandler);
  }, []);

  return (
    <div
      className={`${display} bg-white border md:border-t-0 border-gray-300 absolute left-0 top-0 w-full px-[3rem] py-[2rem] animate-dropDown`}
      ref={popUpRef}
    >
      <IconBtn
        icon={<GrClose />}
        className="cursor-pointer absolute top-[2.5rem] right-[2rem]"
        clickHandler={() => {
          setDisplay("hidden");
        }}
      />
      <h3 className="mb-[2rem] flex items-center gap-2">
        <BsCheckLg />
        Item added to your cart
      </h3>
      <div className="flex mb-[3.5rem]">
        <div className="w-[80px] aspect-square bg-slate-600 shrink-0">
          <Image
            src={imgSrc}
            width={80}
            height={80}
            alt="added cart item"
            className="w-full h-full"
          />
        </div>
        <div className="pl-[1rem] flex flex-col gap-2">
          <p className="text-[1.6rem] font-medium">{name}</p>
          <p className="">Color: {color}</p>
          {size && <p className="">Size: {size}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-[1rem] ">
        <EmptyBtn
          label={`View my cart (${cartQuantity})`}
          className="border-base border hover:outline-[2px] hover:outline outline-base transition-all duration-75"
          clickHandler={() => router.push("/cart")}
        />
        <EmptyBtn
          label="Check out"
          className="bg-base text-white hover:outline-[2px] hover:outline outline-base transition-all duration-75"
        />
        <Link
          href={"/productslisting"}
          className="border-b border-base w-max mx-auto text-[1.6rem]"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export default AddedToCartPopUp;
