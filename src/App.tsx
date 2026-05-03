import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './pages/home/Home';
import ProductListing from './pages/productListing/ProductListing';
import ProductDetails from './pages/product-details/ProductDetails';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Header section */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/pd/:id" element={<ProductDetails />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
