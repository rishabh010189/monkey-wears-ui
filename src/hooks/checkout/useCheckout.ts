import { useState } from 'react';
import useShoppingCart from '../shopping-cart/useShoppingCart';
import { useNavigate } from 'react-router-dom';
import type { ICheckoutForm } from '../../interfaces/checkoutForm.interface';
import { usePlaceOrderMutation } from '../../features/api/endpoints/placeOrder.api';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../features/cart/cartSlice';

const useCheckout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [placeOrderTrigger, { isLoading }] = usePlaceOrderMutation();
  const { cartItems, discount, qtyChangeHandler, removeProductHandler, shipping, subtotal, total } =
    useShoppingCart();
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [flagError, setFlagError] = useState(false);

  const [form, setForm] = useState<ICheckoutForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

    addressLine1: '',

    city: '',
    state: '',
    pincode: '',

    paymentMethod: 'COD',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    let isValid = true;
    if (
      form.firstName.trim() == '' ||
      form.email.trim() == '' ||
      form.phone.trim() == '' ||
      form.addressLine1.trim() == '' ||
      form.city.trim() == '' ||
      form.state.trim() == '' ||
      form.pincode.trim() == '' ||
      cartItems.length == 0
    ) {
      isValid = false;
    }

    return isValid;
  };

  const getPaymentMethod = () => {
    let paymentMethod = 'Cash on Delivery';
    if (selectedPayment == 0) {
      paymentMethod = 'UPI / Wallets';
    } else if (selectedPayment == 1) {
      paymentMethod = 'Credit / Debit cards';
    }

    return paymentMethod;
  };

  const placeOrderHandler = async () => {
    setFlagError(false);
    if (isFormValid()) {
      const requestBody = {
        ...form,
        paymentMethod: getPaymentMethod(),
        cartItems,
        discount,
        shipping,
        subtotal,
        total,
      };

      try {
        const { data } = await placeOrderTrigger(requestBody);
        dispatch(clearCart());
        navigate('/orderSuccess', {
          state: data,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      setFlagError(true);
    }
  };

  return {
    cartItems,
    discount,
    form,
    flagError,
    isLoading,
    placeOrderHandler,
    qtyChangeHandler,
    removeProductHandler,
    selectedPayment,
    handleChange,
    setSelectedPayment,
    shipping,
    subtotal,
    total,
  };
};

export default useCheckout;
