import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductDetailsByIdQuery } from '../../features/api/apiSlice';
import ImageGallery from '../../components/image-gallery/ImageGallery';
import type { IVariant } from '../../interfaces/products.interface';
import ProductDetailsSkeleton from '../../components/product-details-skeleton/ProductDetailsSkeleton';

const ProductDetails = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsByIdQuery(id!, {
    skip: !id,
  });

  const [selectedVariant, setSelectedVariant] = useState<IVariant>();

  const effectiveVariant = selectedVariant ?? product?.variants?.[0];

  if (isLoading) return <ProductDetailsSkeleton />;
  if (error) return <p>Error occurred</p>;

  return (
    product &&
    effectiveVariant && (
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: Image Gallery */}
        <ImageGallery product={product} selectedVariant={effectiveVariant} />

        {/* RIGHT: Product Info */}
        <div className="space-y-6">
          {/* Title */}
          <h1 className="text-2xl font-semibold">
            {product.name} : {effectiveVariant.modelName}
          </h1>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">₹{effectiveVariant.price}</span>
            {effectiveVariant.originalPrice && (
              <span className="line-through text-gray-400">₹{effectiveVariant.originalPrice}</span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm">{product.description}</p>

          {/* Variant Selector */}
          <div>
            <p className="font-medium mb-2">Select Variant</p>
            <div className="flex gap-2">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariant(v)}
                  className={`px-4 py-2 border rounded-lg ${
                    effectiveVariant === v ? 'bg-black text-white' : 'bg-white'
                  }`}
                ></button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50"
            onClick={() => console.log('Add to cart', product, effectiveVariant)}
          >
            Add to Cart
          </button>

          {/* Extra Info */}
          <div className="text-sm text-gray-500 space-y-1">
            <p>✔ 30-day return policy</p>
            <p>✔ Cash on delivery available</p>
            <p>✔ Free shipping on orders above ₹999</p>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
