import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = [...state.cart, ...action.payload];
      localStorage.setItem('user', JSON.stringify(state.cart));
    },
  },
});

export const { setCart } = userSlice.actions;

export default userSlice.reducer;
