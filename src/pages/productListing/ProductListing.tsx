import BannerCarousel from '../../components/banner-carousel/BannerCarousel';
import ProductCard from '../../components/product-card/ProductCard';
import ProductFilters from '../../components/product-filters/ProductFilters';
import useProductListing from '../../hooks/product-listing/useProductListing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Popup from '../../components/popup/Popup';
import { useState } from 'react';
import emptyWardrobe from '../../../assets/img/empty_wardrobe.png';

const ProductListing = () => {
  const { category, data, error, filters, isLoading, setFilters } = useProductListing();
  const [open, setOpen] = useState(false);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  return (
    <>
      <BannerCarousel category={category} />
      <div className="flex m-10 gap-4">
        <div className="w-3xs border-t border-gray-300 hidden lg:block p-4">
          <ProductFilters filters={filters} setFilters={setFilters} />
        </div>
        <div className="flex-grow border-t border-gray-300">
          {/* Products */}
          <section className="max-w-7xl mx-auto px-4 py-4 lg:py-10">
            <h3 className="text-2xl font-bold mb-6 flex justify-between items-center">
              <div>Trending Products</div>
              {category && (
                <>
                  <span className="lg:hidden">
                    <FontAwesomeIcon
                      icon={faFilter}
                      className="text-lg cursor-pointer px-2"
                      onClick={() => setOpen(true)}
                    />
                  </span>
                  <Popup isOpen={open} onClose={() => setOpen(false)} title="Filter">
                    <ProductFilters
                      filters={filters}
                      renderOnOverlay={true}
                      setFilters={setFilters}
                    />
                  </Popup>
                </>
              )}
            </h3>
            {data && data.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data &&
                  data.length &&
                  data.map((item) => <ProductCard key={item.id} product={item} />)}
              </div>
            ) : (
              <div className="w-full mt-24 justify-items-center items-center flex-column">
                <img src={emptyWardrobe} className="w-2xs" />
                <div>Oops! seems like we ran out of style</div>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductListing;
