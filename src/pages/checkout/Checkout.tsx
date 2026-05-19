export default function Checkout() {
  const cartItems = [
    {
      id: 1,
      name: 'Urban Oversized Tee',
      size: 'L',
      color: 'Black',
      qty: 1,
      price: 1299,
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Street Cargo Joggers',
      size: 'M',
      color: 'Olive',
      qty: 1,
      price: 1899,
      image:
        'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=400&auto=format&fit=crop',
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = 99;
  const discount = 250;
  const total = subtotal + shipping - discount;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight md:text-4xl">
              Monkey Wears Checkout
            </h1>
            <p className="mt-2 text-sm text-zinc-400">Secure your drip before it disappears.</p>
          </div>

          <div className="hidden items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/60 px-5 py-2 md:flex">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-black">
              1
            </div>
            <span className="text-sm font-medium text-lime-300">Cart</span>
            <div className="h-px w-10 bg-zinc-700" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-black">
              2
            </div>
            <span className="text-sm font-medium text-lime-300">Checkout</span>
            <div className="h-px w-10 bg-zinc-700" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 text-sm font-bold text-zinc-400">
              3
            </div>
            <span className="text-sm text-zinc-500">Payment</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.75fr]">
          <div className="space-y-6">
            <section className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl shadow-black/20 backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Contact Details</h2>
                  <p className="mt-1 text-sm text-zinc-400">
                    Updates about your order will be sent here.
                  </p>
                </div>
                <div className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lime-300">
                  Fast Delivery
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input label="First Name" placeholder="Rishabh" />
                <Input label="Last Name" placeholder="Srivastava" />
                <div className="md:col-span-2">
                  <Input label="Email" placeholder="you@example.com" />
                </div>
                <div className="md:col-span-2">
                  <Input label="Phone Number" placeholder="+91 98765 43210" />
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl shadow-black/20 backdrop-blur">
              <div className="mb-6">
                <h2 className="text-xl font-bold">Shipping Address</h2>
                <p className="mt-1 text-sm text-zinc-400">
                  We ship across India with live tracking.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <Input label="Address Line" placeholder="House no, street, locality" />
                </div>

                <Input label="City" placeholder="Meerut" />
                <Input label="State" placeholder="Uttar Pradesh" />
                <Input label="PIN Code" placeholder="250001" />

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Delivery Type
                  </label>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="rounded-2xl border border-lime-400 bg-lime-400/10 p-3 text-left transition hover:bg-lime-400/20">
                      <div className="text-sm font-semibold text-lime-300">Standard</div>
                      <div className="mt-1 text-xs text-zinc-400">3-5 business days</div>
                    </button>

                    <button className="rounded-2xl border border-zinc-700 bg-zinc-950 p-3 text-left transition hover:border-zinc-500">
                      <div className="text-sm font-semibold">Express</div>
                      <div className="mt-1 text-xs text-zinc-400">1-2 business days</div>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl shadow-black/20 backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Payment Method</h2>
                  <p className="mt-1 text-sm text-zinc-400">
                    Choose your preferred payment option.
                  </p>
                </div>

                <div className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                  100% Secure
                </div>
              </div>

              <div className="space-y-4">
                <PaymentCard
                  title="UPI / Wallets"
                  subtitle="Pay using Google Pay, PhonePe, Paytm"
                  active
                />

                <PaymentCard
                  title="Credit / Debit Card"
                  subtitle="Visa, Mastercard, RuPay accepted"
                />

                <PaymentCard title="Cash on Delivery" subtitle="Pay once your order arrives" />
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-2xl shadow-black/30 backdrop-blur lg:sticky lg:top-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black">Order Summary</h2>
                <p className="mt-1 text-sm text-zinc-400">{cartItems.length} items in cart</p>
              </div>

              <div className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
                Monkey Verified
              </div>
            </div>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-20 rounded-xl object-cover"
                  />

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold leading-tight">{item.name}</h3>
                        <span className="text-sm font-bold text-lime-300">₹{item.price}</span>
                      </div>

                      <div className="mt-2 flex gap-2 text-xs text-zinc-400">
                        <span className="rounded-full bg-zinc-800 px-2 py-1">Size {item.size}</span>
                        <span className="rounded-full bg-zinc-800 px-2 py-1">{item.color}</span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-2 py-1 text-sm">
                        <button className="px-2 text-zinc-400">−</button>
                        <span className="px-2">{item.qty}</span>
                        <button className="px-2 text-zinc-400">+</button>
                      </div>

                      <button className="text-xs text-red-400 transition hover:text-red-300">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/60 p-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Apply coupon code"
                  className="h-12 flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 text-sm outline-none transition placeholder:text-zinc-500 focus:border-lime-400"
                />

                <button className="rounded-xl bg-lime-400 px-5 text-sm font-bold text-black transition hover:scale-[1.02]">
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
                <span className="text-lime-300">₹{total}</span>
              </div>
            </div>

            <button className="mt-6 flex h-14 w-full items-center justify-center rounded-2xl bg-lime-400 text-base font-black text-black transition hover:scale-[1.01] hover:bg-lime-300 active:scale-[0.99]">
              Place Order
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-zinc-500">
              <span>🔒</span>
              <span>Encrypted checkout powered by Monkey Wears</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-zinc-300">{label}</label>

      <input
        type="text"
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 text-sm outline-none transition placeholder:text-zinc-500 focus:border-lime-400 focus:ring-4 focus:ring-lime-400/10"
      />
    </div>
  );
}

function PaymentCard({ title, subtitle, active = false }) {
  return (
    <button
      className={`w-full rounded-2xl border p-4 text-left transition ${
        active
          ? 'border-lime-400 bg-lime-400/10'
          : 'border-zinc-700 bg-zinc-950 hover:border-zinc-500'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="mt-1 text-sm text-zinc-400">{subtitle}</div>
        </div>

        <div
          className={`mt-1 h-5 w-5 rounded-full border-2 ${
            active ? 'border-lime-400 bg-lime-400' : 'border-zinc-600'
          }`}
        />
      </div>
    </button>
  );
}

function Row({ label, value, highlight = false }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-zinc-400">{label}</span>
      <span className={highlight ? 'font-semibold text-lime-300' : ''}>{value}</span>
    </div>
  );
}
