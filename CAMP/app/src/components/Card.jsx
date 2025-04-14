import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground, faFire, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card = ({ id, image, title, price }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate(`/camp/${id}`)} // Navigate to Camp Details page
    >
      {/* Image */}
      <img src={image} alt={title} className="w-full h-52 object-cover" />

      {/* Content */}
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-lg text-teal-500 font-semibold mt-2">₹{price} / night</p>

        {/* Camp Offerings */}
        <div className="flex justify-center gap-4 text-gray-600 text-lg mt-3">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faCampground} size="lg" />
            <p className="text-xs mt-1">Camping</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faFire} size="lg" />
            <p className="text-xs mt-1">Bonfire</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faUtensils} size="lg" />
            <p className="text-xs mt-1">Food</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
