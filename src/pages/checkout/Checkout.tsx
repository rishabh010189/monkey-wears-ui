import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fastDelivery from '../../../assets/img/fast-delivery-icon.webp';
import useCheckout from '../../hooks/checkout/useCheckout';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import type { ICheckoutForm } from '../../interfaces/checkoutForm.interface';
import logo from '../../assets/img/logo-small.png';
const BASE_URL = 'https://d2n41bjlvqia14.cloudfront.net'; // CloudFront/S3 base

export default function Checkout() {
  const {
    cartItems,
    discount,
    form,
    flagError,
    isLoading,
    placeOrderHandler,
    qtyChangeHandler,
    removeProductHandler,
    selectedPayment,
    handleChange,
    setSelectedPayment,
    shipping,
    subtotal,
    total,
  } = useCheckout();

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight md:text-4xl">Check-it-out</h1>
            <p className="mt-2 text-sm text-zinc-800">Secure your drip before it disappears.</p>
          </div>

          <div className="hidden items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900 px-5 py-2 md:flex">
            <Link to="/cart">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-400 text-sm font-bold text-black">
                  1
                </div>
                <span className="text-sm font-medium text-pink-300">Cart</span>
              </div>
            </Link>
            <div className="h-px w-10 bg-zinc-700" />
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-400 text-sm font-bold text-black">
                2
              </div>
              <span className="text-sm font-medium text-pink-300">Checkout</span>
            </div>
            <div className="h-px w-10 bg-zinc-700" />
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 text-sm font-bold text-zinc-400">
                3
              </div>
              <span className="text-sm text-zinc-500">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.75fr]">
          <div className="space-y-6">
            <section className="rounded-2xl border border-zinc-800 p-6 backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Contact Details</h2>
                  <p className="mt-1 text-sm text-zinc-400">
                    Updates about your order will be sent here.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  id="firstName"
                  label="First Name"
                  form={form}
                  flagError={flagError}
                  handleChange={handleChange}
                  placeholder="Your good name"
                />
                <Input
                  id="lastName"
                  label="Last Name"
                  placeholder="Your good surname"
                  form={form}
                  handleChange={handleChange}
                />
                <div className="md:col-span-2">
                  <Input
                    id="email"
                    label="Email"
                    placeholder="you@example.com"
                    form={form}
                    flagError={flagError}
                    handleChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <Input
                    id="phone"
                    label="Phone Number"
                    placeholder="+91 9876543210"
                    form={form}
                    flagError={flagError}
                    handleChange={handleChange}
                  />
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-zinc-800 p-6 backdrop-blur">
              <div className="mb-6">
                <h2 className="text-xl font-bold">Shipping Address</h2>
                <p className="mt-1 text-sm text-zinc-400">Your drip will be dropped here.</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <Input
                    id="addressLine1"
                    label="Address Line"
                    placeholder="House no, street, locality"
                    form={form}
                    flagError={flagError}
                    handleChange={handleChange}
                  />
                </div>

                <Input
                  id="city"
                  label="City"
                  placeholder="Gurgaon"
                  form={form}
                  flagError={flagError}
                  handleChange={handleChange}
                />
                <Input
                  id="state"
                  label="State"
                  placeholder="Haryana"
                  form={form}
                  flagError={flagError}
                  handleChange={handleChange}
                />
                <Input
                  id="pincode"
                  label="PIN Code"
                  placeholder="122017"
                  form={form}
                  flagError={flagError}
                  handleChange={handleChange}
                />

                <div className="flex justify-end items-center">
                  <img alt="fast delivery icon" src={fastDelivery} className="w-20 h-20" />
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-zinc-800 p-6 backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Payment Method</h2>
                  <p className="mt-1 text-sm text-zinc-400">
                    Choose your preferred payment option.
                  </p>
                </div>

                <div className="rounded-full border border-zinc-700 px-3 py-1 bg-zinc-950 text-xs text-white">
                  100% Secure
                </div>
              </div>

              <div className="space-y-4">
                <PaymentCard
                  id={0}
                  title="UPI / Wallets"
                  selectedPayment={selectedPayment}
                  setSelectedPayment={setSelectedPayment}
                  subtitle="Pay using Google Pay, PhonePe, Paytm"
                />

                <PaymentCard
                  id={1}
                  title="Credit / Debit Card"
                  selectedPayment={selectedPayment}
                  setSelectedPayment={setSelectedPayment}
                  subtitle="Visa, Mastercard, RuPay accepted"
                />

                <PaymentCard
                  id={2}
                  title="Cash on Delivery"
                  selectedPayment={selectedPayment}
                  setSelectedPayment={setSelectedPayment}
                  subtitle="Pay once your order arrives"
                />
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-2xl border border-zinc-800 bg-white p-6 backdrop-blur lg:sticky lg:top-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black">Order Summary</h2>
                <p className="mt-1 text-sm text-zinc-400">{cartItems.length} items in cart</p>
              </div>

              <div className="rounded-full bg-pink-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
                Monkey Verified
              </div>
            </div>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 text-white p-3"
                >
                  <img
                    src={`${BASE_URL}/images/${item.images[0]}`}
                    alt={item.name}
                    className="h-24 w-20 rounded-xl object-cover"
                  />

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold leading-tight">
                          {item.name} | {item.modelName}
                        </h3>
                        <span className="text-sm font-bold text-pink-300">₹{item.price}</span>
                      </div>

                      <div className="mt-2 flex gap-2 text-xs text-zinc-400">
                        <span className="rounded-full bg-zinc-800 px-2 py-1">Size {item.size}</span>
                        <span className="rounded-full bg-zinc-800 px-2 py-1">{item.color}</span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-2 py-1 text-sm">
                        <button
                          className="px-2 text-zinc-400 cursor-pointer"
                          disabled={item.qtyOrdered == 1}
                          onClick={() => qtyChangeHandler(item, -1)}
                        >
                          −
                        </button>
                        <span className="px-2">{item.qtyOrdered}</span>
                        <button
                          className="px-2 text-zinc-400 cursor-pointer"
                          disabled={item.qtyOrdered == item.stock}
                          onClick={() => qtyChangeHandler(item, 1)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="text-xs text-red-400 transition hover:text-red-300 cursor-pointer"
                        onClick={() => removeProductHandler(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-zinc-700 bg-white p-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Apply coupon code"
                  className="h-12 flex-1 rounded-xl border border-zinc-700 px-4 text-sm outline-none transition placeholder:text-zinc-500 focus:border-pink-400 focus:ring-4 focus:ring-pink-400/10"
                />

                <button className="rounded-xl bg-pink-400 px-5 cursor-pointer text-sm font-bold text-black transition hover:bg-pink-300">
                  Apply
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-4 border-t border-zinc-800 pt-6 text-sm">
              <Row label="Subtotal" value={`₹${subtotal}`} />
              <Row label="Shipping" value={`₹${shipping}`} />
              <Row label="Discount" value={`- ₹${discount}`} highlight />

              <div className="flex items-center justify-between border-t border-zinc-800 pt-4 text-lg font-black">
                <span>Total</span>
                <span className="text-pink-500">₹{total}</span>
              </div>
            </div>

            <button
              disabled={isLoading}
              onClick={placeOrderHandler}
              className="mt-6 flex h-14 w-full items-center justify-center cursor-pointer rounded-2xl bg-pink-400 text-base font-black text-black transition hover:bg-pink-300 active:scale-[0.99]"
            >
              Place Order
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-zinc-500">
              <span>🔒</span>
              <span>Encrypted checkout powered by Monkey Wears</span>
            </div>
          </aside>
        </div>
      </div>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <img alt="loading spinner" src={logo} className="w-24 animate-spin" />
        </div>
      )}
    </div>
  );
}

