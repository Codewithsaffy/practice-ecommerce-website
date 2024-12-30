import { INavLink } from "./Header";

export interface IFeaturedCardItems {
  image: string;
  mainHeading: string;
  subHeading: string;
  buttonText: INavLink;
}
interface IFeatured {
  title: string;
  mainHeading: string;
  cardItems: IFeaturedCardItems[];
}

export const FeaturedData: IFeatured = {
  title: "Featured",
  mainHeading: "New Arrivals",
  cardItems: [
    {
      image: "/images/newArival/1.png",
      mainHeading: "PlayStation 5",
      subHeading: "Black and White version of the PS5 coming out on sale.",
      buttonText: { text: "Shop Now", url: "#" },
    },
    {
      image: "/images/newArival/2.jpg",
      mainHeading: "Women’s Collections",
      subHeading: "Featured woman collections that give you another vibe.",
      buttonText: { text: "Shop Now", url: "#" },
    },
    {
      image: "/images/newArival/3.png",
      mainHeading: "Speakers",
      subHeading: "Amazon wireless speakers",
      buttonText: { text: "Shop Now", url: "#" },
    },
    {
      image: "/images/newArival/4.png",
      mainHeading: "Perfume",
      subHeading: "GUCCI INTENSE OUD EDP",
      buttonText: { text: "Shop Now", url: "#" },
    }
  ]
}