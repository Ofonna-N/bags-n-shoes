"use client";
import IconBtn from "@/app/components/navbar/IconBtn";
import QuantityCounter from "@/app/productslisting/components/product/QuantityCounter";
import { deleteCartItem, updateCartItem } from "@/appstore/slices/CartSlice";
import { useAppDispatch } from "@/customHooks/storeHooks";
import { CartItem } from "@/utility/CustomTypes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { BsTrash3Fill } from "react-icons/bs";

type Props = {
  cartItem: CartItem;
};

const CartItem: React.FC<Props> = ({ cartItem }) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);

  // const mountRef = useRef(false);
  // const [total, setTotal] = useState(cartItem.total);

  const dispach = useAppDispatch();

  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const subQuantity = () => {
    setQuantity((prev) => prev - 1);
  };

  const updateQuantity = (value: number) => {
    setQuantity(value);
  };

  useEffect(() => {
    // setTotal(quantity * cartItem.total);
    // if (!mountRef.current) {
    //   mountRef.current = true;
    //   return;
    // }
    dispach(updateCartItem({ id: cartItem.id, quantity: quantity }));
  }, [quantity]);

  return (
    <>
      <div className=" grid grid-cols-6 pt-4 ">
        <div className="  col-span-4 md:col-span-5 md:grid md:grid-cols-5">
          <div className=" col-span-3 flex  md:col-span-3">
            <div className="h-[10rem] w-[10rem] shrink-0 bg-slate-600 mr-3">
              <Image
                src={cartItem.imgSrc}
                width={100}
                height={100}
                alt="cart item"
                className="object-cover"
              />
            </div>
            <div className="h-full w-full ">
              <Link
                href={`/productslisting/${cartItem.id.split(" ")[0]}`}
                className="text-[2rem] hover:underline"
              >
                {cartItem.name}
              </Link>
              <p className="text-base2">${cartItem.price.toFixed(2)}</p>
              <p className="text-base2">Color:{cartItem.color}</p>
              {cartItem.size && (
                <p className="text-base2">Size:{cartItem.size}</p>
              )}
            </div>
          </div>
          <div className="relative h-max flex flex-wrap gap-[1rem] md:items-center pl-[10rem] md:col-span-2 md:pl-0">
            <QuantityCounter
              quantity={quantity}
              addQuantity={addQuantity}
              subQuantity={subQuantity}
              updateQuantity={updateQuantity}
            />
            <IconBtn
              icon={<BsTrash3Fill />}
              clickHandler={() => {
                dispach(deleteCartItem({ id: cartItem.id }));
              }}
              className=""
            />
          </div>
        </div>

        <div className=" py-[1rem] text-[1.8rem] col-span-2 md:col-span-1">
          <p>${cartItem.total}</p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
