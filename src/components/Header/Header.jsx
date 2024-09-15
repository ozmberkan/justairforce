import React from "react";
import Logo from "../../assets/Svg/Logo.svg";
import { FiLogOut, FiSearch, FiUser } from "react-icons/fi";
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
    <div className="flex justify-between items-center  border-b py-4 px-12 bg-white">
      <div className="flex gap-x-5 items-center justify-start">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        {navTabs.map((tab) => (
          <Link
            to={tab?.href}
            key={tab.id}
            className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
          >
            <TabMenu tab={tab} />
          </Link>
        ))}
        <Link
          to="/allproducts"
          className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
        >
          Tüm Air Force'lar
        </Link>
      </div>
      <div className="flex items-center justify-center px-7 gap-x-2 ">
        {user ? (
          <div className="flex gap-x-5 w-full ">
            <Link
              to="/profile"
              className={`text-gray-700 hover:bg-gray-100 px-2 py-1 rounded-md text-base font-medium flex gap-x-2 items-center`}
            >
              <FiUser />
              Profilim
            </Link>
            <Link
              to="/myfavorites"
              className="text-gray-700 hover:bg-gray-100 px-2 py-1 rounded-md font-medium flex gap-x-3 items-center w-full"
            >
              <FaHeart />
              Favorilerim
            </Link>
            <button
              onClick={logOut}
              className="text-gray-700 hover:bg-gray-100 px-2 py-1 rounded-md font-medium flex gap-x-3 items-center w-full"
            >
              <FiLogOut />
            </button>
          </div>
        ) : (
          rightTab.map((tab) => (
            <Link
              to={tab?.href}
              key={tab.id}
              className={`text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex gap-x-2 items-center border`}
            >
              <tab.icon size={20} /> {tab.label}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Navbar;
