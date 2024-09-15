import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:  JSON.parse(localStorage.getItem("user")) || null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser : (state,action) => {
        state.user = action.payload
        localStorage.setItem("user", JSON.stringify(action.payload))
    },
    logoutUser: (state) => {
      state.user = null,
      localStorage.removeItem("user")
    },
  },
})

export const { setUser,logoutUser } = userSlice.actions

export default userSlice.reducer