function Input({
  id,
  label,
  form,
  flagError,
  placeholder,
  handleChange,
}: {
  id: keyof ICheckoutForm;
  label: string;
  form: ICheckoutForm;
  flagError?: boolean;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement, Element>) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-zinc-800">{label}</label>

      <input
        type="text"
        name={id}
        placeholder={placeholder}
        className={`h-12 w-full rounded-2xl border px-4 text-sm outline-none 
          transition placeholder:text-zinc-500 focus:border-pink-400 focus:ring-4 focus:ring-pink-400/10
          ${flagError && form[id] == '' ? 'border-red-600 ring-4 ring-red-400/10' : 'border-zinc-700'}`}
        value={form[id]}
        onChange={handleChange}
      />
    </div>
  );
}

function PaymentCard({
  id,
  title,
  selectedPayment,
  setSelectedPayment,
  subtitle,
}: {
  id: number;
  title: string;
  selectedPayment: number;
  setSelectedPayment: React.Dispatch<React.SetStateAction<number>>;
  subtitle: string;
}) {
  return (
    <button
      onClick={() => setSelectedPayment(id)}
      className={`w-full rounded-2xl border p-4 text-left transition ${
        id == selectedPayment
          ? 'border-pink-400 bg-pink-400/10'
          : 'border-zinc-700 bg-white hover:border-zinc-500'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="mt-1 text-sm text-zinc-400">{subtitle}</div>
        </div>

        <div
          className={`mt-1 h-5 w-5 rounded-full border-2 ${
            id == selectedPayment ? 'border-pink-400 bg-pink-400' : 'border-zinc-600'
          }`}
        />
      </div>
    </button>
  );
}

function Row({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-medium text-zinc-800">{label}</span>
      <span className={highlight ? 'font-semibold text-pink-500' : ''}>{value}</span>
    </div>
  );
}
