import Shoe from "~/assets/Banners/Shoe.png";

const Hero = () => {
  return (
    <div
      className="w-full h-[500px] bg-banner bg-top bg-cover shadow-[inset_0_250px_500px_rgba(0,0,0,0.3)]

 bg-no-repeat relative flex justify-center items-center"
    >
      <div className="w-full flex justify-start items-center">
        <div className="flex flex-col gap-y-5 items-start justify-center w-full px-24 text-black">
          <h1 className="text-[50px] font-black">AirForce</h1>
          <span className="text-5xl font-medium">
            Ustalıkla İşlenen İkonik ve Klasik Tasarım.
          </span>
        </div>
        <img src={Shoe} alt="Shoe" className="w-[500px] drop-shadow-2xl" />
      </div>
    </div>
  );
};

export default Hero;
