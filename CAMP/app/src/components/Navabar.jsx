import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="#" className="text-3xl font-semibold tracking-wide">🚀 MyBrand</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="hover:text-gray-300 transition">🏠 Home</a>
          <a href="#" className="hover:text-gray-300 transition">ℹ️ About</a>
          <a href="#" className="hover:text-gray-300 transition">🛠️ Services</a>

          {/* Dropdown */}
          <div 
            className="relative group" 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button className="hover:text-gray-300 flex items-center space-x-1 transition">
              📅 Events ▾
            </button>

            {isOpen && (
              <div className="absolute left-0 top-full mt-2 w-44 bg-white text-black shadow-lg rounded-lg py-2 opacity-100 transition-all duration-300">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">🔜 Upcoming</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">⏳ Past Events</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">🎓 Workshops</a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-gray-300 transition">📞 Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-teal-700 shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 p-6`}
      >
        <button className="absolute top-4 right-4 text-white" onClick={() => setMenuOpen(false)}>
          <FaTimes size={24} />
        </button>

        <div className="flex flex-col mt-10 space-y-6 text-lg">
          <a href="#" className="hover:text-gray-300 transition">🏠 Home</a>
          <a href="#" className="hover:text-gray-300 transition">ℹ️ About</a>
          <a href="#" className="hover:text-gray-300 transition">🛠️ Services</a>
          <a href="#" className="hover:text-gray-300 transition">📞 Contact</a>

          {/* Mobile Dropdown */}
          <div>
            <button
              className="text-lg hover:text-gray-300 flex items-center transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              📅 Events ▾
            </button>
            {isOpen && (
              <div className="absolute left-0 top-full mt-2 bg-white text-black rounded-lg shadow-md">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">🔜 Upcoming</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">⏳ Past Events</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">🎓 Workshops</a>
              </div>
            )}
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="hover:text-blue-400 transition"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-blue-300 transition"><FaTwitter size={24} /></a>
          <a href="#" className="hover:text-pink-400 transition"><FaInstagram size={24} /></a>
        </div>
      </div>
    </nav>
  );
}
