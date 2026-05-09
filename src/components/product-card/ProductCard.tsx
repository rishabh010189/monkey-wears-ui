import { Link } from 'react-router-dom';
import type { IProduct } from '../../interfaces/products.interface';
import useProductCard from '../../hooks/product-card/useProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars, faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Popup from '../popup/Popup';
import React, { useState } from 'react';
import QuickViewOverlay from '../quick-view-overlay/QuickViewOverlay';

const ProductCard = ({ product }: { product: IProduct }) => {
  const { BASE_URL, item, link, posterImg } = useProductCard({ product });
  const [open, setOpen] = useState(false);

  const quickViewHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  };

  return (
    <>
      <Link to={link}>
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
          {/* Image */}
          <div className="relative w-full h-64 overflow-hidden">
            <img
              src={`${BASE_URL}/images/${posterImg}`}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Badge */}
            {product.isTrending && (
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md">
                Trending
              </span>
            )}

            {/* Wishlist (optional) */}
            <button
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation();
                console.log('wishlist clicked');
              }}
            >
              <div className="group/heart relative cursor-pointer">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-lg text-red-500 transition-opacity duration-200 group-hover/heart:opacity-0"
                />
                <FontAwesomeIcon
                  icon={faHeartFilled}
                  className="text-red-500 absolute left-0 top-0 text-lg opacity-0 transition-opacity duration-200 group-hover/heart:opacity-100"
                />
              </div>
            </button>
          </div>

          {/* Info */}
          <div className="p-4 space-y-2">
            <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
              {product.name} - {item.modelName}
            </h3>

            {/* Category / Tags */}
            <p className="text-xs text-gray-500 capitalize">
              {product.productCategory} • {product.gender}
            </p>

            {/* Price */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">₹{item.price}</span>

              {item.originalPrice && item.originalPrice != item.price && (
                <span className="text-sm text-gray-400 line-through">₹{item.originalPrice}</span>
              )}
            </div>

            {/* Add to Cart */}
            <div className="flex gap-2 items-center">
              <button
                className="mt-2 bg-white text-black text-sm py-2 rounded-lg hover:bg-gray-800 hover:text-white transition w-[40px] border"
                onClick={quickViewHandler}
              >
                <FontAwesomeIcon icon={faBinoculars} className="text-lg cursor-pointer" />
              </button>
              <button className="w-full mt-2 bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
      <Popup isOpen={open} onClose={() => setOpen(false)} title="Quick View">
        <QuickViewOverlay product={product} open={open} setOpen={setOpen} />
      </Popup>
    </>
  );
};

export default ProductCard;
