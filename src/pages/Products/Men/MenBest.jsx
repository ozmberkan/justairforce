import { bestsellersMen, favorites } from "~/data/data";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartToUser,
  addFavToUser,
  updateUserCart,
} from "~/redux/slices/userSlice";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import { toast } from "react-toastify";

const MenBest = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const addToCart = async (item) => {
    try {
      if (!user) {
        toast.error("Ürünü sepete eklemek için giriş yapmalısınız.");
        return;
      }

      const findItem = user.cart.find((sh) => sh.id === item.id);

      const userRef = doc(db, "users", user.uid);

      if (findItem) {
        const updatedCart = user.cart.map((sh) =>
          sh.id === item.id ? { ...sh, quantity: (sh.quantity || 1) + 1 } : sh
        );

        await updateDoc(userRef, {
          cart: updatedCart,
        });

        dispatch(updateUserCart(updatedCart));
        localStorage.setItem(
          "user",
          JSON.stringify({ ...user, cart: updatedCart })
        );
        toast.success("Ürün sepetteki adedi artırıldı.");
      } else {
        const newItem = { ...item, quantity: 1 };

        await updateDoc(userRef, {
          cart: arrayUnion(newItem),
        });

        dispatch(addCartToUser(newItem));
        localStorage.setItem(
          "user",
          JSON.stringify({ ...user, cart: [...user.cart, newItem] })
        );
        toast.success("Ürün sepete eklendi.");
      }
    } catch (error) {
      console.error("Hata detayı:", error);
      toast.error("Bir hata oluştu: " + (error.message || error));
    }
  };



  
  const addToFavorites = async (item) => {
    if (!user) {
      toast.error("Ürünü favorilere eklemek için giriş yapmalısınız.");
      return;
    }
    const findItem = user.favorites.find((fItem) => fItem.id === item.id);

    if (findItem) {
      toast.error("Bu ürün favorilerde zaten bulunuyor!");
      return;
    }

    try {
      const userRef = doc(db, "users", user.uid);

      await updateDoc(userRef, {
        favorites: arrayUnion(item),
      });
      dispatch(addFavToUser(item));
      toast.success("Başarıyla favorilere eklendi!");
    } catch (error) {
      toast.error(
        "Bir hata ile karşılaştık. Geliştirici ile iletişim kurunuz!" + error
      );
    }
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
            <button
              onClick={() => addToFavorites(sh)}
              className="w-full border p-2 rounded-md flex justify-center items-center gap-x-3 hover:border-red-500 transition-colors"
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

export default MenBest;
