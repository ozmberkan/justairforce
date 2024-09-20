import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";


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