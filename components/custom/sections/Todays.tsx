import React from "react";
import SideBox from "../small/SideBox";
import { TodaysData } from "@/data/home/Todays";
import SemiColon from "../small/SemiColon";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "../small/ProductCard";
import PinkButton from "../small/PinkButton";

const Todays = () => {
  return (
    <section className="py-12" >
      {/* Header of Todays */}
      <div className="flex items-center gap-2">
        <SideBox />
        <p className="font-semibold text-[#DB4444]">{TodaysData.title}</p>
      </div>
      <div className="flex mt-2 justify-between ">
        <div className="flex  gap-24 items-end">
          <h3 className="font-semibold text-4xl leading-[48px]">
            {TodaysData.MainHeading}
          </h3>
          <div className="flex items-end gap-4">
            {TodaysData.remainTime.map((item, i) => {
              return (
                <div key={item.title} className="flex flex-col">
                  <p className="text-[12px] font-poppins">{item.title}</p>
                  <div className="flex items-center gap-4">
                    <h4 className="text-[32px] font-bold">{item.time}</h4>
                    {i !== 3 ? <SemiColon /> : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex items-center justify-center">
            <FaArrowLeftLong size={16} className="" />
          </button>
          <button className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex items-center justify-center">
            <FaArrowRightLong size={16} className="" />
          </button>
        </div>
      </div>

      {/*  card section */}
      <div className="w-full relative mt-8 h-[350px] ">

      <div className="flex items-center gap-4 absolute h-[350px] overflow-hidden">
        {TodaysData.cardItems.map((item,i) => {
          return <ProductCard key={i} cardData={item} />;
        })}
      </div>
        </div>
        <div className=" text-center mt-12 mx-auto w-full ">
        <PinkButton className="bg-[#DB4444]" children={TodaysData.buttonText.text}/>

        </div>

    </section>
  );
};

export default Todays;
