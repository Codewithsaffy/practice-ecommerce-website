import { BsSmartwatch } from "react-icons/bs";
import { CiMobile4 } from "react-icons/ci";
import { FiHeadphones } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";

interface ICategory {
  text: string;
  url: string;
  icons: React.ReactNode;
}
interface ICategories {
  title: string;
  mainHeading: string;
  categories: ICategory[];
}

export const Categories: ICategories = {
  title: "Categories",
  mainHeading: "Browse by Category",
  categories: [
    {
      text: "Phones",
      url: "/phones",
      icons: <CiMobile4 />,
    },
    {
      text: "Computers",
      url: "/computers",
      icons: <RiComputerLine />,
    },
    {
      text: "Smart Watches",
      url: "/smart-watches",
      icons: <BsSmartwatch />,
    },
    {
      text: "Headphones",
      url: "/headphones",
      icons: <FiHeadphones />,
    },
    {
      text: "Gaming",
      url: "/gaming",
      icons: <IoGameControllerOutline />,
    },
  ],
};
