import React from "react";
import Phone from "~/assets/Banners/phoneLanding.png";
import Appstore from "~/assets/SocialMedia/appstore.svg";
import Playstore from "~/assets/SocialMedia/googleplay.svg";
import Huaweistore from "~/assets/SocialMedia/huawei.svg";

const Store = () => {
  return (
    <div className="w-full h-[600px] flex justify-center items-center p-12">
      <div className="w-full bg-appBanner h-full bg-no-repeat bg-center bg-cover rounded-xl border flex">
        <div className="w-full h-full  flex flex-col items-end justify-center gap-y-5 p-12 text-white sm:text-right text-center">
          <h1 className="text-3xl font-bold">AirForce'ı indir!</h1>
          <p className="text-center font-semibold">
            Yüzlerce airforce arasından en sevdiğini daha kolay bir şekilde
            seçebilmen için tasarlandı.
          </p>
          <img
            src={Appstore}
            alt="appstore"
            className="w-56 hover:scale-105 transform transition-all duration-300 cursor-pointer"
          />
          <img
            src={Playstore}
            alt="playstore"
            className="w-56 hover:scale-105 transform transition-all duration-300 cursor-pointer"
          />
          <img
            src={Huaweistore}
            alt="huawei"
            className="w-56 hover:scale-105 transform transition-all duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Store;
