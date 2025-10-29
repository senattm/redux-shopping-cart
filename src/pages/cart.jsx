import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((total, curr) => total + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        {cart && cart.length ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Shopping Cart
              </h1>
              <p className="text-gray-600 text-lg">
                Review your selected items and proceed to checkout
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cart.map((cartItem, index) => (
                    <div
                      key={cartItem.id}
                      className="fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CartTile key={cartItem.id} cartItem={cartItem} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                      Cart Summary
                    </h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">
                          Total Items:
                        </span>
                        <span className="text-gray-900 font-semibold">
                          {cart.length}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">
                          Subtotal:
                        </span>
                        <span className="text-gray-900 font-semibold">
                          ${totalCart.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">
                          Shipping:
                        </span>
                        <span className="text-green-600 font-semibold">
                          FREE
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-4 border-t-2 border-gray-200">
                        <span className="text-gray-900 font-bold text-xl">
                          Total:
                        </span>
                        <span className="text-gray-900 font-bold text-2xl">
                          ${totalCart.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <button className="w-full py-4 px-6 bg-red-800 hover:bg-red-900 text-white font-semibold text-lg rounded-lg transition-colors duration-200 mb-4">
                      Proceed to Checkout
                    </button>

                    <Link to="/">
                      <button className="w-full py-3 px-6 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors duration-200">
                        Continue Shopping
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
            <div className="bg-white rounded-xl p-12 shadow-lg border border-gray-200 max-w-md">
              <div className="text-gray-400 text-8xl mb-6">🛒</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Your cart is empty
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                Looks like you haven't added anything to your cart yet. Start
                shopping to fill it up!
              </p>

              <Link to="/">
                <button className="px-8 py-4 bg-red-800 hover:bg-red-900 text-white font-semibold text-lg rounded-lg transition-colors duration-200">
                  🛍️ SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
