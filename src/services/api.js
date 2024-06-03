import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ limit }) => `products?limit=${limit}`,
    }),
    addToCart: builder.mutation({
      query: (item) => ({
        url: "cart/add",
        method: "POST",
        body: item,
      }),
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddToCartMutation,
  useGetProductByIdQuery,
} = api;
