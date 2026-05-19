import { changeQty, removeFromCart } from '../../features/cart/cartSlice';
import type { ICartItem } from '../../interfaces/cartItem.interface';
import { useAppDispatch, useAppSelector } from '../reduxHooks';

const useShoppingCart = () => {
  const dispatch = useAppDispatch();
  const { items: cartItems } = useAppSelector((state) => state.cart);
  const subtotal = cartItems.reduce((acc, item) => acc + item.originalPrice * item.qtyOrdered, 0);

  const discount = cartItems.reduce(
    (acc, item) => acc + (item.originalPrice - item.price) * item.qtyOrdered,
    0,
  );
  const shipping = cartItems && cartItems.length ? 99 : 0;
  const total = subtotal - discount + shipping;

  const removeProductHandler = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const qtyChangeHandler = (item: ICartItem, qty: number) => {
    dispatch(changeQty({ item, qty }));
  };

  return { cartItems, discount, qtyChangeHandler, removeProductHandler, shipping, subtotal, total };
};

export default useShoppingCart;
