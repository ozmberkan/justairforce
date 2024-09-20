import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "~/firebase/firebase";
import { collection } from "firebase/firestore";

const Carousel = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: isTabletOrMobile ? 1 : 3,
    slidesToScroll: isTabletOrMobile ? 1 : 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const shoesRef = collection(db, "shoes");
  const [snapshot, loading] = useCollection(shoesRef);

  const allproductsData = snapshot?.docs?.map((shoe) => ({
    id: shoe.id,
    ...shoe.data(),
  }));

  const newShoes = allproductsData?.filter((shoe) =>
    ["AF001", "AF002", "AF003", "AF004"].includes(shoe.id)
  );

  return (
    <div className="w-full flex flex-col justify-center items-start gap-y-6 p-12">
      <h1 className="text-4xl font-semibold px-6 py-1 bg-clip-text text-transparent bg-gradient-to-r from-black to-[rgb(91,52,143)] ">
        En Çok Satılan Ürünler
      </h1>
      <div className="w-full">
        <Slider {...settings}>
          {newShoes?.map((item) => (
            <div key={item.id} className="px-2">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="border-4 border-neutral-900 cursor-grab h-[400px] flex flex-col justify-start gap-y-5 w-full rounded-xl p-4">
                  <div className="flex justify-between p-1">
                    <h1 className="font-semibold text-xl">{item.name}</h1>
                    <Link
                      to={`/products/${item.id}`}
                      className="px-4 py-1.5 rounded-md text-white bg-gradient-to-r from-black to-[#5B348F] transition-colors duration-500"
                    >
                      Ürün Detayı
                    </Link>
                  </div>
                  <img
                    src={item.image}
                    alt={item.name}
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
