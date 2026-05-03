import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IProduct } from '../../interfaces/products.interface';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL, // replace with your API Gateway later
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => '/products',
    }),
    getProductsByCategory: builder.query<IProduct[], string>({
      query: (category) => {
        return {
          url: `/products?category=${category}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByCategoryQuery } = apiSlice;
