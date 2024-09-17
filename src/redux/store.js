import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import cartSlice from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    cart : cartSlice
  },
})