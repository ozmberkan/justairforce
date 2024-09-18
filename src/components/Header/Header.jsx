import React from "react";
import Logo from "../../assets/Svg/Logo.svg";
import { FiLogOut, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { navTabs, rightTab, userTabs } from "../../data/data";
import { Link, useNavigate } from "react-router-dom";
import TabMenu from "./Menu/TabMenu";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaSignOutAlt, FaSortDown } from "react-icons/fa";
import { logoutUser } from "~/redux/slices/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "~/firebase/firebase";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      dispatch(logoutUser());
      navigate("/");
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
              className="text-gray-800 hover:text-[#763ebe] transition-colors duration-200 text-sm font-medium flex gap-x-1"
            >
              <TabMenu tab={tab} /> <FaSortDown />
            </Link>
          ))}
          <Link
            to="/all-products"
            className="text-gray-800 hover:text-[#763ebe] transition-colors duration-200 text-sm font-medium"
          >
            Tüm Air Force'lar
          </Link>
        </nav>
      </div>

      {/* Sağ Bölüm (Kullanıcı İşlemleri ve Sepet) */}
      <div className="flex items-center gap-x-6">
        {user ? (
          <div className="flex items-center gap-x-4">
            {userTabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.to}
                className="flex items-center gap-x-2 text-gray-800 hover:text-[#763ebe] transition-colors duration-200 text-sm font-semibold"
              >
                <tab.icon />
                {tab.label}
              </Link>
            ))}

            <button
              onClick={logOut}
              className="flex items-center gap-x-2  transition-colors duration-200 text-sm font-medium border rounded-full px-2 py-1 bg-red-500 text-white hover:bg-red-600 "
            >
              <FiLogOut />
              Çıkış Yap
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-x-4">
            {rightTab.map((tab) => (
              <Link
                to={tab?.href}
                key={tab.id}
                className="px-4 py-1.5 rounded-md font-medium text-white bg-gradient-to-r from-black to-[#5B348F] transition-colors duration-500 flex gap-x-1 items-center text-sm"
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
