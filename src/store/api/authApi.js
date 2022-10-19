/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-10-18 17:23:38
 * @LastEditors: sunsh
 * @LastEditTime: 2022-10-18 18:02:00
 */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseUrl } from "./config";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    register: builder.mutation({
      query(info) {
        return {
          url: '/auth/local/register',
          method: 'post',
          body: info
        }
      }
    }),
    login: builder.mutation({
      query(identifier) {
        return {
          url: '/auth/local',
          method: 'post',
          body: identifier,
          // headers
        }
      },
      
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
export default authApi;