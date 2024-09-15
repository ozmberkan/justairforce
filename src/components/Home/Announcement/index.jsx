import Shoe from "~/assets/Banners/Historyshoe.png";

const Announcement = () => {
  return (
    <div className="w-full h-[700px] p-24 flex justify-center items-center">
      <div className="bg-bannerHistory w-2/3 h-full bg-cover bg-center bg-no-repeat rounded-xl flex justify-center items-center shadow-xl">
        <div className="w-1/2  h-full">
          <img
            src={Shoe}
            alt="Shoe"
            className="w-[700px] transform scale-125 rotate-[30deg] drop-shadow-xl"
          />
        </div>
        <div className="w-1/2  h-full flex flex-col gap-y-5 justify-center items-start px-12">
          <h1 className="text-4xl font-bold">Bir efsanenin doğuşu!</h1>
          <p className="text-xl">
            Air Force, Air Force 1 ile başlayan ve Air Force 2, Air Force 3, Air
            Force STS, Air Force 5, Air Force XXV serilerini de kapsayan Nike,
            Inc. tarafından üretilen bir spor ayakkabısıdır. Air Force 1, Bruce
            Kilgore tarafından tasarlandı ve Nike Air türünü kullanan ilk
            basketbol ayakkabısı oldu. Ayakkabının alçak, orta ve yüksek bilek
            seçenekleri vardır.
          </p>
          <button className="px-12 py-2 rounded-full text-white bg-black">
            Detay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
