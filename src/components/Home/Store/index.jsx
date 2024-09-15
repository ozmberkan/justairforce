import React from "react";
import Phone from "~/assets/Banners/phoneLanding.png";
import Appstore from "~/assets/SocialMedia/appstore.svg";
import Playstore from "~/assets/SocialMedia/googleplay.svg";
import Huaweistore from "~/assets/SocialMedia/huawei.svg";

const Store = () => {
  return (
    <div className="w-full h-[600px] flex justify-center items-center p-12">
      <div className="w-2/3 bg-appBanner h-full bg-no-repeat bg-center bg-cover rounded-xl border flex">
        <div className="w-1/2  flex items-end justify-center ">
          <img src={Phone} alt="Phone" className="w-80" />
        </div>
        <div className="w-1/2 h-full  flex flex-col items-center justify-center gap-y-5 p-12">
          <h1 className="text-3xl font-bold">AirForce'ı indir!</h1>
          <p className="text-center font-semibold">
            Yüzlerce airforce arasından en sevdiğini daha kolay bir şekilde
            seçebilmen için tasarlandı.
          </p>
          <img src={Appstore} alt="appstore" />
          <img src={Playstore} alt="playstore" />
          <img src={Huaweistore} alt="huawei" />
        </div>
      </div>
    </div>
  );
};

export default Store;
