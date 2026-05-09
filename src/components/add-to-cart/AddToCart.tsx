import useAddToCart from '../../hooks/add-to-cart/useAddToCart';
import type { IProduct, IVariant } from '../../interfaces/products.interface';

const AddToCart = ({
  effectiveVariant,
  product,
}: {
  effectiveVariant: IVariant;
  product: IProduct;
}) => {
  const { addToCartBtnHandler, buttonColors, btnColor, qtyAdded } = useAddToCart({
    effectiveVariant,
    product,
  });

  return (
    <button
      className={`w-full text-white py-3 rounded-lg disabled:opacity-50 ${buttonColors[btnColor]} flex items-center justify-center`}
      disabled={qtyAdded >= effectiveVariant.stock}
      onClick={addToCartBtnHandler}
    >
      {qtyAdded > 0 && (
        <span className="bg-black text-xs text-white rounded-full mr-2 w-6 h-6 inline-flex justify-center items-center">
          {qtyAdded}
        </span>
      )}
      Add to Cart
    </button>
  );
};

export default AddToCart;
