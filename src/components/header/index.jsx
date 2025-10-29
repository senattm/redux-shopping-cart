import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky bg-white top-0 z-50 border-b border-gray-200 shadow-sm p-2">
      <nav className="flex items-center justify-between h-16 max-w-7xl mx-auto px-6">
        <Link
          to={"/"}
          className="group flex items-center gap-3 hover:scale-105 transition-transform duration-300"
        >
          <div className="text-4xl">🛍️</div>
          <h1 className="text-red-800 font-extrabold text-2xl sm:text-2xl md:text-3xl cursor-pointer">
            MyCart
          </h1>
        </Link>

        <ul className="flex items-center space-x-6">
          <li>
            <Link
              to={"/"}
              className="px-4 py-2 text-gray-600 font-medium hover:text-gray-900 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/cart"}
              className="px-6 py-2 bg-red-800 hover:bg-red-900 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
