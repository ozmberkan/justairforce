import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Announcement from "~/components/Home/Announcement";
import Carousel from "~/components/Home/Carousel";
import Hero from "~/components/Home/Hero";
import Store from "~/components/Home/Store";
import SpringModal from "~/components/UI/Modal";

const Home = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <>
      {user?.hasbeenlogged === false && <SpringModal />}
      <div>
        <Hero />
        <Announcement />
        <Carousel />
        <Store />
      </div>
    </>
  );
};

export default Home;
