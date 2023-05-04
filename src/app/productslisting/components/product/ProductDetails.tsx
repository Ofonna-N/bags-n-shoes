"use client";
import { Product } from "@/utility/CustomTypes";
import React, { useState } from "react";
import BasicBadge from "./BasicBadge";
import ClickableBadge from "./ClickableBadge";
import EmptyBtn from "./EmptyBtn";
import QuantityCounter from "./QuantityCounter";
import Accordion from "./Accordion";
import Image from "next/image";
import { baseImageUrl } from "@/utility/baseExports";
import { useAppDispatch } from "@/customHooks/storeHooks";
import { addCartItem } from "@/appstore/slices/CartSlice";

type Props = {
  product: Product;
};

const ProductDetails: React.FC<Props> = ({ product }) => {
  const dispach = useAppDispatch();

  const [selectedImgColor, setSelectedImgColor] = useState(
    Object.keys(product.attributes.colors)[0]
  );

  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.attributes.category.data.attributes.extention?.sizes &&
      product.attributes.category.data.attributes.extention.sizes.length > 0
      ? product.attributes.category.data.attributes.extention.sizes[0]
      : undefined
  );

  const [quantity, setQuantity] = useState(1);

  // console.log(slectedSize, "selected size!");
  // console.log(product.attributes.category.data.attributes, "extension");
  // console.log(product, "product");

  const clickedColorHandler = (id: string) => {
    setSelectedImgColor(id);
    // console.log(product.attributes.colors[id][0], "Boing", selectedImgColor);
  };
  const clickedSizeHandler = (id: string) => {
    setSelectedSize(id);
    // console.log(product.attributes.colors[id][0], "Boing", selectedImgColor);
  };

  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const subQuantity = () => {
    setQuantity((prev) => prev - 1);
  };

  const updateQuantity = (value: number) => {
    setQuantity(value);
  };

  // console.log(selectedImgColor, "BRr");

  return (
    <div className="flex mt-8 bg-zinc-800 relative mb-[3rem]">
      {/* Product Images */}
      <ul className="bg-orange-500 gap-2 grow-1 lg:grid lg:grid-cols-1 xl:grid-cols-2 h-min overflow-hidden hidden">
        <li className="w-full  bg-blue-700 col-span-1 xl:col-span-2">
          <Image
            width={1024}
            height={1024}
            src={baseImageUrl + product.attributes.colors[selectedImgColor]}
            priority
            alt="product image"
            className="w-full object-contain"
          />
        </li>
        {Object.values(product.attributes.colors)
          .flatMap((imgArr) => imgArr)
          .map((colorSrc) => (
            <li key={colorSrc} className=" bg-blue-800 ">
              <Image
                width={512}
                height={512}
                src={baseImageUrl + colorSrc}
                alt="product image"
                className="w-full object-contain"
              />
            </li>
            // <li>{color}</li>
          ))}
      </ul>
      {/* Product Details */}
      <div className="bg-lime-600 flex flex-col gap-[1rem] lg:sticky top-0 h-max px-[2rem] grow-1 shrink-1 lg:basis-[60rem]">
        <h2 className="text-[5rem] ">{product.attributes.name}</h2>
        <div className="flex items-center gap-4 text-[1.8rem]">
          <h3
            className={`${
              product.attributes.onSale ? "line-through text-[1.4rem]" : ""
            }`}
          >
            ${product.attributes.price.toFixed(2)}
          </h3>
          {product.attributes.onSale && (
            <h3>${product.attributes.salePrice.toFixed(2)}</h3>
          )}
          {product.attributes.onSale && (
            <BasicBadge className="bg-blue-600" label="Sale" />
          )}
        </div>
        <div>
          <span className="text-[1.3rem] mb-[5px]"> Color</span>
          <ul className="flex flex-wrap gap-[1rem] text-[1.6rem]">
            {Object.keys(product.attributes.colors).map((colorLabel) => (
              <li key={colorLabel}>
                <ClickableBadge
                  label={colorLabel}
                  selectedColor="#000000"
                  selected={colorLabel === selectedImgColor}
                  clickHanlder={clickedColorHandler}
                />
              </li>
            ))}
          </ul>
          {selectedSize && (
            <span className="text-[1.3rem] mb-[5px]"> Sizes</span>
          )}
          {selectedSize && (
            <ul className="flex flex-wrap gap-[1rem] text-[1.6rem]">
              {product.attributes.category.data.attributes.extention.sizes &&
                product.attributes.category.data.attributes.extention.sizes.map(
                  (size) => (
                    <li key={size}>
                      <ClickableBadge
                        label={size}
                        selectedColor="#000000"
                        selected={size === selectedSize}
                        clickHanlder={clickedSizeHandler}
                      />
                    </li>
                  )
                )}
            </ul>
          )}
        </div>
        <div>
          <span className="mb-[5px]">Quantity</span>
          <QuantityCounter
            quantity={quantity}
            addQuantity={addQuantity}
            subQuantity={subQuantity}
            updateQuantity={updateQuantity}
          />
        </div>
        <div className="flex flex-col gap-6 text-[1.6rem]">
          <EmptyBtn
            label="Add to cart"
            className="border-white border"
            disabled={product.attributes.quantity <= 0}
            clickHandler={() => {
              dispach(
                addCartItem({
                  cartItem: {
                    id: `${product.id} ${selectedImgColor} ${selectedSize}`,
                    name: product.attributes.name,
                    imgSrc:
                      baseImageUrl +
                      product.attributes.colors[selectedImgColor],
                    price: product.attributes.price,
                    total: product.attributes.price * quantity,
                    color: selectedImgColor,
                    salePrice: product.attributes.salePrice,
                    size: selectedSize ? selectedSize : null,
                    quantity: quantity,
                  },
                })
              );
            }}
          />
          <EmptyBtn
            label="Buy it now"
            className="text-white bg-black"
            disabled={product.attributes.quantity <= 0}
          />
        </div>
        <div className="w-full bg-red-500 text-[1.6rem] leading-[3rem]">
          <p className="break-all">{product.attributes.description}</p>
        </div>
        <Accordion
          items={[
            {
              title: "Materials",
              content:
                "Hand-crafted from Italian cow leather. Microsuede interior.",
            },
            {
              title: "Shipping & Returns",
              content: `Free shipping and returns available on all orders!\n\nWe ship all US domestic orders within 5-10 business days!`,
            },
            {
              title: "Dimensions",
              content: "w:31.5 X h:15 X d:6.5 cm (12.5 X 6 X 2.5 in)",
            },
            {
              title: "Care Instructions",
              content:
                "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
