import { INavLink } from "./Header";

export interface ICardItems {
  image: string;
  title: string;
  actualPrice: string;
  discountPrice: string;
  discountInPercentage?: string;
  rateNo: number;
  new?: boolean;
  rateStar: number;
}
interface ITodays {
  title: string;
  MainHeading: string;
  remainTime: {
    title: string;
    time: number;
  }[];

  cardItems: ICardItems[];
  buttonText: INavLink;
}

export const TodaysData: ITodays = {
  title: "Today's",
  MainHeading: "Flash Sales",
  remainTime: [
    {
      title: "Days",
      time: 3,
    },
    {
      title: "Hours",
      time: 23,
    },
    {
      title: "Minutes",
      time: 19,
    },
    {
      title: "Seconds",
      time: 56,
    },
  ],
  buttonText: { text: "View All Product", url: "#" },
  cardItems: [
    {
      image: "/images/flashsale/1.png",
      title: "HAVIT HV-G92 Gamepad",
      actualPrice: "$160",
      discountPrice: "$120",
      discountInPercentage: "40%",
      rateNo: 88,
      rateStar: 5,
    },
    {
      image: "/images/flashsale/2.png",
      title: "AK-900 Wired Keyboard",
      actualPrice: "$1160",
      discountPrice: "$90",
      discountInPercentage: "35%",
      rateNo: 75,
      rateStar: 4,
    },
    {
      image: "/images/flashsale/3.png",
      title: "IPS LCD Gaming Monitor",
      actualPrice: "$400",
      discountPrice: "$370",
      discountInPercentage: "32%",
      rateNo: 75,
      rateStar: 4,
    },
    {
      image: "/images/flashsale/4.png",
      title: "S-Series Comfort Chair ",
      actualPrice: "$375",
      discountPrice: "$400",
      discountInPercentage: "35%",
      rateNo: 75,
      rateStar: 4,
    },
    {
      image: "/images/flashsale/4.png",
      title: "S-Series Comfort Chair ",
      actualPrice: "$375",
      discountPrice: "$400",
      discountInPercentage: "35%",
      rateNo: 75,
      rateStar: 4,
    },
  ],
};
