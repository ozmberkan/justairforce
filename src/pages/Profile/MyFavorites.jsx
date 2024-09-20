import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteFavorites, updateUserFav } from "~/redux/slices/userSlice";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Favbox from "./Favbox";

const MyFavorites = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [animationParent] = useAutoAnimate();

  const deleteFav = async (id) => {
    try {
      if (!user || !user.favorites) {
        toast.error("Kullanıcı veya sepet bilgileri bulunamadı.");
      }
      const newFavorites = user.favorites.filter((sh) => sh && sh.id !== id);

      dispatch(deleteFavorites({ user, newFavorites }));
      dispatch(updateUserFav(newFavorites));

      toast.success("Ürün favorilerden silindi.");
    } catch (error) {
      toast.error("Bir hata oluştu: " + (error.message || error));
    }
  };

  return (
    <div className="w-full px-7 py-6 flex flex-col gap-y-6">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-3xl font-semibold text-gray-700 dark:text-white">
          Favorilerim
        </h1>
      </div>
      <div
        className="grid sm:grid-cols-4 grid-cols-1 gap-5"
        ref={animationParent}
      >
        {user?.favorites.length > 0 ? (
          user?.favorites.map((sh) => (
            <Favbox key={sh.id} sh={sh} deleteFav={deleteFav} />
          ))
        ) : (
          <div className="w-full bg-red-100 text-red-500 px-4 py-2 rounded">
            Favorilere henüz ürün eklenmemiş!
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFavorites;
