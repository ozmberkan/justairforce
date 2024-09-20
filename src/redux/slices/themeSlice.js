import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: localStorage.getItem("theme") || "light",  
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);  
      if (action.payload === 'dark') {
        document.documentElement.classList.add('dark');  
      } else {
        document.documentElement.classList.remove('dark');  
      }
    },
  },
});

export const initializeTheme = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.classList.add(savedTheme === 'dark' ? 'dark' : 'light'); 
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    localStorage.setItem("theme", 'dark');
  } else {
    document.documentElement.classList.add('light');
    localStorage.setItem("theme", 'light');
  }
};

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
