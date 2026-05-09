import { useState } from 'react';
import type { IProduct, IVariant } from '../../interfaces/products.interface';

const useAddToCart = ({
  effectiveVariant,
  product,
}: {
  effectiveVariant: IVariant;
  product: IProduct;
}) => {
  const [selectedQty, setSelectedQty] = useState<number>(1);
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
      qtyOrdered: selectedQty,
      ...effectiveVariant,
      ...productDetails,
    };

    console.log(variantAdded);
  };

  return {
    addToCartBtnHandler,
    buttonColors,
    btnColor,
    setSelectedQty,
  };
};

export default useAddToCart;
