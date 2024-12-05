import { categoryData } from "@/data/home/Hero";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <section className="flex justify-between h-[400px] pt-10 pb-3 max-w-[230px]  w-full  flex-col">
      {categoryData.map((cat) => {
        return (
          <Link
            key={cat.text}
            href={cat.url}
            className="flex justify-between items-center"
          >
            {cat.text} {cat?.icons ? cat?.icons : null}
          </Link>
        );
      })}
    </section>
  );
};

export default Category;
