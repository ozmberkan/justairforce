import Logo from "../../assets/Svg/Logo.svg";
import { FiSearch } from "react-icons/fi";
import { navTabs, rightTab } from "../../data/data";
import { Link } from "react-router-dom";
import TabMenu from "./Menu/TabMenu";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  border-b py-4 px-12 bg-white">
      <div className="flex gap-x-5 items-center justify-start">
        <Link to="/">
          <img src={Logo} alt="Logo" priority />
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
      <div className="flex items-center gap-x-2">
        <form className="w-full flex justify-center items-center gap-x-2 bg-white py-1 px-3 rounded-md border border-black/25 mr-5 focus-within:ring-2 transition-all duration-300 ring-offset-1 ring-gray-700">
          <input
            type="text"
            className="outline-none h-full"
            placeholder="Ara.."
          />
          <FiSearch
            size={20}
            className="cursor-pointer hover:text-gray-700 transition-colors"
          />
        </form>
        {rightTab.map((tab) => (
          <Link
            to={tab?.href}
            key={tab.id}
            className={`text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium`}
          >
            <tab.icon size={20} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
