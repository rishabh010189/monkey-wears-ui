import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../features/api/apiSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useGetProductsQuery();
  const product = data && data[0];
  const BASE_URL = 'https://d2n41bjlvqia14.cloudfront.net'; // CloudFront/S3 base

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);

  const [selectedImage, setSelectedImage] = useState(selectedVariant?.images?.[0] || null);
  console.log(id);

  if (!product || !selectedVariant) return;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* LEFT: Image Gallery */}
      <div className="flex gap-4">
        {/* Thumbnails */}
        <div className="flex flex-col gap-3">
          {selectedVariant &&
            selectedVariant.images.map((img, idx) => (
              <img
                key={idx}
                src={`${BASE_URL}/${img}`}
                alt=""
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-20 object-cover rounded cursor-pointer border ${
                  selectedImage === img ? 'border-black' : 'border-gray-200'
                }`}
              />
            ))}
        </div>

        {/* Main Image */}
        <div className="flex-1">
          <img
            src={`${BASE_URL}/${selectedImage}`}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* RIGHT: Product Info */}
      <div className="space-y-6">
        {/* Title */}
        <h1 className="text-2xl font-semibold">{product.name}</h1>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">₹{selectedVariant.price}</span>
          {selectedVariant.originalPrice && (
            <span className="line-through text-gray-400">₹{selectedVariant.originalPrice}</span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm">{product.description}</p>

        {/* Variant Selector */}
        <div>
          <p className="font-medium mb-2">Select Size</p>
          <div className="flex gap-2">
            {product.variants.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVariant(v)}
                className={`px-4 py-2 border rounded-lg ${
                  selectedVariant === v ? 'bg-black text-white' : 'bg-white'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <button
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50"
          onClick={() => console.log('Add to cart', product, selectedVariant)}
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
  );
};

export default ProductDetails;
