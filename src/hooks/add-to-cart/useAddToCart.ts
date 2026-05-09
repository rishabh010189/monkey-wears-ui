import type { IProduct, IVariant } from '../../interfaces/products.interface';
import { useAppDispatch, useAppSelector } from '../reduxHooks';
import { addToCart } from '../../features/cart/cartSlice';

const useAddToCart = ({
  effectiveVariant,
  product,
}: {
  effectiveVariant: IVariant;
  product: IProduct;
}) => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);
  const qtyAdded =
    items.find((i) => i.id == product.id + '-' + effectiveVariant.vid)?.qtyOrdered || 0;

  const buttonColors = {
    pink: 'bg-pink-500 hover:bg-pink-600',
    blue: 'bg-blue-500 hover:bg-blue-600',
    black: 'bg-black hover:bg-black-600',
  };

  type ButtonColor = keyof typeof buttonColors;

  let btnColor: ButtonColor = 'black';
  if (product?.gender == 'Male') {
    btnColor = 'blue';
  } else if (product?.gender == 'Female') {
    btnColor = 'pink';
  }

  const addToCartBtnHandler = () => {
    const { variants, ...productDetails } = product;
    void variants;
    const variantAdded = {
      ...effectiveVariant,
      ...productDetails,
      qtyOrdered: 1,
      id: product.id + '-' + effectiveVariant.vid,
    };
    dispatch(addToCart(variantAdded));
  };

  return {
    addToCartBtnHandler,
    buttonColors,
    btnColor,
    qtyAdded,
  };
};

export default useAddToCart;
