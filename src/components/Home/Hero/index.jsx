import { Link } from "react-router-dom";
import Shoe2 from "~/assets/Banners/Shoe2.png";

const Hero = () => {
  return (
    <div className="w-full h-[500px] bg-banner bg-center bg-cover bg-no-repeat relative flex justify-center items-center dark:shadow-[inset_0px_-300px_500px_#000]">
      <div className="w-full flex justify-start items-center sm:flex-row flex-col gap-y-2 ">
        <div className="flex flex-col gap-y-2 sm:gap-y-4 sm:items-start items-center justify-center w-full sm:px-24 text-white ">
          <h1 className="sm:text-[70px] text-4xl font-black bg-gradient-to-r">
            Air Force
          </h1>
          <span className="sm:text-3xl text-lg sm:text-left text-center font-medium bg-gradient-to-r">
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

        {/* Shoe image with a lower z-index to stay behind text */}
        <div className="sm:absolute sm:top-0 sm:right-0 bottom-0 ">
          <img
            src={Shoe2}
            alt="Shoe"
            className="sm:w-[600px] w-[300px] drop-shadow-3xl sm:opacity-100 opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
