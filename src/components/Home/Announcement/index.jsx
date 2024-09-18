import Shape1 from "~/assets/Svg/Shape1.svg";

const Announcement = () => {
  return (
    <div className="w-full h-[700px] sm:p-24 p-12  flex justify-center items-center">
      <div
        className="bg-bannerHistory sm:w-2/3 w-full h-full bg-cover bg-center bg-no-repeat rounded-xl flex justify-center items-center 
      shadow-[0_20px_250px_rgba(91,_52,_143,_1)]"
      >
        <div className="w-full relative h-full flex flex-col gap-y-5 justify-center items-start sm:px-12 px-7 text-white ring-2 ring-offset-2 rounded-xl ring-black">
          <div className="z-10 flex flex-col gap-y-5">
            <h1 className="sm:text-4xl text-2xl font-bold">
              Bir efsanenin doğuşu!
            </h1>
            <p className="sm:text-xl text-base">
              Air Force, Air Force 1 ile başlayan ve Air Force 2, Air Force 3,
              Air Force STS, Air Force 5, Air Force XXV serilerini de kapsayan
              Nike, Inc. tarafından üretilen bir spor ayakkabısıdır. Air Force
              1, Bruce Kilgore tarafından tasarlandı ve Nike Air türünü kullanan
              ilk basketbol ayakkabısı oldu. Ayakkabının alçak, orta ve yüksek
              bilek seçenekleri vardır.
            </p>
          </div>
          <img
            src={Shape1}
            className="absolute top-0 right-0 z-0 sm:opacity-100 opacity-25"
          />
        </div>
      </div>
    </div>
  );
};

export default Announcement;
91, 52, 143;
