import { ProductTopBox } from "@/data/home/ProductTopBox";
import Image from "next/image";
import React from "react";
import PinkButton from "../small/PinkButton";
import Link from "next/link";

const OurTopProductBox = () => {
  return (
    <section className="py-12">
      <div className="bg-[#000000] font-poppins   flex items-center h-[500px]">
        <div className="p-12 gap-8 flex flex-col">
          <p className="text-[#00FF66] font-semibold">{ProductTopBox.title}</p>
          <h3 className="font-semibold text-5xl leading-[60px] tracking-wide text-white">
            {ProductTopBox.mainHeading}
          </h3>
          <div className="flex items-center gap-4">
            {ProductTopBox.remainTime.map((item, index) => (
              <div
                key={index}
                className="h-[62px] leading-4 flex-col w-[62px] rounded-full bg-white flex items-center justify-center"
              >
                <p className="font-semibold">{item.time}</p>
                <p className="text-[11px]">{item.title}</p>
              </div>
            ))}
          </div>
          <Link href={ProductTopBox.buttonText.url}>
            <PinkButton
              className="bg-[#00FF66]"
              children={ProductTopBox.buttonText.text}
            />
          </Link>
        </div>
        <div className="relative p-4">
          <Image
            src={ProductTopBox.image}
            alt={ProductTopBox.title}
            className="w-[700px] object-cover custom-image-shadow    h-[600px]"
            width={700}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default OurTopProductBox;
