import { BsShieldCheck } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiHeadset } from "react-icons/pi";

interface IBenefitsOfWebsite {
  icons: React.ReactNode;
  text: string;
  subText: string;
}

export const BenefitsOfWebsiteData: IBenefitsOfWebsite[] = [
  {
    icons: <LiaShippingFastSolid size={40} />,
    text: "FREE AND FAST DELIVERY",
    subText: "Free delivery for all orders over $140",
  },
  {
    icons: <PiHeadset size={40} />,
    text: "24/7 CUSTOMER SERVICE",
    subText: "Friendly 24/7 customer service",
  },
  {
    icons: <BsShieldCheck size={40} />,
    text: "MONEY BACK GUARANTEE",
    subText: "We return money within 30 days",
  },
];
