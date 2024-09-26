import { doc, updateDoc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { db } from "~/firebase/firebase";
import { updateUserCart } from "~/redux/slices/userSlice";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import CartBox from "./CartBox";

const Cart = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [animationParent] = useAutoAnimate();

  
  const deleteProduct = async (id) => {
    try {
      if (!user || !user.cart) {
        throw new Error("Kullanıcı veya sepet bilgileri bulunamadı.");
      }

      const newCart = user.cart.filter((sh) => sh && sh.id !== id);

      const userRef = doc(db, "users", user.uid);

      await updateDoc(userRef, { cart: newCart });

      dispatch(updateUserCart(newCart));

      localStorage.setItem("user", JSON.stringify({ ...user, cart: newCart }));
      toast.success("Ürün sepetten silindi.");
    } catch (error) {
      console.error("Hata detayı:", error);
      toast.error("Bir hata oluştu: " + (error.message || error));
    }
  };

  return (
    <div className="w-full px-7 py-6 flex flex-col gap-y-6">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-3xl font-semibold text-gray-700 dark:text-white">
          Sepetim
        </h1>
        <span className="px-4 py-2 rounded-md border bg-zinc-100 outline-none">
          {`Toplam: ${user.cart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          )}₺`}
        </span>
      </div>
      <div
        className="grid sm:grid-cols-4 grid-cols-1 gap-5"
        ref={animationParent}
      >
        {user.cart.length > 0 ? (
          user?.cart.map((sh) => (
            <CartBox key={sh.id} sh={sh} deleteProduct={deleteProduct} />
          ))
        ) : (
          <div className="w-full bg-red-100 text-red-500 px-4 py-2 rounded">
            Sepete henüz ürün eklenmemiş!
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
