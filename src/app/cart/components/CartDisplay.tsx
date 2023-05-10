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
  const hasUser = useAppSelector((state) => state.UserSlice.userExist);
  return cart.cartItems.length > 0 ? (
    <>
      <div className="py-[4rem] flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-[5rem]">Your cart</h2>
        <Link
          href={"/productslisting"}
          className="border-b border-base text-[1.8rem]"
        >
          Continue shopping
        </Link>
      </div>
      <div className="grid grid-cols-6 border-b border-gray-400 text-base2 text-[1.2rem]">
        <div className="col-span-4 md:grid md:col-span-5 uppercase  md:grid-cols-5">
          <span className="col-span-3 flex items-center h-full">Product</span>
          <div className="py-[1rem] uppercase hidden col-start-4 col-span-2 md:block">
            Quantity
          </div>
        </div>

        <div className=" py-[1rem] uppercase col-span-2 md:col-span-1">
          Total
        </div>
      </div>
      <ul className="border-b border-gray-400">
        {cart.cartItems.map((cartItem) => (
          <li key={cartItem.id} className="py-[3rem]">
            <CartItem cartItem={cartItem} />
          </li>
        ))}
      </ul>
      <div className=" mt-[2rem] text-center text-[1.8rem] space-y-10 md:text-right  overflow-hidden">
        <h3>
          Subtotal <span className="text-base2 ml-3">${cart.totalCost}</span>
        </h3>
        <p className="text-[1.3rem]">
          Taxes and shipping calculated at checkout
        </p>

        <div className="md:w-[40%] md:float-right">
          <EmptyBtn
            label="Check Out"
            className="bg-base text-white hover:outline-[2px] hover:outline outline-base transition-all duration-75"
          />
        </div>
      </div>
    </>
  ) : (
    <div className="text-center py-[4rem]">
      <h2 className="text-[4rem] mb-4">Your cart is empty</h2>
      <div className="w-[20rem] mx-auto mb-[3rem]">
        <EmptyBtn
          label="Continue shopping"
          className="bg-base text-white hover:outline-[2px] hover:outline outline-base transition-all duration-75"
          clickHandler={() => {
            router.push("/productslisting");
            // console.log("yerr");
          }}
        />
      </div>

      <h3 className="text-[2.3rem]">Have an account</h3>
      <p className="text-base2">
        <Link
          href={hasUser ? "/account" : "/account/login"}
          className="underline cursor-pointer "
        >
          Log in
        </Link>{" "}
        to check out faster.
      </p>
    </div>
  );
};

export default CartDisplay;
