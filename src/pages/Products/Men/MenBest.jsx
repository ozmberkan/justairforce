import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { bestsellersMen } from "~/data/data";
import { useDispatch, useSelector } from "react-redux";
import { addCartToUser } from "~/redux/slices/userSlice";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase/firebase";

const MenBest = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const addToCart = async (item) => {
    if (!user) {
      alert("Ürünü sepete eklemek için giriş yapmalısınız.");
      return;
    }
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      cart: arrayUnion(item),
    });
    dispatch(addCartToUser(item));
  };

  return (
    <div className="w-full px-7 py-6 flex flex-col gap-y-6">
      <h1 className="text-3xl font-semibold text-gray-700">
        Erkek En Çok Satanlar
      </h1>
      <div className="grid grid-cols-4 gap-5">
        {bestsellersMen.map((sh) => (
          <div
            key={sh.id}
            className="border p-3 flex flex-col gap-y-2 rounded-md bg-white"
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl text-gray-700">{sh.name}</h1>
                <span>{sh.price}₺</span>
              </div>
              <div className="flex gap-x-2">
                <button
                  onClick={() => addToCart(sh)}
                  className="bg-emerald-100 text-emerald-500 p-2 rounded-md hover:bg-emerald-200 hover:text-emerald-600"
                >
                  Sepete Ekle
                </button>
                <Link
                  to={`/products/${sh.id}`}
                  className="bg-sky-100 text-sky-500 p-2 rounded-md hover:bg-blue-200 hover:text-blue-600"
                >
                  Detay
                </Link>
              </div>
            </div>
            <img src={sh.image} className="rounded-md" />
            <button className="w-full border p-2 rounded-md flex justify-center items-center gap-x-3 hover:border-red-500 transition-colors">
              <span className="text-red-500">
                <FaHeart size={18} />
              </span>
              <span className="font-semibold text-red-500">
                Favorilere Ekle
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenBest;
