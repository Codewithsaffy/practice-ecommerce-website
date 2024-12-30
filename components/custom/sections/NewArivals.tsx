import React from "react";
import SideBox from "../small/SideBox";
import { FeaturedData } from "@/data/home/NewArival";
import NewArivalCard from "../small/NewArivalCard";

const NewArivals = () => {
  return (
    <section className="py-12">
      <div className="flex items-center gap-2">
        <SideBox />
        <p className="font-semibold text-[#DB4444]">{FeaturedData.title}</p>
      </div>
      <h3 className="font-semibold mt-6 text-4xl leading-[48px]">
        {FeaturedData.mainHeading}
      </h3>

      <div className="flex gap-8 mt-12 w-full h-[600px]">
        <div className="bg-black w-1/2 relative">
          <NewArivalCard
            gap="gap-4"
            padding="p-8"
            CardItems={FeaturedData.cardItems[0]}
          />
        </div>
        <div className="flex flex-col gap-8 w-1/2  h-full">
          <div className="bg-[#0D0D0D] relative h-1/2">
            <NewArivalCard
              gap="gap-4"
              padding="p-8"
              CardItems={FeaturedData.cardItems[1]}
            />
          </div>
          <div className="h-1/2 flex gap-8 ">
            <div className="bg-[#000000] relative w-1/2 p-2">
              <NewArivalCard
                gap="gap-2"
                padding="p-2"
                CardItems={FeaturedData.cardItems[2]}
              />
            </div>
            <div className="bg-[#000000] relative w-1/2">
              <NewArivalCard
                gap="gap-2"
                padding="p-4"
                CardItems={FeaturedData.cardItems[3]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArivals;
