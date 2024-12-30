import { BsSmartwatch } from "react-icons/bs";
import { CiMobile4 } from "react-icons/ci";
import { FiHeadphones } from "react-icons/fi";
import { ImMobile2 } from "react-icons/im";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineCameraAlt } from "react-icons/md";
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

export const CategoriesData: ICategories = {
  title: "Categories",
  mainHeading: "Browse by Category",
  categories: [
    {
      text: "Phones",
      url: "/phones",
      icons: <ImMobile2
      size={56} />,
    },
    {
      text: "Computers",
      url: "/computers",
      icons: <RiComputerLine size={56} />,
    },
    {
      text: "Camera",
      url: "/camera",
      icons: <MdOutlineCameraAlt size={56} />,
    },
    {
      text: "Smart Watches",
      url: "/smart-watches",
      icons: <BsSmartwatch size={56} />,
    },
    {
      text: "Headphones",
      url: "/headphones",
      icons: <FiHeadphones size={56} />,
    },
    {
      text: "Gaming",
      url: "/gaming",
      icons: <IoGameControllerOutline size={56} />,
    },
  ],
};
