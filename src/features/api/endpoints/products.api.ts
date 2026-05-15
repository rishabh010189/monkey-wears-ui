import type { IProduct } from '../../../interfaces/products.interface';
import { baseApi } from '../baseApi';

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => '/products',
      providesTags: ['products'],
    }),
    getProductsByCategory: builder.query<IProduct[], string>({
      query: (category) => {
        return {
          url: `/products?category=${category}`,
          method: 'GET',
        };
      },
      providesTags: (_result, _error, id) => [{ type: 'products', id }],
    }),
    getProductDetailsById: builder.query<IProduct, string>({
      query: (productId) => {
        return {
          url: `/products/${productId}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByCategoryQuery, useGetProductDetailsByIdQuery } =
  productsApi;
