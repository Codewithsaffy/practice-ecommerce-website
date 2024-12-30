import { Input } from "@/components/ui/input";
import { FooterData } from "@/data/home/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-12 font-poppins text-[#FAFAFA] bg-[#000000]">
      <div className="flex justify-between max-w-6xl w-full mx-auto py-12 gap-8">
        {/* Exclusive Section */}
        <div className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-[20%]">
          <h3 className="text-2xl pb-2 font-bold">
            {FooterData.Exclusive.title}
          </h3>
          <h4 className="text-xl font-medium">
            {FooterData.Exclusive.subscribeText}
          </h4>
          <p>{FooterData.Exclusive.text}</p>
          <div className="relative">
            <Input
              className="py-3 px-4 w-full rounded-md bg-[#1A1A1A] text-[#FAFAFA] placeholder-gray-500"
              placeholder="Enter your email"
              type="email"
              aria-label="Enter your email for updates"
            />
            <button
              aria-label="Subscribe"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FAFAFA] hover:text-gray-400"
            >
              <FiSend size={20} />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-[20%]">
          <h3 className="text-2xl pb-2 font-bold">
            {FooterData.Support.title}
          </h3>
          {FooterData.Support.text.map((item, index) => (
            <p key={index} className="text-sm text-gray-400">
              {item}
            </p>
          ))}
        </div>

        {/* Account Section */}
        <div className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-[20%]">
          <h3 className="text-2xl pb-2 font-bold">{FooterData.Account.title}</h3>
          {FooterData.Account.links.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="text-sm text-gray-400 hover:text-white transition"
            >
              {item.text}
            </Link>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-[20%]">
          <h3 className="text-2xl pb-2 font-bold">
            {FooterData.QuickLinks.title}
          </h3>
          {FooterData.QuickLinks.links.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="text-sm text-gray-400 hover:text-white transition"
            >
              {item.text}
            </Link>
          ))}
        </div>

        {/* Download Section */}
        <div className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-[20%]">
          <h3 className="text-2xl pb-2 font-bold">
            {FooterData.download.title}
          </h3>
          <p className="text-sm text-gray-400 ">{FooterData.download.text}</p>
          <div className="flex gap-1">
            <Image
              width={100}
              height={100}
              src={FooterData.download.images[0]}
              alt="Scan App"
              className="object-contain"
            />
            <div className="flex gap-1 flex-col">
              <Image
                width={100}
                height={100}
                src={FooterData.download.images[1]}
                alt="Google Play"
                className=" object-contain"
              />
              <Image
                width={100}
                height={100}
                src={FooterData.download.images[2]}
                alt="App Store"
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            {FooterData.download.icons.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                aria-label={`Visit ${item.link}`}
                className="text-gray-400 hover:text-white transition"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
