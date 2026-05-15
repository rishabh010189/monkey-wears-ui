import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL, // replace with your API Gateway later
    prepareHeaders: (headers) => {
      // attach token if needed
      // const token = (getState() as RootState).auth.token;

      // if (token) {
      //   headers.set('authorization', `Bearer ${token}`);
      // }

      return headers;
    },
  }),
  tagTypes: ['products'],
  endpoints: () => ({}),
});
