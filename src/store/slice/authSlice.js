/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-18 18:50:03
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-19 10:12:04
 */
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: () => {
    const token = localStorage.getItem('token');
    if (token) {
      return {
        isLogged: true,
        token,
        user: JSON.parse(localStorage.getItem('user')),
        exp: +localStorage.getItem('exp'),
      }
    }
    return {
      isLogged: false,
      token: '',
      user: null,
      exp: 0
    }
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLogged = true;

      const timeOut = 1000 * 60 * 60 * 24 * 7; // 一周后过期
      const now = Date.now();

      state.exp = timeOut + now;

      localStorage.setItem('exp', state.exp);
      localStorage.setItem('token', state.token);
      localStorage.setItem('user', JSON.stringify(state.user));

    },
    logout(state, action) {
      state.token = '';
      state.user = null;
      state.isLogged = false;
      state.exp = 0;

      localStorage.setItem('exp', 0);
      localStorage.setItem('token', '')
      localStorage.setItem('user', '')
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice;