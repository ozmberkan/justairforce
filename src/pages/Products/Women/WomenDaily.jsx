import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { addFavToUser, updateUserCart } from "~/redux/slices/userSlice";
import { addToCartThunk, addToFavThunk } from "~/redux/slices/cartSlice";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const WomenDaily = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [selectedSizes, setSelectedSizes] = useState({});
  const [loadedImages, setLoadedImages] = useState({});

  const shoesRef = collection(db, "shoes");
  const [snapshot] = useCollection(shoesRef);

  const allproductsData = snapshot?.docs?.map((shoe) => ({
    id: shoe.id,
    ...shoe.data(),
  }));

  const womenDaily = allproductsData?.filter((shoe) =>
    ["AF012", "AF003", "AF009", "AF001"].includes(shoe.id)
  );

  const addToCart = async (item) => {
    if (!user) {
      toast.error("Ürünü sepete eklemek için giriş yapmalısınız.");
      return;
    }

    const selectedSize = selectedSizes[item.id];

    if (!selectedSize) {
      toast.error("Lütfen bir beden seçiniz.");
      return;
    }

    const { sizes, ...filteredItem } = item;

    const updatedCart = user.cart.map((sh) =>
      sh.id === item.id ? { ...sh, quantity: (sh.quantity || 1) + 1 } : sh
    );

    if (!updatedCart.some((sh) => sh.id === item.id)) {
      const newItem = { ...filteredItem, quantity: 1, size: selectedSize };
      updatedCart.push(newItem);
    }

    dispatch(updateUserCart(updatedCart));
    dispatch(addToCartThunk({ item: filteredItem, user, updatedCart }));

    setSelectedSizes((prev) => ({ ...prev, [item.id]: "" }));
  };

  const addToFavorites = async (item) => {
    if (!user) {
      toast.error("Ürünü favorilere eklemek için giriş yapmalısınız.");
      return;
    }
    const findItem = user?.favorites.find((fItem) => fItem.id === item.id);

    if (findItem) {
      toast.error("Bu ürün favorilerde zaten bulunuyor!");
      return;
    }

    dispatch(addFavToUser(item));
    dispatch(addToFavThunk({ item, user }));
    toast.success("Başarıyla favorilere eklendi!");
  };

  const handleSizeSelection = (itemId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [itemId]: size }));
  };

  const handleImageLoad = (itemId) => {
    setLoadedImages((prev) => ({ ...prev, [itemId]: true }));
  };

  return (
    <div className="w-full px-7 py-6 flex flex-col gap-y-6">
      <h1 className="text-3xl font-semibold text-gray-700 dark:text-white">
        Kadın Günlük Giyim
      </h1>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-5">
        {womenDaily?.map((sh) => (
          <div
            key={sh.id}
            className="border dark:border-neutral-600 p-3 flex flex-col gap-y-4 rounded-md"
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl text-gray-700 dark:text-white">
                  {sh.name}
                </h1>{" "}
                <span className="dark:text-white">{sh.price}₺</span>
              </div>
              <div className="flex gap-x-2">
                <button
                  onClick={() => addToCart(sh)}
                  className="bg-emerald-100 text-emerald-500 p-2 rounded-md hover:bg-emerald-200 hover:text-emerald-600 dark:bg-black dark:text-white"
                >
                  Sepete Ekle
                </button>
                <Link
                  to={`/products/${sh.id}`}
                  className="bg-sky-100 text-sky-500 p-2 rounded-md hover:bg-blue-200 hover:text-blue-600 dark:bg-black dark:text-white"
                >
                  Detay
                </Link>
              </div>
            </div>

            {/* Resim ve Skeleton */}
            <div className="relative w-full h-64">
              {!loadedImages[sh.id] && (
                <Skeleton
                  height="100%"
                  width="100%"
                  className="absolute top-0 left-0 rounded-md"
                />
              )}
              <img
                src={sh.image}
                alt={sh.name}
                className={`w-full h-full object-cover rounded-md transition-opacity duration-500 ${
                  loadedImages[sh.id] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(sh.id)}
              />
            </div>

            <div className="sm:w-full py-2 flex flex-wrap justify-start gap-2">
              {sh?.sizes?.map((size) => (
                <button
                  onClick={() => handleSizeSelection(sh.id, size)}
                  key={size}
                  className={`px-2 py-1 border-2 rounded-md dark:text-white border-neutral-300 hover:bg-black hover:text-white ${
                    selectedSizes[sh.id] === size
                      ? "bg-neutral-700 text-white"
                      : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <button
              onClick={() => addToFavorites(sh)}
              className="w-full border p-2 rounded-md dark:border-red-500 flex justify-center items-center gap-x-3 hover:border-red-500 transition-colors"
            >
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

export default WomenDaily;
