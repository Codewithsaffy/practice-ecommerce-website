import BenefitsSection from "@/components/custom/sections/BenefitsSection";
import Categories from "@/components/custom/sections/Categories";
import HeroMain from "@/components/custom/sections/hero/HeroMain";
import NewArivals from "@/components/custom/sections/NewArivals";
import OurProducts from "@/components/custom/sections/OurProducts";
import OurTopProductBox from "@/components/custom/sections/OurTopProductBox";
import ThisMoth from "@/components/custom/sections/ThisMoth";
import Todays from "@/components/custom/sections/Todays";

export default function Home() {
  return (
    <main className="max-w-6xl w-full mx-auto">
      <HeroMain />
      <Todays/>
      <hr />
      <Categories/>
      <hr />
      <ThisMoth/>
      <OurTopProductBox/>
      <OurProducts/>
      <NewArivals/>
      <BenefitsSection/>
    </main>
  );
}
