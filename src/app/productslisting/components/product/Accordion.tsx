"use client";
import React, { useState } from "react";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full  mx-auto text-[1.8rem]">
      {items.map((item, index) => (
        <div key={index} className="bg-white overflow-hidden">
          <button
            className="flex items-center justify-between px-4 py-3 w-full"
            onClick={() => handleAccordionItemClick(index)}
          >
            <h3 className="font-medium">{item.title}</h3>
            <div className="text-gray-400">
              {activeIndex === index ? <HiMinusSm /> : <HiPlusSm />}
            </div>
          </button>
          {activeIndex === index && (
            <div className="px-4 py-2 text-[1.4rem] whitespace-pre-line text-base2">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
