// slice.js
import { createSlice } from '@reduxjs/toolkit';

const getInitialIsLogin = () => {
  if (typeof window !== 'undefined') {
    // Check if localStorage is available in the client-side
    return JSON.parse(localStorage.getItem('isLogin')) || false;
  }
  return false;
};

const initialState = {
  isLogin: getInitialIsLogin(),
};

export const LoginSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('isLogin', JSON.stringify(action.payload));
      }
    },
  },
});

export const { setIsLogin } = LoginSlice.actions;
