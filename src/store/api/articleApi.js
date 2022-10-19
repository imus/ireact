
/*
* @Description: 
* @Author: sunsh
* @Date: 2022-10-18 10:41:27
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-18 17:27:39
*/

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"; // 有没有dist加载的都是一个目录
import { baseUrl } from "./config";

const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: requestBuilder => {
    return {
      getArticles: requestBuilder.query({
        query() {
          return "articles";
        }
      }),
    };
  }
});

export const { useGetArticlesQuery } = articleApi;


export default articleApi;