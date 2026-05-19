import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './pages/home/Home';
import ProductListing from './pages/productListing/ProductListing';
import ProductDetails from './pages/product-details/ProductDetails';
import PageNotFound from './pages/page-not-found/PageNotFound';
import Checkout from './pages/checkout/Checkout';
import ShoppingCart from './pages/shopping-cart/ShoppingCart';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Header section */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/search/" element={<ProductListing />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* 404 fallback */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
