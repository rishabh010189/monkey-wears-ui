import { useState, type Dispatch, type SetStateAction } from 'react';
import type { IProductFilters } from '../../interfaces/productFilter.interface';

const ProductFilters = ({
  filters,
  renderOnOverlay = false,
  setFilters,
}: {
  filters: IProductFilters;
  renderOnOverlay?: boolean;
  setFilters: Dispatch<SetStateAction<IProductFilters>>;
}) => {
  const [price, setPrice] = useState([0, 2000]);
  const PRODUCT_CATEGORIES = ['all', 'joggers', 'shirt', 't-shirt'];

  const toggleSize = (size: string) => {
    setFilters((prev) => {
      const sizes = prev.sizes || [];
      return {
        ...prev,
        sizes: sizes.includes(size) ? sizes.filter((s) => s !== size) : [...sizes, size],
      };
    });
  };

  return (
    <div
      className={`w-full md:w-64 space-y-6 pr-4 sticky top-20 h-fit ${!renderOnOverlay && 'border-r border-gray-300'}`}
    >
      {/* Title */}
      {!renderOnOverlay && <h2 className="text-lg font-semibold">Filters</h2>}

      {/* Category */}
      <div>
        <p className="font-medium mb-2">Category</p>
        <div className="space-y-2">
          {PRODUCT_CATEGORIES.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat}
                onChange={() => setFilters((prev) => ({ ...prev, category: cat }))}
              />
              <span className="capitalize">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <p className="font-medium mb-2">Size</p>
        <div className="flex flex-wrap gap-2">
          {['S', 'M', 'L', 'XL'].map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`px-3 py-1 border rounded-md text-sm ${
                filters.sizes?.includes(size) ? 'bg-black text-white' : 'bg-white'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <p className="font-medium mb-2">Price</p>
        <input
          type="range"
          min={0}
          max={5000}
          value={price[1]}
          onChange={(e) => {
            const value = Number(e.target.value);
            setPrice([0, value]);
            setFilters((prev) => ({ ...prev, maxPrice: value }));
          }}
          className="w-full"
        />
        <div className="text-sm text-gray-500 mt-1">₹0 - ₹{price[1]}</div>
      </div>

      {/* Sort */}
      <div>
        <p className="font-medium mb-2">Sort By</p>
        <select
          className="w-full border rounded-md p-2"
          value={filters.sort || ''}
          onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
        >
          <option value="">Default</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
        </select>
      </div>

      {/* Clear */}
      <button
        onClick={() => setFilters({})}
        className="w-full border py-2 rounded-md hover:bg-black hover:text-white transition"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default ProductFilters;
