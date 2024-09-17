import React from "react";
import Logo from "../../assets/Svg/Logo.svg";
import { FiLogOut, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { navTabs, rightTab } from "../../data/data";
import { Link } from "react-router-dom";
import TabMenu from "./Menu/TabMenu";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaSignOutAlt } from "react-icons/fa";
import { logoutUser } from "~/redux/slices/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "~/firebase/firebase";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const logOut = async () => {
    try {
      await signOut(auth);
      dispatch(logoutUser());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between items-center border-b py-4 px-8 bg-white shadow-sm">
      {/* Sol Bölüm (Logo ve Navigasyon Menüsü) */}
      <div className="flex items-center gap-x-8">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-24" />
        </Link>
        <nav className="flex gap-x-6">
          {navTabs.map((tab) => (
            <Link
              to={tab?.href}
              key={tab.id}
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
            >
              <TabMenu tab={tab} />
            </Link>
          ))}
          <Link
            to="/allproducts"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
          >
            Tüm Air Force'lar
          </Link>
        </nav>
      </div>

      {/* Sağ Bölüm (Kullanıcı İşlemleri ve Sepet) */}
      <div className="flex items-center gap-x-6">
        {user ? (
          <div className="flex items-center gap-x-4">
            <Link
              to="/cart"
              className="flex items-center gap-x-2 text-gray-800 hover:text-blue-600 transition-colors duration-200 text-base font-medium"
            >
              <FiShoppingCart size={20} />
              Sepetim
            </Link>
            <Link
              to="/profile"
              className="flex items-center gap-x-2 text-gray-800 hover:text-blue-600 transition-colors duration-200 text-base font-medium"
            >
              <FiUser size={20} />
              Profilim
            </Link>
            <Link
              to="/myfavorites"
              className="flex items-center gap-x-2 text-gray-800 hover:text-blue-600 transition-colors duration-200 text-base font-medium"
            >
              <FaHeart size={20} />
              Favorilerim
            </Link>
            <button
              onClick={logOut}
              className="flex items-center gap-x-2 text-gray-800 hover:text-red-600 transition-colors duration-200 text-base font-medium"
            >
              <FiLogOut size={20} />
              Çıkış Yap
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-x-4">
            {rightTab.map((tab) => (
              <Link
                to={tab?.href}
                key={tab.id}
                className="flex items-center border gap-x-1  rounded-full text-white bg-neutral-800 hover:bg-neutral-950 transition-colors duration-300 px-4 py-2  text-sm font-medium"
              >
                <tab.icon size={16} />
                {tab.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
