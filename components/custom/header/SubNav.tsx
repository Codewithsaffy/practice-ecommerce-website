import { SubNavData } from "@/data/home/Header";
import Link from "next/link";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

const SubNav = () => {
  return (
    <nav className="bg-black">
      <div className="py-2 max-w-6xl mx-auto  flex text-[14px] font-normal items-center justify-between gap-5  text-white">

      <div className="flex items-center  gap-2 justify-center w-full">
        <p className="font-normal">{SubNavData.text}</p>

        <Link href={SubNavData.link.url} className="font-semibold underline">
          {SubNavData.link.text}
        </Link>
      </div>
      <h3 className="flex items-center gap-2">
        English <FaAngleDown />{" "}
      </h3>
      </div>
    </nav>
  );
};

export default SubNav;
