import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import cartSlice from './slices/cartSlice'
import themeSlice from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    cart : cartSlice,
    theme: themeSlice
  },
})