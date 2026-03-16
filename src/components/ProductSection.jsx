import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShoppingCart, Save } from "lucide-react";

/* PRODUCT IMAGES */
import item1 from "../assets/items/Shecare.png";
import item2 from "../assets/items/DiabicCare.png";
import item3 from "../assets/items/Cholesterol.png";
import item4 from "../assets/items/Shapefix.png";

/* CATEGORY IMAGES */
import diabetic from "../assets/category/Diabetic_Wellness.png";
import digestive from "../assets/category/Digestive_Wellness.png";
import pain from "../assets/category/Pain_reliever.png";
import women from "../assets/category/women_wellness.png";
import skin from "../assets/category/Skin_Wellness.png";
import cardiac from "../assets/category/Cardiac_Wellness.png";
import cover1 from "../assets/items/cover1.png";
import cover2 from "../assets/items/cover2.png";
import cover3 from "../assets/items/cover3.png";
import cover4 from "../assets/items/cover4.png";
import CategoryCircleUI from "./CategoryCircleUI";

/* ---------------- CATEGORIES ---------------- */

const categories = [
  {
    id: 1,
    name: "Best Solutions",
   
  },
  {
    id: 2,
    name: "Diabetic Wellness",
    image: diabetic,
  },
  {
    id: 3,
    name: "Digestive Wellness",
    image: digestive,
  },
  {
    id: 4,
    name: "Pain Reliever",
    image: pain,
  },
  {
    id: 5,
    name: "Women's Wellness",
    image: women,
  },
  {
    id: 6,
    name: "Skin Wellness",
    image: skin,
  },
  {
    id: 7,
    name: "Cardiac Wellness",
    image: cardiac,
  },
];

/* ---------------- PRODUCTS ---------------- */

const products = [
  {
    id: 1,
    name: "She Care Juice",
    mainImg: item1,
    hoverImg: cover1,
    rating: 5,
    reviews: 8905,
    price: 541,
    oldPrice: 543,
    save: 2,
  },
  {
    id: 2,
    name: "Diabic Care Juice",
    mainImg: item2,
    hoverImg: cover2,
    rating: 5,
    reviews: 8331,
    price: 457,
    oldPrice: 459,
    save: 2,
  },
  {
    id: 3,
    name: "Cholesterol Care Juice",
    mainImg: item3,
    hoverImg: cover3,
    rating: 5,
    reviews: 6397,
    price: 560,
    oldPrice: 562,
    save: 2,
  },
  {
    id: 4,
    name: "Shapefix Juice",
    mainImg: item4,
    hoverImg: cover4,
    rating: 5,
    reviews: 5750,
    price: 476,
    oldPrice: 478,
    save: 2,
  },
];


const ProductCard = ({ product }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-100 group"
    >
      {/* SAVE BADGE - Positioned Top Left */}
      <div className="absolute top-3 left-3 z-10 bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 border border-green-100">
        <Save size={10} />
        Save ₹{product.save}
      </div>

      {/* IMAGE SECTION - Pure White Background */}
      <div className="h-64 flex items-center justify-center p-8 bg-white relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={hover ? "hover" : "main"}
            src={hover && product.hoverImg ? product.hoverImg : product.mainImg}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="max-h-full max-w-full object-contain"
          />
        </AnimatePresence>
      </div>

      {/* CONTENT SECTION - Subtle Gray Background */}
      <div className="p-5 text-center bg-[#F8F9FA] flex-grow border-t border-gray-50">
        <h3 className="font-medium text-[17px] text-gray-800 mb-1 group-hover:text-green-700 transition-colors">
          {product.name}
        </h3>

        {/* RATING */}
        <div className="flex justify-center items-center gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={13} 
              className={i < product.rating ? "fill-green-500 text-green-500" : "text-gray-300"} 
            />
          ))}
          <span className="text-[11px] text-gray-400 ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* PRICE */}
        <div className="flex justify-center items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900">
            From ₹{product.price}
          </span>
          <span className="text-xs text-gray-400 line-through">
            ₹{product.oldPrice}
          </span>
        </div>
      </div>

      {/* ADD TO CART BUTTON - Slides Up on Hover */}
      <AnimatePresence>
        {hover && (
          <motion.button
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            className="absolute bottom-0 left-0 right-0 bg-green-600 hover:bg-green-700 text-white py-3.5 font-bold text-sm flex items-center justify-center gap-2 z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]"
          >
            <ShoppingCart size={16} />
            ADD TO CART
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ProductSelectionUI() {
  const [activeTab, setActiveTab] = useState("Best Solutions");

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION TITLE */}
        <h2 className="text-[32px] font-semibold text-center text-gray-800 mb-10">
          Select Your Concern
        </h2>

        {/* CATEGORY TABS - Pill Style */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.name)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-medium transition-all border
              ${
                activeTab === cat.name
                  ? "bg-[#D4E9D6] text-[#2E7D32] border-[#C8E6C9]"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
              }`}
            >
              {cat.image && (
                <img
                  src={cat.image}
                  alt=""
                  className="w-5 h-5 rounded-full object-cover grayscale-[0.5]"
                />
              )}
              {cat.name}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <CategoryCircleUI />
      </div>
    </div>
  );
}