import { INavLink } from "./Header";
import { FaAngleRight } from "react-icons/fa6";

interface Category {
  text: string;
  url: string;
  subCategory?: Category[];
  icons?: React.ReactNode;
}
interface RightMain {
  mainImage: string;
  subImage: string;
  mainHeading: string;
  subHeading: string;
  buttonText: INavLink;
}

export const categoryData: Category[] = [
  {
    text: "Woman's Fasion",
    url: "/womans-fasion",
    subCategory: [
      { text: "Dresses", url: "#" },
      { text: "Tops", url: "#" },
      { text: "Bottoms", url: "#" },
    ],
    icons: <FaAngleRight />,
  },
  {
    text: "Mens's Fasion",
    url: "/mens-fasion",
    subCategory: [
      { text: "Shirts", url: "#" },
      { text: "Jeans", url: "#" },
      { text: "Shoes", url: "#" },
    ],
    icons: <FaAngleRight />,
  },
  { text: "Electronics", url: "/electronics" },
  { text: "Home and Lifestyle", url: "/home-and-lifestyle" },
  { text: "Madicine", url: "/madicine" },
  { text: "Babys and Toys", url: "/babys-and-toys" },
  { text: "Grocery and Pets", url: "/grocery-and-pets" },
  { text: "Health and Beauty", url: "/health-and-beauty" },
];

export const rightMainData: RightMain = {
  mainImage: "/heroSection/mobil.jpg",
  subImage: "/heroSection/apple.png",
  mainHeading: "Up to 50% Off Voucher",
  subHeading: "iPhone 14 Series",
  buttonText: { text: "Shop Now", url: "#" },
};
