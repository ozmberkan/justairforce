import { useEffect } from "react";
import { useSelector } from "react-redux";
import Announcement from "~/components/Home/Announcement";
import Carousel from "~/components/Home/Carousel";
import Hero from "~/components/Home/Hero";
import Store from "~/components/Home/Store";
import SpringModal from "~/components/UI/Modal";

const Home = () => {
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    localStorage.setItem("theme", "light");
  }, []);

  return (
    <>
      {user?.hasbeenlogged === false && (
        <SpringModal
          title={"Bir Dakika!"}
          description={
            "Bu uygulama, hala geliştirme aşamasında. Bu yüzden bazı hatalar ve eksiklikler olabilir. Anlayışınız için teşekkür ederim."
          }
        />
      )}
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
