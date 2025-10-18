import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="bg-black text-white font-bold px-3 py-2 rounded-md">SP</div>
            <span className="text-xl font-semibold text-gray-800">SportsPro</span>
          </div>
          <p className="text-gray-600 mt-4">
            Your one-stop shop for premium sports equipment and gear. Quality products for athletes of all levels.
          </p>
          <div className="flex space-x-4 mt-5">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full text-gray-600 hover:text-black"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full text-gray-600 hover:text-black"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full text-gray-600 hover:text-black"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full text-gray-600 hover:text-black"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-black">About Us</a></li>
            <li><a href="#" className="hover:text-black">Shop</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
            <li><a href="#" className="hover:text-black">FAQs</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-800">Customer Service</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-black">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-black">Track Order</a></li>
            <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-800">Contact Us</h3>
          <ul className="space-y-3 text-gray-600">
            <li>
              <span className="block">123 Sports Avenue, NY 10001, USA</span>
            </li>
            <li>
              <span className="block">+1 (555) 123-4567</span>
            </li>
            <li>
              <span className="block">support@sportspro.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-5">
        <p className="text-center text-gray-500 py-4">
          © 2025 SportsPro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
