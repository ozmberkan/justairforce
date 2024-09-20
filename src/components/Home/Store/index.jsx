import { socialMedia } from "~/data/data";

const Store = () => {
  return (
    <div className="w-full h-[600px] flex justify-center items-center p-12">
      <div className="w-full bg-appBanner h-full bg-no-repeat bg-center bg-cover rounded-xl border dark:border-neutral-900 flex dark:shadow-[inset_-500px_0px_500px_#000]">
        <div className="w-full h-full  flex flex-col items-end justify-center gap-y-5 p-12 text-white sm:text-right text-center">
          <h1 className="text-3xl font-bold">AirForce'ı indir!</h1>
          <p className="text-center font-semibold">
            Yüzlerce Air Force arasından en sevdiğini daha kolay bir şekilde
            seçebilmen için tasarlandı.
          </p>
          {socialMedia.map((sMedia) => (
            <img
              src={sMedia.src}
              alt={sMedia.alt}
              className="w-56 hover:scale-105 transform transition-all duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
