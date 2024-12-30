import { IFeaturedCardItems } from "@/data/home/NewArival";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewArivalCard = ({ CardItems, padding, gap }: { CardItems: IFeaturedCardItems, padding: string, gap: string }) => {
  return (
    <>
      <Image
        src={CardItems.image}
        className="object-cover h-full w-full"
        alt="hero"
        width={1000}
        height={1000}
      />
      <div className={`flex flex-col ${gap} z-20 w-[350px] text-[#FFFFFF] ${padding} bottom-0 absolute`}>
        <h3 className="text-[#FAFAFA] text-2xl font-semibold">
          {CardItems.mainHeading}
        </h3>
        <p className=" text-[14px]">{CardItems.subHeading}</p>
        <Link className="font-medium" href={CardItems.buttonText.url}>
          {CardItems.buttonText.text}
        </Link>
      </div>
    </>
  );
};

export default NewArivalCard;
