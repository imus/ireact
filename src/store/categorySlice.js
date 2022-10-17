/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-17 09:56:30
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-17 10:23:33
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload; // immer库代理对象，只在createSlice（RTK）中可直接赋值
    }
  }
});

export const { setName: setCategoryName } = categorySlice.actions;
export const { reducer: categoryReducer } = categorySlice;