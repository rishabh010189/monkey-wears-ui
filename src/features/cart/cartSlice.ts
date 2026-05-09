import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { loadState } from '../storage';
import type { ICartItem } from '../../interfaces/cartItem.interface';

type CartState = {
  items: ICartItem[];
};

const initialState: CartState = loadState('cart', { items: [] });

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.qtyOrdered += 1;
      } else {
        state.items.push(action.payload);
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice;
