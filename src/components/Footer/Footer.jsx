import React from "react";
import { Link } from "react-router-dom";
import Logo from "~/assets/Svg/Logo.svg";
import { footerTabs } from "~/data/data";

const Footer = () => {
  return (
    <footer className="bg-white border-t text-black py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">
              <img src={Logo} alt="" />
            </h1>
            <p className="text-sm text-black mt-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a771ee] to-black">
              JUSTAIRFORCE
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {footerTabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.to}
                className="text-black hover:text-zinc-700 transition-colors"
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-500 text-sm">
            &copy; 2024 JustAirForce. Tüm Hakları Saklıdır!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
