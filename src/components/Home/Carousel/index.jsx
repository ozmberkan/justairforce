import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { favorites } from "~/data/data";

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <div className="w-full flex justify-center items-center p-12">
      <div className="w-full">
        <Slider {...settings}>
          {favorites.map((item) => (
            <div key={item.id}>
              <div className="w-full h-full gap-x-2 flex items-center justify-center">
                <div className="border-2 border-gray-700 h-[400px] flex flex-col justify-start gap-y-5 w-[550px] rounded-xl p-4 shadow-xl">
                  <div className="flex justify-between p-1">
                    <h1 className="font-semibold text-lg ">{item.name}</h1>
                    <button className="bg-gray-700 px-5 rounded-md text-white hover:bg-gray-500 transition-colors duration-500">
                      Detay
                    </button>
                  </div>
                  <img
                    src={item.image}
                    alt="Shoe"
                    width={1200}
                    height={100}
                    className="w-full h-[300px] object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
