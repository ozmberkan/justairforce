import { dailyWomen } from "~/data/data";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addFavToUser, updateUserCart } from "~/redux/slices/userSlice";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import { toast } from "react-toastify";
import { addToFavThunk } from "~/redux/slices/cartSlice";

const WomenDaily = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const addToCart = async (item) => {
    if (!user) {
      toast.error("Ürünü sepete eklemek için giriş yapmalısınız.");
      return;
    }

    const updatedCart = user.cart.map((sh) =>
      sh.id === item.id ? { ...sh, quantity: (sh.quantity || 1) + 1 } : sh
    );
    if (!updatedCart.some((sh) => sh.id === item.id)) {
      const newItem = { ...item, quantity: 1 };
      updatedCart.push(newItem);
    }

    dispatch(updateUserCart(updatedCart)); //localstorage

    dispatch(addToCartThunk({ item, user, updatedCart })); //firebase
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

  return (
    <div className="w-full px-7 py-6 flex flex-col gap-y-6">
      <h1 className="text-3xl font-semibold text-gray-700">
        Kadın Günlük Giyim
      </h1>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-5">
        {dailyWomen.map((sh) => (
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

export default WomenDaily;
