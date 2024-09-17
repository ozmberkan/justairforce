import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    updateUserCart: (state, action) => {
      state.user.cart = action.payload;
      localStorage.setItem("user", JSON.stringify({ ...state.user, cart: action.payload }));
    },
    addFavToUser: (state, action) => {
      state.user.favorites = [...state.user.favorites, action.payload];
      localStorage.setItem("user", JSON.stringify({ ...state.user, favorites: action.payload }))
    },
    updateUserFav : (state,action) => {
      state.user.favorites = action.payload;
    }
  },
});

export const { setUser, logoutUser, addCartToUser, updateUserCart,addFavToUser,updateUserFav } = userSlice.actions;

export default userSlice.reducer;
