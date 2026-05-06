import { useState } from 'react';
import type { IProduct, IVariant } from '../../interfaces/products.interface';

const ImageGallery = ({
  product,
  selectedVariant,
}: {
  product: IProduct;
  selectedVariant: IVariant;
}) => {
  const BASE_URL = 'https://d2n41bjlvqia14.cloudfront.net'; // CloudFront/S3 base
  const [selectedImage, setSelectedImage] = useState('');
  const mainImage = selectedImage || selectedVariant.images[0];

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-3">
        {selectedVariant &&
          selectedVariant.images.map((img, idx) => (
            <img
              key={idx}
              src={`${BASE_URL}/images/${img}`}
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
          src={`${BASE_URL}/images/${mainImage}`}
          alt={product.name}
          className="w-full  object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
