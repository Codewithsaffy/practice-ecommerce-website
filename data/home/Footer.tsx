import { BiLogoFacebook } from "react-icons/bi";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { ReactNode } from "react";

export interface ExclusiveData {
  title: string;
  subscribeText: string;
  text: string;
}

export interface SupportData {
  title: string;
  text: string[];
}

export interface AuthenticationLink {
  text: string;
  url: string;
}

export interface AccountData {
  title: string;
  links: { text: string; url: string }[]
}

export interface QuickLinkData {
  title: string;
  links: { text: string; url: string }[];
}

export interface DownloadIcon {
  icon: ReactNode;
  link: string;
}

export interface DownloadData {
  title: string;
  text: string;
  images: string[];
  icons: DownloadIcon[];
}

export interface FooterDataInterface {
  Exclusive: ExclusiveData;
  Support: SupportData;
  Account: AccountData;
  QuickLinks: QuickLinkData;
  download: DownloadData;
}

// Example use
export const FooterData: FooterDataInterface = {
  Exclusive: {
    title: "Exclusive",
    subscribeText: "Subscribe",
    text: "Get 10% off on your first order",
  },
  Support: {
    title: "Support",
    text: [
      "111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.",
      "exclusive@gmail.com",
      "+88015-88888-9999",
    ],
  },
  Account: {
    title: "Account",
    links: [
      { text: "My Account", url: "#" },
      { text: "Cart", url: "#" },
      { text: "Wishlist", url: "#" },
      { text: "Shop", url: "#" },
    ],
  },
  QuickLinks: {
    title: "Quick Links",
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms Of Use", url: "#" },
      { text: "FAQ", url: "#" },
      { text: "Contact", url: "#" },
    ],
  },
  download: {
    title: "Download App",
    text: "Save $3 with App New User Only",
    images: [
      "/images/footer/1.jpg",
      "/images/footer/2.png",
      "/images/footer/3.png",
    ],
    icons: [
      { icon: <BiLogoFacebook size={20}/>, link: "#" },
      { icon: <CiTwitter size={20} />, link: "#" },
      { icon: <FaInstagram size={20} />, link: "#" },
      { icon: <RiLinkedinLine size={20} />, link: "#" },
    ],
  },
};
