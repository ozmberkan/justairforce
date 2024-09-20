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
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BsCart4 } from "react-icons/bs";
import { GoInfo } from "react-icons/go";

const MenBest = () => {
  const { user } = useSelector((store) => store.user);
  const { theme } = useSelector((store) => store.theme);
  const dispatch = useDispatch();

  const [selectedSizes, setSelectedSizes] = useState({});
  const [loadedImages, setLoadedImages] = useState({});

  const shoesRef = collection(db, "shoes");
  const [snapshot] = useCollection(shoesRef);

  const allproductsData = snapshot?.docs?.map((shoe) => ({
    id: shoe.id,
    ...shoe.data(),
  }));

  const menBest = allproductsData?.filter((shoe) =>
    ["AF001", "AF002", "AF003", "AF004"].includes(shoe.id)
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
        Erkek En Çok Satanlar
      </h1>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-5  transition-colors duration-500">
        {menBest?.map((sh) => (
          <div
            key={sh.id}
            className="border dark:border-neutral-600 p-3 flex flex-col gap-y-4 rounded-md"
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl text-gray-700 dark:text-white">
                  {sh.name}
                </h1>
                <span className="dark:text-white">{sh.price}₺</span>
              </div>
              <div className="flex gap-x-2">
                <button
                  onClick={() => addToCart(sh)}
                  className="bg-emerald-100 dark:hover:bg-neutral-800 transition-colors duration-300 text-emerald-500 p-2 rounded-md hover:bg-emerald-200 hover:text-emerald-600 dark:bg-black dark:text-white"
                >
                  <BsCart4 size={20} />
                </button>
                <Link
                  to={`/products/${sh.id}`}
                  className="bg-sky-100 dark:hover:bg-neutral-800 transition-colors duration-300 text-sky-500 p-2 rounded-md hover:bg-blue-200 hover:text-blue-600 dark:bg-black dark:text-white"
                >
                  <GoInfo size={20} />
                </Link>
                <button
                  onClick={() => addToFavorites(sh)}
                  className="bg-red-100 dark:hover:bg-neutral-800 transition-colors duration-300 p-2 rounded-md hover:bg-red-200 dark:bg-black dark:text-white"
                >
                  <span className="text-red-500">
                    <FaHeart size={18} />
                  </span>
                </button>
              </div>
            </div>

            {/* Resim ve Skeleton */}
            <div className="relative w-full h-72">
              {!loadedImages[sh.id] && theme === "light" && (
                <SkeletonTheme baseColor="#ccc" highlightColor="#fff">
                  <Skeleton
                    height="100%"
                    width="100%"
                    className="absolute top-0 left-0 rounded-md "
                  />
                </SkeletonTheme>
              )}
              {!loadedImages[sh.id] && theme === "dark" && (
                <SkeletonTheme baseColor="#444" highlightColor="#202020">
                  <Skeleton
                    height="100%"
                    width="100%"
                    className="absolute top-0 left-0 rounded-md "
                  />
                </SkeletonTheme>
              )}
              <img
                src={sh.image}
                alt={sh.name}
                className={`w-full h-full object-cover rounded-md transition-opacity duration-500 bg-neutral-100 dark:bg-neutral-800 ${
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
                      ? "bg-neutral-700 text-white dark:bg-black dark:border-black dark:text-black"
                      : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenBest;
