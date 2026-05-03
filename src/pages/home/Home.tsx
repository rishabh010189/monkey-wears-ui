import Banner from '../../components/banner-carousel/BannerCarousel';
import ProductCard from '../../components/product-card/ProductCard';
import { useGetProductsQuery } from '../../features/api/apiSlice';

const Home = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;
  console.log(data);
  return (
    <>
      {/* Banner Images */}
      <Banner />

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold mb-6">Shop by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Men', 'Women', 'Kids', 'Accessories'].map((cat) => (
            <div
              key={cat}
              className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              <h4 className="font-semibold">{cat}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold mb-6">Trending Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data && data.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-yellow-400 py-10 text-center">
        <h3 className="text-2xl font-bold">Flat 50% Off</h3>
        <p className="mb-4">Limited time offer on selected items</p>
        <button className="bg-black text-white px-6 py-2 rounded-lg">Grab Now</button>
      </section>
    </>
  );
};

export default Home;
