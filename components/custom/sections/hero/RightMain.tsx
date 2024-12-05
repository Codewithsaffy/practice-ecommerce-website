import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const RightMain = () => {
  return (
    <section className="flex border-l-[1px] border-gray-300 pb-1 h-[400px] overflow-hidden pt-10 pl-10 max-w-4xl w-full ">
      <div className="flex w-full bg-black relative items-center">
        <div className="flex py-8 pl-8 flex-col gap-6 justify-between text-white ">
          <div className="flex items-center gap-6">
            <Image
              src="/heroSection/apple.png"
              alt="hero"
              width={50}
              height={50}
            />
            <p className="font-normal">iPhone 14 Series</p>
          </div>
          <p className="p-1 text-5xl leading-[60px] -tracking-tight w-full font-semibold">
            Up to 10% off Voucher
          </p>
          <Link href="#" className="flex items-center gap-2 font-medium">
            Shop Now
            <FaArrowRightLong />
          </Link>
        </div>
        <Image
          src="/heroSection/mobil.jpg"
          className="w-[500px] h-[350px]"
          alt="hero"
          width={500}
          height={500}
        />
        <div className="absolute bottom-2 flex gap-2 justify-center w-full items-center transform  ">
          <button className="bg-gray-300/90 w-3 h-3 rounded-full"></button>
          <button className="bg-gray-300/30 w-3 h-3 rounded-full"></button>
          <button className="bg-gray-300/30 w-3 h-3 rounded-full"></button>
          <button className="bg-gray-300/30 w-3 h-3 rounded-full"></button>
          <button className="bg-gray-300/30 w-3 h-3 rounded-full"></button>
        </div>
      </div>
    </section>
  );
};

export default RightMain;
