import Logo from "../../assets/Svg/Logo.svg";
import { FiLogOut } from "react-icons/fi";
import {
  MobileTabMen,
  MobileTabSingleShoes,
  MobileTabWomen,
  navTabs,
  rightTab,
  userTabs,
} from "../../data/data";
import { GoMoon, GoSun } from "react-icons/go";

import { Link, useNavigate } from "react-router-dom";
import TabMenu from "./Menu/TabMenu";
import { useDispatch, useSelector } from "react-redux";
import { FaSortDown } from "react-icons/fa";
import { logoutUser } from "~/redux/slices/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "~/firebase/firebase";
import { BottomSheet } from "react-spring-bottom-sheet";
import { useMediaQuery } from "react-responsive";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { BsDatabaseLock } from "react-icons/bs";
import "react-spring-bottom-sheet/dist/style.css";
import { setTheme } from "~/redux/slices/themeSlice";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const { theme } = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openBottom, setOpenBottom] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const logOut = async () => {
    try {
      await signOut(auth);
      dispatch(logoutUser());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onDismiss = () => {
    setOpenBottom(false);
  };

  const toggleTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };

  return (
    <>
      {openBottom && (
        <BottomSheet open={open} onDismiss={onDismiss}>
          <div className="p-5 flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-1">
              <h1>Yeni Air Force'lar</h1>
              {MobileTabSingleShoes.map((shoe, i) => (
                <Link
                  key={i}
                  to={shoe.to}
                  onClick={onDismiss}
                  className="text-xs bg-zinc-100 py-2 rounded-md px-4"
                >
                  {shoe.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-y-1">
              <h1>Erkek</h1>
              {MobileTabMen.map((shoe, i) => (
                <Link
                  key={i}
                  to={shoe.to}
                  onClick={onDismiss}
                  className="text-xs bg-zinc-100 py-2 rounded-md px-4"
                >
                  {shoe.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-y-1">
              <h1>Kadın</h1>
              {MobileTabWomen.map((shoe, i) => (
                <Link
                  key={i}
                  to={shoe.to}
                  onClick={onDismiss}
                  className="text-xs bg-zinc-100 py-2 rounded-md px-4"
                >
                  {shoe.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-y-1">
              <h1>Tümü</h1>
              <Link
                to="/all-products"
                onClick={onDismiss}
                className="text-xs bg-zinc-100 py-2 rounded-md px-4"
              >
                Tüm Air Force'lar
              </Link>
            </div>
            <hr />
            <div className="flex items-center gap-x-4 w-full">
              {!user &&
                rightTab.map((tab) => (
                  <Link
                    to={tab?.href}
                    key={tab.id}
                    onClick={onDismiss}
                    className="px-4 w-full justify-center  py-1.5 rounded-md font-medium text-white bg-gradient-to-r from-black to-[#5B348F] transition-colors duration-500 flex gap-x-1 items-center text-sm"
                  >
                    <tab.icon size={16} />
                    {tab.label}
                  </Link>
                ))}
              {user && (
                <div className="w-full flex flex-col gap-y-2">
                  {userTabs.map((tab) => (
                    <Link
                      key={tab.id}
                      to={tab.to}
                      onClick={onDismiss}
                      className="flex  w-full items-center gap-x-2 text-gray-800 hover:text-[#763ebe] transition-colors duration-200 text-sm font-semibold"
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
              )}
            </div>
          </div>
        </BottomSheet>
      )}
      <div className="flex justify-between items-center border-b dark:border-neutral-600 py-4 px-8 bg-white shadow-sm dark:bg-neutral-800 dark:text-white transition-colors duration-700">
        {isTabletOrMobile && (
          <div className="flex items-center justify-between gap-x-8 w-full">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" className="sm:w-24 w-16" />
            </Link>
            <button
              onClick={() => setOpenBottom(true)}
              className="text-[#763ebe] text-2xl bg-[#763ebe]/20 rounded-md p-1.5 "
            >
              <IoMdMenu />
            </button>
          </div>
        )}
        {/* Sol Bölüm (Logo ve Navigasyon Menüsü) */}
        {!isTabletOrMobile && (
          <div className="flex items-center gap-x-8">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" className="w-24" />
            </Link>
            <nav className="flex gap-x-6">
              {navTabs.map((tab) => (
                <Link
                  to={tab?.href}
                  key={tab.id}
                  className="text-gray-800 hover:text-[#763ebe] transition-colors duration-200 text-sm font-medium flex gap-x-1 dark:text-white"
                >
                  <TabMenu tab={tab} /> <FaSortDown />
                </Link>
              ))}
              <Link
                to="/all-products"
                className="text-gray-800 hover:text-[#763ebe] transition-colors duration-200 text-sm font-medium dark:text-white"
              >
                Tüm Air Force'lar
              </Link>
            </nav>
          </div>
        )}
        {/* Sağ Bölüm (Kullanıcı İşlemleri ve Sepet) */}
        {!isTabletOrMobile && (
          <div className="flex items-center gap-x-6">
            <button
              onClick={toggleTheme}
              className="text-gray-800 hover:text-[#763ebe] transition-colors duration-200 text-sm font-medium items-center  w-28 dark:text-white"
            >
              {theme === "light" ? (
                <span className=" flex gap-x-1 items-center">
                  <GoMoon /> Karanlık Mod
                </span>
              ) : (
                <span className=" flex gap-x-1 items-center">
                  <GoSun /> Aydınlık Mod
                </span>
              )}
            </button>
            {user ? (
              <div className="flex items-center gap-x-4">
                {userTabs.map((tab) => (
                  <Link
                    key={tab.id}
                    to={tab.to}
                    className="flex items-center gap-x-2 text-gray-800 hover:text-[#763ebe] transition-colors duration-200 text-sm font-semibold dark:text-white"
                  >
                    <tab.icon />
                    {tab.label}
                  </Link>
                ))}
                {user.admin === true ? (
                  <Link
                    to="/panel"
                    className="flex items-center gap-x-2 text-gray-800 hover:text-[#763ebe] transition-colors duration-200 text-sm font-semibold dark:text-white"
                  >
                    <BsDatabaseLock />
                    Panel
                  </Link>
                ) : null}

                <button
                  onClick={logOut}
                  className="flex items-center gap-x-2  transition-colors duration-200 text-sm font-medium  rounded-full px-2 py-1 bg-red-500 text-white hover:bg-red-600 dark:bg-red-200 dark:text-red-500  "
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
                    className="px-4 py-1.5 rounded-md font-medium duration-500 dark:bg-neutral-700 dark:text-neutral-200  text-white bg-black hover:bg-neutral-700 transition-colors  flex gap-x-1 items-center text-sm"
                  >
                    <tab.icon size={16} />
                    {tab.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
