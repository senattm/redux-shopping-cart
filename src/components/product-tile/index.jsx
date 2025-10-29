import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="group relative border border-gray-200 hover:border-gray-300 p-5 h-[360px] w-full max-w-[360px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
      {isInCart && (
        <div className="absolute top-4 left-4 bg-green-100 text-green-700 border border-green-200 px-3 py-1 rounded-lg font-medium text-xs z-10">
          ✓ IN CART
        </div>
      )}

      <div className="relative h-[160px] mb-5 rounded-lg overflow-hidden bg-white p-4">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 ease-out"
        />
      </div>

      <div className="mb-2 h-[50px] flex items-center justify-center">
        <h1 className="text-gray-800 font-semibold text-base leading-tight text-center line-clamp-2 group-hover:text-gray-900 transition-colors duration-300">
          {product?.title}
        </h1>
      </div>
      <div className="mb-8 text-xl font-semibold text-gray-700 text-center">
        ${product?.price ?? "—"}
      </div>
      <div className="absolute bottom-5 left-5 right-5">
        <button
          onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
          className={`w-full py-3 px-5 rounded-lg font-medium text-sm transition-all duration-200 ${
            isInCart
              ? "bg-red-900 hover:bg-red-800 text-white shadow-sm"
              : "bg-red-800 hover:bg-red-900 text-white shadow-sm"
          }`}
        >
          {isInCart ? "Remove from cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
