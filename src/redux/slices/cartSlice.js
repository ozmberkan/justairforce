import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCartToUser, updateUserCart } from './userSlice';
import { arrayUnion, updateDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '~/firebase/firebase';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const fetchCartData = () => (dispatch, getState) => {
  const user = getState().userSlice.user;

};


export const addToCartThunk = createAsyncThunk(
  'cart/addToCart',
  async ({ user, item, dispatch }, { rejectWithValue }) => {
    try {
      if (!user) {
        toast.error('Ürünü sepete eklemek için giriş yapmalısınız.');
        return;
      }

      const findItem = user.cart.find((sh) => sh.id === item.id);
      const userRef = doc(db, 'users', user.uid);

      if (findItem) {
        const updatedCart = user.cart.map((sh) =>
          sh.id === item.id ? { ...sh, quantity: (sh.quantity || 1) + 1 } : sh
        );

        await updateDoc(userRef, {
          cart: updatedCart,
        });

        dispatch(updateUserCart(updatedCart));
        localStorage.setItem(
          'user',
          JSON.stringify({ ...user, cart: updatedCart })
        );
        toast.success('Ürün sepetteki adedi artırıldı.');
      } else {
        const newItem = { ...item, quantity: 1 };

        await updateDoc(userRef, {
          cart: arrayUnion(newItem),
        });

        dispatch(addCartToUser(newItem));
        localStorage.setItem(
          'user',
          JSON.stringify({ ...user, cart: [...user.cart, newItem] })
        );
        toast.success('Ürün sepete eklendi.');
      }
    } catch (error) {
      console.error('Hata detayı:', error);
      toast.error('Bir hata oluştu: ' + (error.message || error));
      return rejectWithValue(error.message || error);
    }
  }
);

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
