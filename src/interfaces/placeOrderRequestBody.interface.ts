import type { ICartItem } from './cartItem.interface';
import type { ICheckoutForm } from './checkoutForm.interface';

export interface IPlaceOrderRequestBody extends ICheckoutForm {
  cartItems: ICartItem[];
  discount: number;
  shipping: number;
  subtotal: number;
  total: number;
}

export interface IPlaceOrderResponseBody extends ICheckoutForm {
  orderId: string;
  createdAt: string;
  status: string;
}
