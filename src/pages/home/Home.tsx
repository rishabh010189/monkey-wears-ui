import Banner from '../../components/banner-carousel/BannerCarousel';
import ProductCard from '../../components/product-card/ProductCard';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import logo from '../../assets/img/logo-small.png';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        {/* <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div> */}
        <img src={logo} className="w-24 animate-spin" />
      </div>
    );
  if (error) return <p>Error occurred</p>;
  console.log(data);
  return (
    <>
      {/* Banner Images */}
      <Banner />

      {/* Categories */}
      {/* <Link
                    className="font-bold text-xl p-4 border-b-4 border-transparent hover:border-red-500 cursor-pointer"
                    to="/products?category=men"
                  >
                    MEN
                  </Link> */}
      <section className="lg:max-w-7xl mx-auto px-4 py-10 lg:hidden">
        <h3 className="text-2xl font-bold mb-6">Shop by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Men', 'Women'].map((cat) => (
            <Link
              key={cat}
              className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition"
              to={`/products?category=${cat.toLowerCase()}`}
            >
              <h4 className="font-semibold">{cat}</h4>
            </Link>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-full md:max-w-7xl mx-auto px-4 py-10">
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
