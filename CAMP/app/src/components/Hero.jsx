import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden mt-1">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      ></div>

      {/* Black Glass Overlay */}
      <div className="absolute inset-0  bg-opacity-50 backdrop-blur-lg"></div>

      {/* Animated Title */}
      <motion.h1
        className="relative text-white text-5xl md:text-8xl font-extrabold text-center leading-tight drop-shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* Floating Effect */}
        <motion.span
          className="block"
          animate={{ y: [0, -10, 0, 10, 0] }} // Smooth floating animation
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          Welcome to
        </motion.span>

        {/* Neon Gradient Effect */}
        <motion.span
          className="block text-transparent bg-gradient-to-r from-teal-300 via-blue-400 to-purple-500 bg-clip-text"
          animate={{ y: [0, 10, 0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          ParaDish 🚀
        </motion.span>

        {/* Subheading with Elegant Effect */}
        <motion.span
          className="block text-lg md:text-2xl font-medium text-gray-200 mt-4"
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          The Best Camp in Rishikesh 🌿🏕️
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default Hero;
