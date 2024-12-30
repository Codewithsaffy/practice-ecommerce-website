import { INavLink } from "./Header";

interface IProductTopBox {
  title: string;
  mainHeading: string;
  remainTime: {
    title: string;
    time: number;
  }[];
  buttonText: INavLink;
  image: string;
};
export const ProductTopBox: IProductTopBox =  {
  title: "Categories",
  mainHeading: "Enhance Your Music Experience",
  remainTime: [
    {
      title: "Days",
      time: 5,
    },
    {
      title: "Hours",
      time: 23,
    },
    {
      title: "Minutes",
      time: 59,
    },
    {
      title: "Seconds",
      time: 35,
    },
  ],
  buttonText: { text: "Buy Now", url: "#" },
  image: "/images/outProducts/boxImg.png",
}