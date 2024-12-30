import { Button } from "@/components/ui/button";
import { ICardItems } from "@/data/home/Todays";
import Image from "next/image";
import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

const ProductCard = ({ cardData }: { cardData: ICardItems }) => {
  return (
    <div className="w-[270px] font-poppins h-[350px] flex flex-col gap-2">
      <div className="h-[250px] rounded  relative flex items-center bg-[#F5F5F5] justify-center">
        <Image
          src={cardData.image}
          alt={cardData.title}
          height={200}
          width={200}
          className="w-[200px] h-[200px] object-contain"
        />
        {cardData.discountInPercentage && (
          <button className="absolute bg-[#DB4444] px-2 py-1 text-white text-[12px] font-semibold rounded top-2 left-2">-{cardData.discountInPercentage}</button>
        )}
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white">

        <FaRegHeart />
        </button>
        <button className="absolute top-10 right-2 p-1 rounded-full bg-white">
        <FiEye/>
        </button>
      </div>
      <div className="flex flex-col font-medium gap-2">
        <p>{cardData.title}</p>
        <div className="flex items-center gap-2 text-[#DB4444]">
          <p>{cardData.discountPrice}</p>
          <del>{cardData.actualPrice}</del>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-[2px] text-[#FFAD33]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="font-semibold text-[14px]">{"(" + cardData.rateStar + ")"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
