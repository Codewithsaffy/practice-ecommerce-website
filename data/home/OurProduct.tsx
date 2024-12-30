import { INavLink } from "./Header";
import { ICardItems } from "./Todays";

interface IOurProduct {
  title: string;
  MainHeading: string;
  
  cardItems: ICardItems[];
  buttonText: INavLink;
}

export const OurProductData: IOurProduct = {
  title: "Our Product",
  buttonText:{
    text: "View All Product",
    url: "#"
  },
  MainHeading: "Explore Our Product",
 
  cardItems: [
    {
      image: "/images/outProducts/1.jpg",
      title: "Breed Dry Dog Food",
      actualPrice: "$160",
      discountPrice: "$120",
      rateNo: 88,
      rateStar:5,
    },
    {
      image: "/images/outProducts/2.png",
      title: "CANON EOS DSLR Camera",
      actualPrice: "$160",
      discountPrice: "$120",
      rateNo: 88,
      rateStar:5,
    },
    {
      image: "/images/outProducts/3.png",
      title: "ASUS FHD Gaming Laptop",
      actualPrice: "$160",
      discountPrice: "$120",
      rateNo: 88,
      rateStar:5,
    },
    {
      image: "/images/outProducts/4.png",
      title: "Curology Product Set",
      actualPrice: "$160",
      discountPrice: "$120",
      rateNo: 88,
      rateStar:5,
    },
    {
      image: "/images/outProducts/5.png",
      title: "Kids Electric Car",
      actualPrice: "$160",
      discountPrice: "$120",
      rateNo: 88,
      rateStar:5,
    },
    {
      image: "/images/outProducts/6.png",
      title: "Jr. Zoom Soccer Cleats",
      actualPrice: "$160",
      discountPrice: "$120",
      rateNo: 88,
      rateStar:5,
    },
    {
      image: "/images/outProducts/7.png",
      title: "GP11 Shooter USB Gamepad",
      actualPrice: "$160",
      discountPrice: "$120",
      rateNo: 88,
      rateStar:5,
    },
    {
      image: "/images/outProducts/8.png",
      title: "Quilted Satin Jacket",
      actualPrice: "$160",
      discountPrice: "$120",
      rateNo: 88,
      rateStar:5,
    },
  ]
}