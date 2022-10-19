/*
 * @Description:
 * @Author: sunsh
 * @Date: 2022-10-15 13:44:14
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-19 10:51:22
 */
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { articleReducer } from "./slice/articleSlice";
import { categoryReducer } from "./slice/categorySlice";
// RTKQ
import articleApi from "./api/articleApi";
import categoryApi from "./api/cateoryApi";
import authApi from "./api/authApi";
import authSlice from "./slice/authSlice";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    article: articleReducer,
    category: categoryReducer,
    auth: authSlice.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [articleApi.reducerPath]: articleApi.reducer,
    [authApi.reducerPath]: authApi.reducer

  },
  // TODO 看文档怎么理解middleware。 这里是为了使用RTKQ的缓存
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(categoryApi.middleware, authApi.middleware)
  }
  // preloadedState: null
});

// TODO 功能是否是store 中state更新后，通知组件重新渲染
setupListeners(store.dispatch);

export default store;

// 使用store步骤：
/* 
  1. 引入Provider 组件通过react binding: react-redux, 并通过属性store进行注入
  2. 在组件中通过useSelector(state => state) 获取store里面的state
  3. 在组件中通过dispatch(actionCreator(payload)) 触发state改变
*/