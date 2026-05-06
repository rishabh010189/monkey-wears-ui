import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
      {/* Big 404 */}
      <h1 className="text-7xl md:text-9xl font-bold text-black tracking-tight">404</h1>

      {/* Monkey + message */}
      <div className="mt-6 space-y-3">
        <div className="text-5xl animate-bounce">🐒</div>

        <h2 className="text-2xl md:text-3xl font-semibold">Oops! You're lost in the wardrobe</h2>

        <p className="text-gray-500 max-w-md mx-auto">
          The page you're looking for doesn’t exist or got styled out of the collection.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Back to Home
        </button>

        <button
          onClick={() => navigate('/products')}
          className="px-6 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition"
        >
          Shop Now
        </button>
      </div>

      {/* Subtle footer line */}
      <p className="mt-10 text-sm text-gray-400">Monkey Wears • Style never gets lost 🖤</p>
    </div>
  );
};

export default PageNotFound;
