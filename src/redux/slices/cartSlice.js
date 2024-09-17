import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { arrayUnion, updateDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "~/firebase/firebase";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const addToCartThunk = createAsyncThunk(
  "cart/addToCart",
  async ({ user, item, updatedCart }, { rejectWithValue }) => {
    try {
      if (!user) {
        toast.error("Ürünü sepete eklemek için giriş yapmalısınız.");
        return;
      }

      const userRef = doc(db, "users", user.uid);

      await updateDoc(userRef, {
        cart: updatedCart,
      });

      toast.success("Ürün sepete eklendi veya adedi artırıldı.");
    } catch (error) {
      console.error("Hata detayı:", error);
      toast.error("Bir hata oluştu: " + (error.message || error));
      return rejectWithValue(error.message || error);
    }
  }
);

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
