import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import camps from "../components/camp.json";

const CampDetail = () => {
  const { id } = useParams();
  const camp = camps.find((c) => c.id.toString() === id);

  if (!camp) {
    return <p className="text-center text-gray-600 mt-10 text-xl">Camp not found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      {/* Hero Section with Glassmorphism */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg"
      >
        <img src={camp.image} alt={camp.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center backdrop-blur-lg px-4 py-2 rounded-lg">
            {camp.title}
          </h2>
        </div>
      </motion.div>

      {/* Camp Info */}
      <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
        {/* Details */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800">{camp.title}</h3>
          <p className="text-xl text-teal-500 font-semibold mt-2">₹{camp.price} / night</p>
          <p className="mt-4 text-gray-700 leading-relaxed">{camp.description}</p>

          {/* Offerings */}
          <h4 className="mt-6 text-xl font-semibold text-gray-800">What's Included</h4>
          <div className="mt-4 grid grid-cols-2 gap-3 text-gray-700">
            {camp.offerings.map((offer, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 p-3 rounded-lg shadow-md flex items-center"
              >
                <span className="text-lg">{offer}</span>
              </motion.div>
            ))}
          </div>

          {/* Booking Button */}
          <a
            href={camp.whatsappLink}
            className="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition w-full md:w-auto text-center"
          >
            Book Now on WhatsApp
          </a>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {camp.images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative h-44 md:h-56 rounded-lg overflow-hidden shadow-lg"
            >
              <img src={img} alt={`Camp ${index}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CampDetail;
