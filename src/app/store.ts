import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../features/api/baseApi';
import cartSlice from '../features/cart/cartSlice';
import { saveState } from '../features/storage';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [cartSlice.reducerPath]: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

store.subscribe(() => {
  const state = store.getState();
  saveState('cart', state.cart);
});

// types (important for TS)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
