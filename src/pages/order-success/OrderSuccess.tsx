import { Link } from 'react-router-dom';
import useOrderSuccess from '../../hooks/order-success/useOrderSuccess';

const OrderSuccess = () => {
  const { response } = useOrderSuccess();

  const { firstName, email, city, state, orderId } = response;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Order Successfully Placed 🎉
          </h1>

          <p className="text-gray-600 text-base md:text-lg max-w-lg">
            Thank you for shopping with Monkey Wears. Your order has been confirmed and will be
            shipped soon.
          </p>
        </div>

        <div className="mt-10 border border-gray-200 rounded-2xl p-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Name</p>
              <p className="font-semibold text-gray-900">{firstName}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <p className="font-semibold text-gray-900">{email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Order ID</p>
              <p className="font-semibold text-gray-900">{orderId}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
              <p className="font-semibold text-gray-900">3-5 Business Days</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Payment Method</p>
              <p className="font-semibold text-gray-900">UPI / Card</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Shipping Address</p>
              <p className="font-semibold text-gray-900">
                {city}, {state}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-semibold text-yellow-900 mb-2">What happens next?</h2>

          <ul className="space-y-2 text-sm text-yellow-800 list-disc list-inside">
            <li>You will receive an order confirmation email shortly.</li>
            <li>Your items will be packed and dispatched within 24 hours.</li>
            <li>Tracking details will be shared once shipped.</li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-black text-white py-3 rounded-2xl font-medium hover:opacity-90 transition">
            <Link to="/">Continue Shopping</Link>
          </button>

          <button className="flex-1 border border-gray-300 text-gray-800 py-3 rounded-2xl font-medium hover:bg-gray-100 transition">
            View Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
