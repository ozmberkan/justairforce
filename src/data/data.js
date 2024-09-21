import { FiHeart, FiUser } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";

import Appstore from "~/assets/SocialMedia/appstore.svg";
import Playstore from "~/assets/SocialMedia/googleplay.svg";
import Huaweistore from "~/assets/SocialMedia/huawei.svg";
import { placeholder } from "@cloudinary/react";

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
  { id: 1, icon: FiUser, href: "/login", label: "Giriş Yap" },
  { id: 2, icon: AiOutlineUserAdd, href: "/register", label: "Kayıt Ol" },
];

export const registerForm = [
  { id: 1, type: "text", name: "displayName", placeholder: "Ad Soyad" },
  { id: 2, type: "text", name: "email", placeholder: "E-Posta" },
  { id: 3, type: "password", name: "password", placeholder: "Parola" },
];

export const loginForm = [
  { id: 1, type: "text", name: "email", placeholder: "E-Posta" },
  { id: 2, type: "password", name: "password", placeholder: "Parola" },
];

export const userTabs = [
  { id: 1, to: "/profile", icon: FiUser, label: "Profilim" },
  { id: 2, to: "/my-favorites", icon: FiHeart, label: "Favorilerim" },
];
export const mobileuserTabs = [
  { id: 1, to: "/cart", icon: FiUser, label: "Sepetim" },
  { id: 2, to: "/profile", icon: FiUser, label: "Profilim" },
  { id: 3, to: "/my-favorites", icon: FiHeart, label: "Favorilerim" },
];

export const footerTabs = [
  { id: 1, to: "/", label: "Anasayfa" },
  { id: 2, to: "/all-products", label: "Tüm Ürünler" },
  { id: 3, to: "/men-best-sellers", label: " Erkek Çok Satanlar" },
  { id: 4, to: "/women-best-sellers", label: "Kadın Çok Satanlar" },
];

export const MobileTabSingleShoes = [
  { to: "/airforceone", label: "Air Force One" },
  { to: "/airforcerainbow", label: "Air Force Rainbow" },
  { to: "/airforcecherry", label: "Air Force Cherry" },
];

export const MobileTabMen = [
  { to: "/men-best-sellers", label: "Erkek En Çok Satanlar" },
  { to: "/men-daily", label: "Erkek Günlük Giyim" },
];
export const MobileTabWomen = [
  { to: "/women-best-sellers", label: "Kadın En Çok Satanlar" },
  { to: "/women-daily", label: "Kadın Günlük Giyim" },
];

export const socialMedia = [
  { src: Appstore, alt: "appstore" },
  { src: Playstore, alt: "playstore" },
  { src: Huaweistore, alt: "huawei" },
];

export const productEditForm = [
  { id: 1, type: "text", name: "id" },
  { id: 2, type: "text", name: "name" },
  { id: 3, type: "text", name: "price" },
  { id: 4, type: "text", name: "image" },
];

export const userEditForm = [
  { id: 1, type: "text", name: "displayName" },
  { id: 2, type: "text", name: "email" },
  {
    id: 3,
    name: "admin",
    type: "select",
    options: [
      { value: true, label: "Yetkili" },
      { value: false, label: "Kullanıcı" },
    ],
  },
];

export const addProductForm = [
  { id: 1, type: "text", name: "id", placeholder: "Ürün ID" },
  { id: 2, type: "text", name: "name", placeholder: "Ürün Adı" },
  { id: 3, type: "text", name: "price", placeholder: "Ürün Fiyatı" },
  { id: 4, type: "text", name: "image", placeholder: "Görsel Link" },
];
