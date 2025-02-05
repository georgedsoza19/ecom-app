import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../interfaces/product";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
    }),
    getCategories: builder.query<string[], void>({
      query: () => "/products/categories",
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = apiSlice;
