import { INavLink } from "./Header";
import { ICardItems } from "./Todays";

interface IThisMonth {
  title: string;
  MainHeading: string;
  cardItems: ICardItems[];
  buttonText: INavLink;
}

export const ThisMonthData: IThisMonth = {
  title: "This Month",
  MainHeading: "Best Selling Products",
  buttonText: { text: "View All", url: "#" },
  cardItems: [
    {
      image: "/images/thisMonth/1.png",
      title: "The north coat",
      actualPrice: "$160",
      discountPrice: "$120",
      discountInPercentage: "40%",
      rateNo: 88,
      rateStar: 5,
    },
    {
      image: "/images/thisMonth/2.png",
      title: "Gucci duffle bag",
      actualPrice: "$1160",
      discountPrice: "$90",
      discountInPercentage: "35%",
      rateNo: 75,
      rateStar: 4,
    },
    {
      image: "/images/thisMonth/3.png",
      title: "RGB liquid CPU Cooler",
      actualPrice: "$400",
      discountPrice: "$370",
      discountInPercentage: "40%",
      rateNo: 88,
      rateStar: 5,
    },
    {
      image: "/images/thisMonth/4.png",
      title: "Small BookSelf",
      actualPrice: "$160",
      discountPrice: "$120",
      discountInPercentage: "40%",
      rateNo: 88,
      rateStar: 5,
    }
  ]
}