/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-17 09:56:30
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-17 11:13:28
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = [{name: "未分类"}];

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload; // immer库代理对象，只在createSlice（RTK）中可直接赋值
    },
    addCategory(state, action) {
      let payload = action.payload || {name: ''};
      if (payload != null && !!payload.name) {
        state.push(action.payload);
      }
    }
    
  }
});

export const { setName: setCategoryName, addCategory } = categorySlice.actions;
export const { reducer: categoryReducer } = categorySlice;