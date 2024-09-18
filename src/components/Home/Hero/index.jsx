import { Link } from "react-router-dom";
import Shoe2 from "~/assets/Banners/Shoe2.png";

const Hero = () => {
  return (
    <div className="w-full h-[500px] bg-banner bg-center bg-cover bg-no-repeat relative flex justify-center items-center">
      <div className="w-full flex justify-start items-center">
        <div className="flex flex-col gap-y-4 items-start justify-center w-full px-24 text-white">
          <h1 className="text-[70px] font-black bg-gradient-to-r  ">
            Air Force
          </h1>
          <span className="text-3xl font-medium bg-gradient-to-r ">
            Ustalıkla İşlenen İkonik ve Klasik Tasarım.
            <p className="text-sm">
              Bütün Air Force modelleri, Nike Air teknolojisi ile donatılmıştır.
              Air Force'lara ulaşmak için tıklayın.
            </p>
          </span>
          <Link
            to="/all-products"
            className="py-1.5 bg-white text-black px-6 mt-3 border border-transparent hover:border-white hover:text-white hover:bg-transparent transition-colors duration-500 rounded-md"
          >
            Tüm Air Force Modelleri
          </Link>
        </div>
        <div className="absolute top-0 right-0">
          <img src={Shoe2} alt="Shoe" className="w-[600px] drop-shadow-2xl " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
