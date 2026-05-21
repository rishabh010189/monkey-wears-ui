import { useState } from 'react';
import Popup from '../popup/Popup';
import ImageGallery from '../image-gallery/ImageGallery';
import type { IVariant } from '../../interfaces/products.interface';
import type { IQuickViewOverlay } from '../../interfaces/quickViewOverlay.interface';

const QuickViewOverlay = ({ open, product, setOpen }: IQuickViewOverlay) => {
  const [selectedVariant, setSelectedVariant] = useState<IVariant>(product.variants[0]);
  const variant: IVariant = selectedVariant;

  return (
    <Popup isOpen={open} onClose={() => setOpen(false)} title="Quick View">
      <div
        className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        {/* LEFT: Image Gallery */}
        <ImageGallery product={product} selectedVariant={variant} />

        {/* RIGHT: Product Info */}
        <div className="space-y-6">
          {/* Title */}
          <h1 className="text-2xl font-semibold">
            {product.name} : {variant.modelName}
          </h1>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">₹{variant.price}</span>
            {variant.originalPrice && (
              <span className="line-through text-gray-400">₹{variant.originalPrice}</span>
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
                  key={v.vid}
                  onClick={() => setSelectedVariant(v)}
                  className={`px-4 py-2 border rounded-lg ${
                    variant === v ? 'bg-black text-white' : 'bg-white'
                  }`}
                ></button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="flex">
            <p className="font-medium mb-2">Size : {variant.size}</p>
          </div>

          {/* Extra Info */}
          <div className="text-sm text-gray-500 space-y-1">
            <p>✔ 30-day return policy</p>
            <p>✔ Cash on delivery available</p>
            <p>✔ Free shipping on orders above ₹999</p>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default QuickViewOverlay;
