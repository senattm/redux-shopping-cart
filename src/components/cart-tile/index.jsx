import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <div className="group flex items-center justify-between bg-white border border-gray-200 hover:border-gray-300 rounded-lg p-6 my-3 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center gap-6 flex-1">
        <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-50">
          <img
            src={cartItem?.image}
            className="w-full h-full object-cover"
            alt={cartItem?.title}
          />
        </div>

        <div className="flex-1 space-y-2">
          <h1 className="text-lg font-semibold text-gray-800 line-clamp-2 leading-tight">
            {cartItem?.title}
          </h1>

          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-gray-900">
              ${cartItem?.price}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-medium text-sm">Quantity:</span>
            <div className="bg-gray-100 border border-gray-200 rounded px-2 py-1">
              <span className="text-gray-700 font-medium text-sm">1</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-6">
        <button
          onClick={handleRemoveFromCart}
          className="px-5 py-2 bg-red-800 hover:bg-red-900 text-white font-medium text-sm rounded-lg transition-colors duration-200"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
