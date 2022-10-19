/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-17 14:03:47
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-19 11:10:39
 */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from "./config";

// 创建RTKQ 中API对象, RTKQ所有功能都需要使用该对象
const categoryApi = createApi({
  reducerPath: 'categoryApi', // 相当于命名空间名字
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, {getState}) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }), // 使用fetch 还是 axios
  
  // endpoints指定Api中的各种功能
  endpoints(requestBuilder) { // 参数是请求构建器
    return {
      getCategories: requestBuilder.query({
        query() {
          // 指定子路径和baseUrl拼接
          return 'categories';
        },
        transformResponse: response => response, // response.meta里面有分页数据
        keepUnusedDataFor: 60, // 数据失效的时间（秒）

      }),
      getCategoryById: requestBuilder.query({
        query(id) {
          return {
            url: `category/${id}`
          }
        }
      }),
      createCategory: requestBuilder.mutation({
        
      }),
      deleteCategoryById: requestBuilder.mutation({

      }),
      updateCategory: requestBuilder.mutation({

      })

    }
  }

});

// API对象创建后， 对象中会自动根据endpoints返回的方法生成钩子函数，用来向服务器发送请求
// 生成钩子的命名方式：use + MethodName + 查询方式（query, mutation等）：useGetCategoriesQuery
// -------------有点类似slice 中的actions思想----------------------


// ***使用方式见store/index.js***, 类似slice

export const { 
  useGetCategoriesQuery,  // 在jsx中使用时要判断返回的isSuccess状态：数据返回成功后才渲染组件没完成不要渲染。
  useCreateCategoryMutation, 
  useDeleteCategoryByIdMutation, 
  useGetCategoryByIdQuery, 
  useUpdateCategoryMutation
} = categoryApi;

export default categoryApi;

/** usexxxQuery 返回值解释：

currentData: Object { data: (4) […], meta: {…} }
data: Object { data: (4) […], meta: {…} }
endpointName: "getCategories"
fulfilledTimeStamp: 1665999229377
isError: false
isFetching: false
isLoading: false
isSuccess: true
isUninitialized: false
originalArgs: "1"
refetch: function refetch()， // 唯一的一个函数，重新请求
requestId: "AukwGplM53w0O8_jHREIe"
startedTimeStamp: 1665999228930
status: "fulfilled" 
*/


