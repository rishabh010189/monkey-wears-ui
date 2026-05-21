import type {
  IPlaceOrderRequestBody,
  IPlaceOrderResponseBody,
} from '../../../interfaces/placeOrderRequestBody.interface';
import { baseApi } from '../baseApi';

export const searchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation<IPlaceOrderResponseBody, IPlaceOrderRequestBody>({
      query: (body) => {
        return {
          url: `/placeOrder`,
          method: 'POST',
          body: JSON.stringify(body),
        };
      },
    }),
  }),
});

export const { usePlaceOrderMutation } = searchApi;
