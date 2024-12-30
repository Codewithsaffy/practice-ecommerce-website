import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

import React from "react";
import { MainHeaderData } from "@/data/home/Header";

const MainHeader = () => {
  return (
    <header className="flex py-4 mt-10 border-b-[1px] border-gray-300 max-w-6xl mx-auto w-full items-center justify-between">
      <h2 className="font-bold text-2xl">{MainHeaderData.logo}</h2>
      <nav className="flex font-poppins gap-10 items-center">
        {MainHeaderData.navLink.map((item) => (
          <Link key={item.text} href={item.url}>{item.text}</Link>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <button className="py-2 px-4 text-sm gap-6    rounded-lg bg-gray-200 flex items-center justify-between">
          <p className="text-gray-500">What are you looking for</p>{" "}
          <FiSearch size={20} />{" "}
        </button>
        <GoHeart size={24} />
        <IoCartOutline size={24} />
      </div>
    </header>
  );
};

export default MainHeader;
