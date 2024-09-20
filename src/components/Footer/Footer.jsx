import React from "react";
import { Link } from "react-router-dom";
import Logo from "~/assets/Svg/Logo.svg";
import { footerTabs } from "~/data/data";

const Footer = () => {
  return (
    <footer className="sm:bg-white dark:bg-neutral-800 dark:border-neutral-600 transition-colors duration-500  border-t text-black py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col w-full  sm:flex-row sm:justify-between justify-start items-center  ">
          <div className="mb-4 md:mb-0 sm:w-auto w-full flex justify-center items-center">
            <h1 className="text-2xl font-bold">
              <img src={Logo} alt="" />
            </h1>
            <p className="text-sm text-black mt-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a771ee] to-black">
              JUSTAIRFORCE
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 sm:w-auto w-full sm:divide-none justify-center items-center">
            {footerTabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.to}
                className="text-black hover:text-[#a771ee] d transition-colors dark:text-white dark:hover:text-[#a771ee]"
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center border-t border-gray-700  pt-4">
          <p className="text-gray-500 dark:text-white  text-sm">
            &copy; 2024 JustAirForce. Tüm Hakları Saklıdır!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
