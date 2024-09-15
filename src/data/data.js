import { FiShoppingCart, FiUser } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";

import Shoe1 from "../assets/Products/1.jpeg";
import Shoe2 from "../assets/Products/2.jpeg";
import Shoe3 from "../assets/Products/3.jpeg";
import Shoe4 from "../assets/Products/4.jpeg";
import Shoe5 from "../assets/Products/5.jpeg";
import Shoe6 from "../assets/Products/6.jpeg";
import Shoe7 from "../assets/Products/7.jpeg";
import Shoe8 from "../assets/Products/8.jpeg";
import Shoe9 from "../assets/Products/9.jpeg";
import Shoe10 from "../assets/Products/10.jpeg";
import Shoe11 from "../assets/Products/11.jpeg";
import Shoe12 from "../assets/Products/12.jpeg";
import Shoe13 from "../assets/Products/13.jpeg";
import Shoe14 from "../assets/Products/14.jpeg";
import Shoe15 from "../assets/Products/15.jpeg";

export const navTabs = [
  {
    id: 1,
    title: "Yeni Air Force'lar",
    options: [
      { label: "Air Force One", href: "/airforceone" },
      { label: "Air Force Rainbow", href: "/airforcerainbow" },
      { label: "Air Force Cherry", href: "/airforcecherry" },
    ],
    href: "#",
  },
  {
    id: 2,
    title: "Erkek",
    options: [
      { label: "En Çok Satanlar", href: "/menbestsellers" },
      { label: "Günlük Giyim", href: "/mendaily" },
    ],
    href: "#",
  },
  {
    id: 3,
    title: "Kadın",
    options: [
      { label: "En Çok Satanlar", href: "/womenbestsellers" },
      { label: "Günlük Giyim", href: "/womendaily" },
    ],
    href: "#",
  },
];

export const rightTab = [
  { id: 1, icon: FiShoppingCart, href: "#" },
  { id: 2, icon: FiUser, href: "/login" },
  { id: 3, icon: AiOutlineUserAdd, href: "/register" },
];

export const allProducts = [
  { id: "AF001", name: "Air Force", image: Shoe1, price: 100 },
  { id: "AF002", name: "Air Force", image: Shoe2, price: 100 },
  { id: "AF003", name: "Air Force", image: Shoe3, price: 100 },
  { id: "AF004", name: "Air Force", image: Shoe4, price: 100 },
  { id: "AF005", name: "Air Force", image: Shoe5, price: 100 },
  { id: "AF006", name: "Air Force", image: Shoe6, price: 100 },
  { id: "AF007", name: "Air Force", image: Shoe7, price: 100 },
  { id: "AF008", name: "Air Force", image: Shoe8, price: 100 },
  { id: "AF009", name: "Air Force", image: Shoe9, price: 100 },
  { id: "AF010", name: "Air Force", image: Shoe10, price: 100 },
  { id: "AF011", name: "Air Force", image: Shoe11, price: 100 },
  { id: "AF012", name: "Air Force", image: Shoe12, price: 100 },
  { id: "AF013", name: "Air Force", image: Shoe13, price: 100 },
  { id: "AF014", name: "Air Force", image: Shoe14, price: 100 },
  { id: "AF015", name: "Air Force", image: Shoe15, price: 100 },
];

export const favorites = [
  { id: "AF001", name: "Air Force", image: Shoe1, price: 100 },
  { id: "AF002", name: "Air Force", image: Shoe2, price: 100 },
  { id: "AF003", name: "Air Force", image: Shoe3, price: 100 },
  { id: "AF004", name: "Air Force", image: Shoe4, price: 100 },
];

export const bestsellersMen = [
  { id: "AF001", name: "Air Force One", image: Shoe1, price: 100 },
  { id: "AF002", name: "Air Force", image: Shoe2, price: 100 },
  { id: "AF003", name: "Air Force", image: Shoe3, price: 100 },
  { id: "AF004", name: "Air Force", image: Shoe4, price: 100 },
];

export const bestsellersWomen = [
  { id: "AF005", name: "Air Force", image: Shoe5, price: 100 },
  { id: "AF006", name: "Air Force", image: Shoe6, price: 100 },
  { id: "AF007", name: "Air Force", image: Shoe7, price: 100 },
  { id: "AF008", name: "Air Force", image: Shoe8, price: 100 },
];

export const dailyMen = [
  { id: "AF004", name: "Air Force", image: Shoe4, price: 100 },
  { id: "AF012", name: "Air Force", image: Shoe12, price: 100 },
  { id: "AF003", name: "Air Force", image: Shoe3, price: 100 },
  { id: "AF001", name: "Air Force", image: Shoe1, price: 100 },
];

export const dailyWomen = [
  { id: "AF012", name: "Air Force", image: Shoe12, price: 100 },
  { id: "AF013", name: "Air Force", image: Shoe13, price: 100 },
  { id: "AF014", name: "Air Force", image: Shoe14, price: 100 },
  { id: "AF015", name: "Air Force", image: Shoe15, price: 100 },
];
