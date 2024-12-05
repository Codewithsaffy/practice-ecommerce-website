export interface INavLink {
  text: string;
  url: string;
}
export interface ISubNav {
  text: string;
  link: INavLink;
}
export interface IMainHeader {
  logo: string;
  navLink: INavLink[];
}

const MainHeaderData: IMainHeader = {
  logo: "Exclusive",
  navLink: [
    { text: "Home", url: "/" },
    { text: "Contact", url: "/contact" },
    { text: "About", url: "/about" },
    { text: "Sign Up", url: "/signup" },
  ],
};

const SubNavData: ISubNav = {
  text: "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%",
  link: { text: "Shop Now", url: "#" },
};

export { MainHeaderData, SubNavData };