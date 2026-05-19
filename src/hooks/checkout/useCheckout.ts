import { useState } from 'react';
import useShoppingCart from '../shopping-cart/useShoppingCart';

const useCheckout = () => {
  const { cartItems, discount, qtyChangeHandler, removeProductHandler, shipping, subtotal, total } =
    useShoppingCart();
  const [selectedPayment, setSelectedPayment] = useState(0);

  return {
    cartItems,
    discount,
    qtyChangeHandler,
    removeProductHandler,
    selectedPayment,
    setSelectedPayment,
    shipping,
    subtotal,
    total,
  };
};

export default useCheckout;
