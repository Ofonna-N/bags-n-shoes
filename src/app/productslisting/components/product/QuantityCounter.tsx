"use client";
import React from "react";

type Props = {
  quantity: number;
  addQuantity: () => void;
  subQuantity: () => void;
  updateQuantity: (value: number) => void;
};

const QuantityCounter: React.FC<Props> = ({
  quantity,
  addQuantity,
  subQuantity,
  updateQuantity,
}) => {
  return (
    <div className="w-max flex items-center gap-[1rem] border border-base text-[1.8rem]">
      <button
        className="py-[1rem] px-[1rem]"
        onClick={() => {
          if (quantity <= 1) return;
          subQuantity();
        }}
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        min={1}
        step={1}
        onChange={(e) => updateQuantity(Number(e.target.value))}
        className="bg-transparent p-0 border-0 w-[5rem] text-center py-[1rem] text-[1.4rem] focus:ring-slate-700"
      />
      {/* <span>{quantity}</span> */}
      <button
        className="py-[1rem] px-[1rem]"
        onClick={() => {
          addQuantity();
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
