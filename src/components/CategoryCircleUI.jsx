import React from 'react';
import { motion } from 'framer-motion';

// Mock data based on your screenshot
const wellnessCategories = [
  { id: 1, name: "Immunity Wellness", image: '../assets/category/Immunity_Wellness.png' },
  { id: 2, name: "Digestive Wellness", image: "../assets/category/Digestive_Wellness.png" },
  { id: 3, name: "Pain Reliever", image: "../assets/category/Pain_reliever.png" },
  { id: 4, name: "Cardiac Wellness", image: "../assets/category/Cardiac_Wellness.png" },
  { id: 5, name: "Skin Wellness", image: "../assets/category/Skin_Wellness.png" },
  { id: 6, name: "Blood Purifier", image: "../assets/category/Blood_Purifier.png" },
];

const CategoryCircleUI = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Container for the circular items */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-8">
          {wellnessCategories.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center cursor-pointer group w-32 md:w-40 lg:w-44"
            >
              {/* Circular Image Container */}
              <div className="relative overflow-hidden rounded-full aspect-square w-full mb-4 transition-all duration-300 ring-0 group-hover:ring-4 group-hover:ring-green-100 shadow-sm border border-gray-50">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Name Text */}
              <p className="text-[#333333] font-medium text-sm md:text-base text-center leading-tight transition-colors group-hover:text-green-700">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CategoryCircleUI;