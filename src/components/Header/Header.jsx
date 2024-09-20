import Logo from "../../assets/Svg/Logo.svg";
import { FiLogOut } from "react-icons/fi";
import { navTabs, rightTab, userTabs } from "../../data/data";
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
import "react-spring-bottom-sheet/dist/style.css";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
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

  return (
    <>
      {openBottom && (
        <BottomSheet open={open} onDismiss={onDismiss}>
          <div className="p-5 flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-1">
              <h1>Yeni Air Force'lar</h1>
              <Link
                to="/airforceone"
                onClick={onDismiss}
                className="text-xs bg-zinc-100 py-2 rounded-md px-4"
              >
                Air Force One
              </Link>
              <Link
                to="/airforcerainbow"
                onClick={onDismiss}
                className="text-xs bg-zinc-100 py-2 rounded-md px-4"
              >
                Air Force Rainbow
              </Link>
              <Link
                to="/airforcecherry"
                onClick={onDismiss}
                className="text-xs bg-zinc-100 py-2 rounded-md px-4"
              >
                Air Force Cherry
              </Link>
            </div>
            <div className="flex flex-col gap-y-1">
              <h1>Erkek</h1>
              <Link
                to="/men-best-sellers"
                onClick={onDismiss}
                className="text-xs bg-zinc-100 py-2 rounded-md px-4"
              >
                Erkek En Çok Satanlar
              </Link>
              <Link
                to="/men-daily"
                onClick={onDismiss}
                className="text-xs bg-zinc-100 py-2 rounded-md px-4"
              >
                Erkek Günlük Giyim
              </Link>
            </div>
            <div className="flex flex-col gap-y-1">
              <h1>Kadın</h1>
              <Link
                to="/women-best-sellers"
                onClick={onDismiss}
                className="text-xs bg-zinc-100 py-2 rounded-md px-4"
              >
                Kadın En Çok Satanlar
              </Link>
              <Link
                to="/women-daily"
                onClick={onDismiss}
                className="text-xs bg-zinc-100 py-2 rounded-md px-4"
              >
                Kadın Günlük Giyim
              </Link>
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
      <div className="flex justify-between items-center border-b py-4 px-8 bg-white shadow-sm">
        {isTabletOrMobile && (
          <div className="flex items-center justify-between gap-x-8 w-full">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" className="sm:w-24 w-16" />
            </Link>
            <button
              onClick={() => setOpenBottom(true)}
              className="text-[#763ebe] text-2xl bg-[#763ebe]/20 rounded-md p-1.5"
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
        )}
        {/* Sağ Bölüm (Kullanıcı İşlemleri ve Sepet) */}
        {!isTabletOrMobile && (
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
                    className="px-4 py-1.5 rounded-md font-medium text-white bg-black hover:bg-neutral-700 transition-colors  flex gap-x-1 items-center text-sm"
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
