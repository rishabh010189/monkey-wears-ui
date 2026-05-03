import { Link } from 'react-router-dom';
import type { IProduct } from '../../interfaces/products.interface';

const ProductCard = ({ product }: { product: IProduct }) => {
  const BASE_URL = 'https://d2n41bjlvqia14.cloudfront.net'; // CloudFront/S3 base
  const item = product.variants[0];
  const posterImg = item.images[0];
  console.log(posterImg);

  const link = `/pd/${product.id}`;

  return (
    <Link to={link}>
      <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
        {/* Image */}
        <div className="relative w-full h-64 overflow-hidden">
          <img
            src={`${BASE_URL}/${posterImg}`}
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
            ❤️
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
          <button className="w-full mt-2 bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
