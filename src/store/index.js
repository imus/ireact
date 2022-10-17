/*
 * @Description:
 * @Author: sunsh
 * @Date: 2022-10-15 13:44:14
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-17 10:19:52
 */
import { configureStore } from "@reduxjs/toolkit";
import { articleReducer } from "./articleSlice";
import { categoryReducer } from "./categorySlice";

console.log(articleReducer);

const store = configureStore({
  reducer: {
    article: articleReducer,
    category: categoryReducer
  },
  // preloadedState: null
});

export default store;

// 使用store步骤：
/* 
  1. 引入Provider 组件通过react binding: react-redux, 并通过属性store进行注入
  2. 在组件中通过useSelector(state => state) 获取store里面的state
  3. 在组件中通过dispatch(actionCreator(payload)) 触发state改变
*/