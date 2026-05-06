const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10 animate-pulse">
      {/* LEFT: Image */}
      <div className="bg-gray-200 rounded-xl h-[600px] w-[500px] shimmer" />

      {/* RIGHT: Content */}
      <div className="space-y-6 shimmer">
        <div className="h-6 bg-gray-200 rounded w-3/4" />
        <div className="h-8 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />

        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-10 w-16 bg-gray-200 rounded" />
          ))}
        </div>

        <div className="h-12 bg-gray-300 rounded-lg w-full" />
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
