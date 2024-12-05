import React from "react";
import RightMain from "./RightMain";
import Category from "./Category";

const HeroMain = () => {
  return (
    <section className="flex  max-w-6xl h-[calc(100vh-144px)]   w-full mx-auto justify-between">
      <Category />
      <RightMain />
    </section>
  );
};

export default HeroMain;
