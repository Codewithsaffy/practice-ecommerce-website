import React from "react";
import RightMain from "./RightMain";
import Category from "./Category";

const HeroMain = () => {
  return (
    <section className="flex pb-[50px] w-full justify-between">
      <Category />
      <RightMain />
    </section>
  );
};

export default HeroMain;
