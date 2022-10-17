/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-17 09:56:17
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-17 10:15:45
 */

import { createSlice } from "@reduxjs/toolkit";

// 创建reducer 切片
const articleSlice = createSlice({
  name: 'article',
  initialState: {
    title: '标题',
    content: '内容',
    category: '',
    tag: ''
  },
  reducers: {
    editName(state, action) {
      state.title = action.payload;
      // return state; // redux 内部https://cn.redux.js.org/tutorials/fundamentals/part-4-store#redux-store-%E5%86%85%E9%83%A8
    },
    // states是immer 代理对象，可直接修改
    addArticle(state, action) {

      return state;
    }
  }

});

export const { editName, addArticle } = articleSlice.actions; // action creators函数
export const { reducer: articleReducer } = articleSlice; // reducer函数会把上面reducers进行拼接成switch case之类的情形：article/editName: (state, action) => {}