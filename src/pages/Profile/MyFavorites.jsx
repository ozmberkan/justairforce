import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { db } from "~/firebase/firebase";
import { updateUserFav } from "~/redux/slices/userSlice";
import { useAutoAnimate } from "@formkit/auto-animate/react";

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

      const userRef = doc(db, "users", user.uid);

      await updateDoc(userRef, { favorites: newFavorites });

      dispatch(updateUserFav(newFavorites));

      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, favorites: newFavorites })
      );
      toast.success("Ürün favorilerden silindi.");
    } catch (error) {
      toast.error("Bir hata oluştu: " + (error.message || error));
    }
  };

  return (
    <div className="w-full px-7 py-6 flex flex-col gap-y-6">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-3xl font-semibold text-gray-700">Favorilerim</h1>
      </div>
      <div className="grid grid-cols-4 gap-5" ref={animationParent}>
        {user?.favorites.length > 0 ? (
          user?.favorites.map((sh) => (
            <div
              key={sh.id}
              className="border p-3 flex flex-col gap-y-2 rounded-md bg-white"
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <h1 className="font-bold text-2xl text-gray-700">
                    {sh.name}
                  </h1>
                  <span>{sh.price}₺</span>
                </div>
                <div>
                  <button
                    onClick={() => deleteFav(sh.id)}
                    className="text-red-500 bg-red-100 px-4 py-2 rounded-md"
                  >
                    Sil
                  </button>
                </div>
              </div>
              {sh.image && (
                <img src={sh.image} alt={sh.name} className="rounded-md" />
              )}
            </div>
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
