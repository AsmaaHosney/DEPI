import { useState } from "react";
import { Search, ShoppingCart, Moon } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header
      className={`flex items-center justify-around px-6 py-3 border-b shadow-sm ${
        darkMode ? "bg-gray-900 text-white" : "bg-transparent text-gray-900"
      }`}
    >
      {/* Left Section - Logo */}
      <div className="flex items-center justify-around space-x-2">
        <div className="bg-[#0a0a1a] text-white font-bold text-sm px-3 py-2 rounded-lg">SP</div>
        <span className="text-lg font-semibold">SportsPro</span>
      </div>

      {/* Center Section - Nav Links */}
      <nav className="hidden md:flex items-center justify-around space-x-8 ml-20">
        <a href="#" className="font-medium hover:underline">Home</a>
        <a href="#" className="hover:underline">Products</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>

      {/* Center Section - Search Bar */}
      <div className="flex-1 mx-8 hidden lg:flex items-center justify-around">
        <div
          className={`flex items-center justify-around rounded-md px-3 py-2 w-full max-w-md ${
            darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
          }`}
        >
          <Search className="w-4 h-4 mr-2" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center justify-around space-x-5">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hover:text-blue-500"
        >
          <Moon className="w-5 h-5" />
        </button>
        <button className="font-medium hover:underline">Login</button>
        <button className="hover:text-blue-500">
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
