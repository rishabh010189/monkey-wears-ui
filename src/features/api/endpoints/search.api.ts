import type { IProduct } from '../../../interfaces/products.interface';
import { baseApi } from '../baseApi';

export const searchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSearchResults: builder.query<IProduct[], string>({
      query: (keyword) => {
        return {
          url: `/search?q=${keyword}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetSearchResultsQuery, useLazyGetSearchResultsQuery } = searchApi;
