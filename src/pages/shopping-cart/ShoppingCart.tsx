import {
  faPlus,
  faMinus,
  faHeart,
  faTrash,
  faCartArrowDown,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BASE_URL = 'https://d2n41bjlvqia14.cloudfront.net'; // CloudFront/S3 base

import useShoppingCart from '../../hooks/shopping-cart/useShoppingCart';
import { Link } from 'react-router-dom';
import type { ICartItem } from '../../interfaces/cartItem.interface';
import emptyWardrobe from '../../../assets/img/empty_wardrobe.png';

const ShoppingCart = () => {
  const { cartItems, discount, qtyChangeHandler, removeProductHandler, shipping, subtotal, total } =
    useShoppingCart();

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-zinc-950 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              <FontAwesomeIcon icon={faCartArrowDown} />
              Shopping Cart
            </div>

            <h1 className="text-3xl font-black tracking-tight md:text-4xl">Your Drip Collection</h1>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
              Review your streetwear picks before heading to checkout. Limited drops don’t stay in
              stock for long.
            </p>
          </div>

          <div className="flex gap-3">
            <Link to="/">
              <button className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold transition hover:border-zinc-500 hover:bg-zinc-950 hover:text-white">
                Continue Shopping
              </button>
            </Link>
            <Link to="/checkout">
              <button className="rounded-2xl bg-zinc-800 text-white px-5 py-3 text-sm text-black transition hover:scale-[1.02] hover:bg-zinc-950">
                Checkout Now
              </button>
            </Link>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.6fr]">
          {cartItems && cartItems.length ? (
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-2xl bg-white border border-zinc-800 backdrop-blur"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative overflow-hidden md:w-50">
                      <img
                        src={`${BASE_URL}/images/${item.images[0]}`}
                        alt={item.name}
                        className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 md:h-full"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-3">
                      <div>
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                              {item.category}
                            </p>

                            <h2 className="mt-2 text-xl font-black leading-tight">
                              {item.name} | {item.modelName}
                            </h2>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Tag label={`Size ${item.size}`} />
                          <Tag label={item.color} />
                          <Tag label={item.productCategory} />
                        </div>

                        <div className="mt-6 flex items-end gap-3">
                          <span className="text-3xl font-black text-pink-500">₹{item.price}</span>

                          <span className="pb-1 text-sm text-zinc-500 line-through">
                            ₹{item.originalPrice}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 border-t border-zinc-800 pt-4 md:flex-row md:items-center md:justify-between">
                        <QuantityConsole item={item} qtyChangeHandler={qtyChangeHandler} />

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => removeProductHandler(item.id)}
                            className="flex items-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500/20"
                          >
                            <FontAwesomeIcon icon={faTrash} className="mr-1" />
                            Remove
                          </button>

                          <button className="rounded-2xl border border-zinc-700 px-4 py-2 text-sm font-semibold transition hover:border-zinc-500 hover:bg-zinc-950 hover:text-white">
                            <FontAwesomeIcon icon={faHeart} className="mr-1" />
                            Save For Later
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full mt-24 justify-items-center items-center flex-column">
              <img alt="empty wardrobe image" src={emptyWardrobe} className="w-2xs" />
              <div>Your cart looks empty</div>
            </div>
          )}

          <aside className="h-fit rounded-2xl border border-zinc-800 bg-white p-6 backdrop-blur lg:sticky lg:top-6">
            <div className="mb-6">
              <div className="inline-flex items-center rounded-full bg-zinc-950 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Cart Summary
              </div>

              <h2 className="mt-4 text-3xl font-black">Order Details</h2>

              <p className="mt-2 text-sm text-zinc-400">
                You’re just one step away from your next fit.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
              <SummaryRow label="Subtotal" value={`₹${subtotal}`} />

              <SummaryRow label="Shipping" value={`₹${shipping}`} />

              <SummaryRow label="Discount" value={`- ₹${discount}`} />

              <div className="border-t border-zinc-800 pt-4">
                <div className="flex items-center justify-between text-xl text-white font-black">
                  <span>Total</span>
                  <span className="text-pink-500">₹{total}</span>
                </div>
              </div>
            </div>
            <Link to="/checkout">
              <button className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-pink-400 text-base font-black text-black  hover:bg-pink-300">
                Proceed To Checkout
                <FontAwesomeIcon icon={faRightFromBracket} />
              </button>
            </Link>

            <div className="mt-6 rounded-2xl border border-pink-400/10 bg-pink-400/5 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-xl">🚚</div>

                <div>
                  <h3 className="font-semibold text-zinc-800">Free shipping unlocked</h3>

                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                    Your order qualifies for free shipping on future purchases.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-zinc-500">
              <span>🔒</span>
              <span>Safe & secure checkout guaranteed</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const QuantityConsole = ({
  item,
  qtyChangeHandler,
}: {
  item: ICartItem;
  qtyChangeHandler: (item: ICartItem, qty: number) => void;
}) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-zinc-400">Quantity</span>

      <div className="flex items-center rounded-2xl border border-zinc-700 p-1">
        <button
          className="cursor-pointer rounded-xl p-2 transition hover:border-zinc-500 hover:bg-zinc-950 hover:text-white disabled:pointer-events-none
    disabled:opacity-50"
          disabled={item.qtyOrdered == 1}
          onClick={() => qtyChangeHandler(item, -1)}
        >
          <FontAwesomeIcon icon={faMinus} className=" h-2 w-2" />
        </button>

        <span className="min-w-10 text-center text-sm font-bold">{item.qtyOrdered}</span>

        <button
          className="cursor-pointer rounded-xl p-2 transition hover:border-zinc-500 hover:bg-zinc-950 hover:text-white disabled:pointer-events-none
    disabled:opacity-50"
          disabled={item.qtyOrdered == item.stock}
          onClick={() => qtyChangeHandler(item, 1)}
        >
          <FontAwesomeIcon icon={faPlus} className=" h-2 w-2" />
        </button>
      </div>
    </div>
  );
};

const Tag = ({ label }: { label: string }) => {
  return (
    <span className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs text-zinc-300">
      {label}
    </span>
  );
};

const SummaryRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-white">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
};

export default ShoppingCart;
