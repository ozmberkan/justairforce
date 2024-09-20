import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
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
      { label: "En Çok Satanlar", href: "/men-best-sellers" },
      { label: "Günlük Giyim", href: "/men-daily" },
    ],
    href: "#",
  },
  {
    id: 3,
    title: "Kadın",
    options: [
      { label: "En Çok Satanlar", href: "/women-best-sellers" },
      { label: "Günlük Giyim", href: "/women-daily" },
    ],
    href: "#",
  },
];

export const rightTab = [
  { id: 1, icon: FiUser, href: "/login",label:"Giriş Yap" },
  { id: 2, icon: AiOutlineUserAdd, href: "/register", label:"Kayıt Ol" },
];

const defaultSizes = [
  { id: 1, size: 37 },
  { id: 2, size: 38 },
  { id: 3, size: 39 },
  { id: 4, size: 40 },
  { id: 5, size: 41 },
  { id: 6, size: 42 },
  { id: 7, size: 43 },
  { id: 8, size: 44 },
  { id: 9, size: 45 },
];

export const allProducts = [
  { id: "AF001", name: "Air Force", image: Shoe1, price: 100, sizes: defaultSizes },
  { id: "AF002", name: "Air Force", image: Shoe2, price: 100, sizes: defaultSizes },
  { id: "AF003", name: "Air Force", image: Shoe3, price: 100, sizes: defaultSizes },
  { id: "AF004", name: "Air Force", image: Shoe4, price: 100, sizes: defaultSizes },
  { id: "AF005", name: "Air Force", image: Shoe5, price: 100, sizes: defaultSizes },
  { id: "AF006", name: "Air Force", image: Shoe6, price: 100, sizes: defaultSizes },
  { id: "AF007", name: "Air Force", image: Shoe7, price: 100, sizes: defaultSizes },
  { id: "AF008", name: "Air Force", image: Shoe8, price: 100, sizes: defaultSizes },
  { id: "AF009", name: "Air Force", image: Shoe9, price: 100, sizes: defaultSizes },
  { id: "AF010", name: "Air Force", image: Shoe10, price: 100, sizes: defaultSizes },
  { id: "AF011", name: "Air Force", image: Shoe11, price: 100, sizes: defaultSizes },
  { id: "AF012", name: "Air Force", image: Shoe12, price: 100, sizes: defaultSizes },
  { id: "AF013", name: "Air Force", image: Shoe13, price: 100, sizes: defaultSizes },
  { id: "AF014", name: "Air Force", image: Shoe14, price: 100, sizes: defaultSizes },
  { id: "AF015", name: "Air Force", image: Shoe15, price: 100, sizes: defaultSizes },
];

export const favorites = allProducts.filter(product => product.id === "AF001" || product.id === "AF002" || product.id === "AF003" || product.id === "AF004");

export const bestsellersMen = allProducts.filter(product => product.id === "AF001" || product.id === "AF002" || product.id === "AF003" || product.id === "AF004");

export const bestsellersWomen = allProducts.filter(product => product.id === "AF005" || product.id === "AF006" || product.id === "AF007" || product.id === "AF008");

export const dailyMen = allProducts.filter(product => product.id === "AF004" || product.id === "AF012" || product.id === "AF003" || product.id === "AF001");

export const dailyWomen = allProducts.filter(product => product.id === "AF012" || product.id === "AF013" || product.id === "AF014" || product.id === "AF015");


export const registerForm = [
  {id: 1,type: "text",name: "displayName",placeholder: "Ad Soyad",},
  {id: 2,type: "text",name: "email",placeholder: "E-Posta",},
  {id: 3,type: "password",name: "password",placeholder: "Parola",},
];

export const loginForm = [
  {id: 1,type: "text",name: "email",placeholder: "E-Posta",},
  {id: 2,type: "password",name: "password",placeholder: "Parola",},
];


export const userTabs = [
  {id:1,to:"/cart",icon: FiShoppingCart,label: "Sepetim"},
  {id:2,to:"/profile",icon: FiUser,label: "Profilim"},
  {id:3,to:"/my-favorites",icon: FiHeart,label: "Favorilerim"},

]

export const footerTabs = [
  {id:1,to:"/",label:"Anasayfa"},
  {id:2,to:"/all-products",label:"Tüm Ürünler"},
  {id:3,to:"/men-best-sellers",label:" Erkek Çok Satanlar"},
  {id:4,to:"/women-best-sellers",label:"Kadın Çok Satanlar"},

]