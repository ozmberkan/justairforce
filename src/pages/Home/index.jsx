import Announcement from "~/components/Home/Announcement";
import Carousel from "~/components/Home/Carousel";
import Hero from "~/components/Home/Hero";
import Store from "~/components/Home/Store";

const Home = () => {
  return (
    <div>
      <Hero />
      <Announcement />
      <Carousel />
      <Store />
    </div>
  );
};

export default Home;
