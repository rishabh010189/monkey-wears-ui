import useAddToCart from '../../hooks/add-to-cart/useAddToCart';
import type { IProduct, IVariant } from '../../interfaces/products.interface';

const AddToCart = ({
  effectiveVariant,
  product,
}: {
  effectiveVariant: IVariant;
  product: IProduct;
}) => {
  const { addToCartBtnHandler, buttonColors, btnColor, setSelectedQty } = useAddToCart({
    effectiveVariant,
    product,
  });

  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-2 border-r border-gray-300 pr-4 w-36">
        <p className="font-medium mb-2">Qty</p>
        <select
          className="w-full border rounded-md p-2"
          onChange={(e) => setSelectedQty(+e.target.value)}
        >
          {[...Array(9)].map((_, i: number) => (
            <option disabled={i + 1 > effectiveVariant.stock} key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <button
        className={`w-full text-white py-3 rounded-lg disabled:opacity-50 ${buttonColors[btnColor]}`}
        onClick={addToCartBtnHandler}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
