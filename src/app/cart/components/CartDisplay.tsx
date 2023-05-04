"use client";
import EmptyBtn from "@/app/productslisting/components/product/EmptyBtn";
import Link from "next/link";
import React from "react";
import { useAppSelector } from "@/customHooks/storeHooks";
import CartItem from "./CartItem";
import { useRouter } from "next/navigation";

const CartDisplay = () => {
  const cart = useAppSelector((state) => state.CartSlice);
  const router = useRouter();

  return cart.cartItems.length > 0 ? (
    <>
      <div className="py-[4rem] flex flex-wrap justify-between items-center">
        <h2 className="text-[5rem]">Your cart</h2>
        <Link
          href={"/productslisting"}
          className="border-b border-black text-[1.8rem]"
        >
          Continue shopping
        </Link>
      </div>
      <div className="grid grid-cols-6 border-b border-black">
        <div className="bg-green-500 col-span-4 md:grid md:col-span-5 uppercase  md:grid-cols-5">
          <span className="col-span-3 bg-slate-600 flex items-center h-full">
            Product
          </span>
          <div className="bg-green-600 py-[1rem] uppercase hidden col-start-4 col-span-2 md:block">
            Quantity
          </div>
        </div>

        <div className="bg-green-700 py-[1rem] uppercase col-span-2 md:col-span-1">
          Total
        </div>
      </div>
      <ul>
        {cart.cartItems.map((cartItem) => (
          <li key={cartItem.id} className="py-[3rem]">
            <CartItem cartItem={cartItem} />
          </li>
        ))}
      </ul>
      <div className=" mt-[2rem] text-center text-[1.8rem] space-y-10 md:text-right bg-gray-100 overflow-hidden">
        <h3>
          Subtotal <span>${cart.totalCost}</span>
        </h3>
        <p>Taxes and shipping calculated at checkout</p>

        <div className="md:w-[40%] md:float-right">
          <EmptyBtn label="Check Out" className="bg-black text-white" />
        </div>
      </div>
    </>
  ) : (
    <div className="bg-red-700 text-center py-[4rem]">
      <h2 className="text-[4rem] mb-4">Your cart is empty</h2>
      <div className="w-[20rem] mx-auto mb-[3rem]">
        <EmptyBtn
          label="Continue shopping"
          className="bg-black text-white"
          clickHandler={() => {
            router.push("/productslisting");
            // console.log("yerr");
          }}
        />
      </div>

      <h3 className="text-[2.3rem]">Have an account</h3>
      <p>
        <Link href={"/account/login"} className="underline cursor-pointer">
          Log in
        </Link>{" "}
        to check out faster.
      </p>
    </div>
  );
};

export default CartDisplay;
