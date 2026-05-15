import { Link } from 'react-router-dom';
import type { IProduct } from '../../../interfaces/products.interface';
const BASE_URL = 'https://d2n41bjlvqia14.cloudfront.net'; // CloudFront/S3 base

const SearchSuggestions = ({ searchResults }: { searchResults: IProduct[] }) => {
  return (
    <div className="absolute w-full border border-gray-500 z-10 rounded-b-2xl bg-white text-center border-t-0 pt-4 invisible peer-focus:visible">
      <div className="max-h-[420px] overflow-y-auto">
        {searchResults &&
          searchResults.map((product) => (
            <Link
              to={`/productDetails/${product.id}`}
              key={product.id}
              className="flex w-full items-center gap-4 border-b border-neutral-100 p-4 text-left transition-all duration-200 hover:bg-pink-50 last:border-b-0"
            >
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-neutral-100">
                <img
                  src={`${BASE_URL}/images/${product.variants[0].images[0]}`}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <h3 className="truncate text-base font-semibold text-neutral-800">
                  {product.name} : {product.variants[0].modelName}
                </h3>

                <p className="mt-1 text-sm text-neutral-500">{product.brand}</p>
              </div>

              <div className="hidden text-neutral-400 md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </Link>
          ))}
      </div>

      <div className="flex items-center justify-between border-t border-neutral-100 bg-neutral-50 px-4 py-3 text-sm text-neutral-500 rounded-b-2xl">
        <span>{searchResults.length} matching products</span>

        <button className="font-medium text-pink-600 transition-colors hover:text-pink-700">
          View all results
        </button>
      </div>
    </div>
  );
};

export default SearchSuggestions;
