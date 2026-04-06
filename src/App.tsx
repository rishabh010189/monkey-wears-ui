import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { useGetProductsQuery } from './features/api/apiSlice';

function App() {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;
  console.log(data);
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Header section */}
      <Header />

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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="h-48 bg-gray-200 rounded-t-xl" />
              <div className="p-4">
                <h4 className="font-semibold">Product {item}</h4>
                <p className="text-gray-500 text-sm">₹999</p>
                <button className="mt-3 w-full bg-black text-white py-2 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-yellow-400 py-10 text-center">
        <h3 className="text-2xl font-bold">Flat 50% Off</h3>
        <p className="mb-4">Limited time offer on selected items</p>
        <button className="bg-black text-white px-6 py-2 rounded-lg">Grab Now</button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
