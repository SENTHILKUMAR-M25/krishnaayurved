// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Star, ShoppingCart, Save, ChevronLeft, ChevronRight } from "lucide-react";

// // Product Assets
// import item1 from "../../assets/products/skin_care.png";
// import DiabicJuice from "../../assets/category/Digestive_Wellness.png";
// import CholesterolJuice from "../../assets/category/Pain_reliever.png";
// import ShapefixJuice from "../../assets/category/women_wellness.png";
// import cover1 from "../../assets/items/cover1.png";
// import cover2 from "../../assets/items/cover2.png";
// import cover3 from "../../assets/items/cover3.png";
// import cover4 from "../../assets/items/cover4.png";
// import cover5 from "../../assets/items/cover2.png";
// import cover6 from "../../assets/items/cover3.png";
// import item2 from "../../assets/items/cover2.png";
// import item3 from "../../assets/items/cover3.png";
// import item4 from "../../assets/items/cover4.png";
// import item5 from "../../assets/items/cover1.png";
// import item6 from "../../assets/items/DiabicCare.png";


// // const products = [
// //   { id: 1, name: "She Care Juice", price: 541, oldPrice: 543, reviews: 8905, mainImg: item1, hoverImg: cover1, save: 2, category: "Best Solutions" },
// //   { id: 2, name: "Diabic Care Juice", price: 457, oldPrice: 459, reviews: 8331, mainImg: DiabicJuice, hoverImg: cover2, save: 2, category: "Diabetic Wellness" },
// //   { id: 3, name: "Cholesterol Care Juice", price: 560, oldPrice: 562, reviews: 6397, mainImg: CholesterolJuice, hoverImg: cover3, save: 2, category: "Best Solutions" },
// //   { id: 4, name: "Shapefix Juice", price: 476, oldPrice: 478, reviews: 5750, mainImg: ShapefixJuice, hoverImg: cover4, save: 2, category: "Women's Wellness" },
// //   { id: 5, name: "She Care Juice", price: 541, oldPrice: 543, reviews: 8905, mainImg: item1, hoverImg: cover1, save: 2, category: "Best Solutions" },
// //   { id: 6, name: "Diabic Care Juice", price: 457, oldPrice: 459, reviews: 8331, mainImg: DiabicJuice, hoverImg: cover2, save: 2, category: "Diabetic Wellness" },
// // ];



// export const categories = [
//   "Best Solutions",
//   "Diabetic Wellness",
//   "Digestive Wellness",
//   "Pain Reliever",
//   "Women's Wellness"
// ];

// export const products = [
//   // Best Solutions
//   { id: 1, name: "She Care Juice", price: 541, oldPrice: 543, reviews: 8905, mainImg: item1, hoverImg: cover1, save: 2, category: "Best Solutions" },
//   { id: 2, name: "Herbal Detox", price: 632, oldPrice: 650, reviews: 4210, mainImg: item2, hoverImg: cover2, save: 18, category: "Best Solutions" },
//   { id: 3, name: "Vital Greens", price: 499, oldPrice: 520, reviews: 3120, mainImg: item3, hoverImg: cover3, save: 21, category: "Best Solutions" },
//   { id: 4, name: "Immunity Booster", price: 720, oldPrice: 750, reviews: 1580, mainImg: item4, hoverImg: cover4, save: 30, category: "Best Solutions" },
//   { id: 5, name: "Energy Plus", price: 610, oldPrice: 630, reviews: 2750, mainImg: item5, hoverImg: cover5, save: 20, category: "Best Solutions" },
//   { id: 6, name: "Organic Blend", price: 550, oldPrice: 570, reviews: 1980, mainImg: item6, hoverImg: cover6, save: 20, category: "Best Solutions" },

//   // Diabetic Wellness
//   { id: 7, name: "Diabic Care Juice", price: 520, oldPrice: 540, reviews: 3420, mainImg: item1, hoverImg: cover1, save: 20, category: "Diabetic Wellness" },
//   { id: 8, name: "Sugar Balance", price: 610, oldPrice: 635, reviews: 2150, mainImg: item2, hoverImg: cover2, save: 25, category: "Diabetic Wellness" },
//   { id: 9, name: "Glucose Control", price: 490, oldPrice: 510, reviews: 1890, mainImg: item3, hoverImg: cover3, save: 20, category: "Diabetic Wellness" },
//   { id: 10, name: "Herbal Diabetic Support", price: 730, oldPrice: 760, reviews: 1420, mainImg: item4, hoverImg: cover4, save: 30, category: "Diabetic Wellness" },
//   { id: 11, name: "Diab-Plus", price: 600, oldPrice: 620, reviews: 2100, mainImg: item5, hoverImg: cover5, save: 20, category: "Diabetic Wellness" },
//   { id: 12, name: "Gluco Herbs", price: 570, oldPrice: 590, reviews: 1760, mainImg: item6, hoverImg: cover6, save: 20, category: "Diabetic Wellness" },

//   // Digestive Wellness
//   { id: 13, name: "Digestive Aid Juice", price: 500, oldPrice: 520, reviews: 3010, mainImg: item1, hoverImg: cover1, save: 20, category: "Digestive Wellness" },
//   { id: 14, name: "Herbal Digestion Blend", price: 620, oldPrice: 650, reviews: 1870, mainImg: item2, hoverImg: cover2, save: 30, category: "Digestive Wellness" },
//   { id: 15, name: "Gut Health Plus", price: 480, oldPrice: 500, reviews: 2190, mainImg: item3, hoverImg: cover3, save: 20, category: "Digestive Wellness" },
//   { id: 16, name: "Belly Comfort Juice", price: 710, oldPrice: 740, reviews: 1340, mainImg: item4, hoverImg: cover4, save: 30, category: "Digestive Wellness" },
//   { id: 17, name: "Herbal Gut Support", price: 590, oldPrice: 610, reviews: 1990, mainImg: item5, hoverImg: cover5, save: 20, category: "Digestive Wellness" },
//   { id: 18, name: "Organic Digestion Mix", price: 560, oldPrice: 580, reviews: 1700, mainImg: item6, hoverImg: cover6, save: 20, category: "Digestive Wellness" },

//   // Pain Reliever
//   { id: 19, name: "Pain Relief Juice", price: 540, oldPrice: 560, reviews: 2120, mainImg: item1, hoverImg: cover1, save: 20, category: "Pain Reliever" },
//   { id: 20, name: "Herbal Pain Support", price: 620, oldPrice: 650, reviews: 1980, mainImg: item2, hoverImg: cover2, save: 30, category: "Pain Reliever" },
//   { id: 21, name: "Joint Care Plus", price: 490, oldPrice: 510, reviews: 1780, mainImg: item3, hoverImg: cover3, save: 20, category: "Pain Reliever" },
//   { id: 22, name: "Muscle Ease", price: 700, oldPrice: 730, reviews: 1500, mainImg: item4, hoverImg: cover4, save: 30, category: "Pain Reliever" },
//   { id: 23, name: "Herbal Pain Reliever", price: 610, oldPrice: 630, reviews: 1900, mainImg: item5, hoverImg: cover5, save: 20, category: "Pain Reliever" },
//   { id: 24, name: "Organic Pain Care", price: 580, oldPrice: 600, reviews: 1600, mainImg: item6, hoverImg: cover6, save: 20, category: "Pain Reliever" },

//   // Women's Wellness
//   { id: 25, name: "Women's Immunity Juice", price: 550, oldPrice: 570, reviews: 1980, mainImg: item1, hoverImg: cover1, save: 20, category: "Women's Wellness" },
//   { id: 26, name: "Herbal Women Support", price: 630, oldPrice: 650, reviews: 1740, mainImg: item2, hoverImg: cover2, save: 20, category: "Women's Wellness" },
//   { id: 27, name: "Women's Vitality Mix", price: 480, oldPrice: 500, reviews: 2050, mainImg: item3, hoverImg: cover3, save: 20, category: "Women's Wellness" },
//   { id: 28, name: "Herbal Women's Care", price: 710, oldPrice: 740, reviews: 1360, mainImg: item4, hoverImg: cover4, save: 30, category: "Women's Wellness" },
//   { id: 29, name: "Organic Women's Blend", price: 600, oldPrice: 620, reviews: 1900, mainImg: item5, hoverImg: cover5, save: 20, category: "Women's Wellness" },
//   { id: 30, name: "Women's Energy Mix", price: 570, oldPrice: 590, reviews: 1780, mainImg: item6, hoverImg: cover6, save: 20, category: "Women's Wellness" },
// ];


// const ProductCard = ({ product }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="min-w-70 md:min-w-75 relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group cursor-grab active:cursor-grabbing"
//     >
//       {/* Save Badge */}
//       <div className="absolute top-3 left-3 z-20 bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-bold px-2 py-1 rounded border border-green-100 flex items-center gap-1">
//         <Save size={10} /> Save ₹{product.save}
//       </div>

//       {/* Image Section - White Background */}
//       <div className="h-64 relative flex items-center justify-center p-6 bg-white overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={isHovered ? "hover" : "main"}
//             src={isHovered ? product.hoverImg : product.mainImg}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="max-h-full object-contain pointer-events-none"
//           />
//         </AnimatePresence>

//         {/* Slide-up Add to Cart Button */}
//         <AnimatePresence>
//           {isHovered && (
//             <motion.button
//               initial={{ y: 80 }}
//               animate={{ y: 0 }}
//               exit={{ y: 80 }}
//               transition={{ type: "spring", stiffness: 300, damping: 25 }}
//               className="absolute bottom-4 left-4 right-4 bg-[#F27427] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 z-30 shadow-lg"
//             >
//               <ShoppingCart size={18} /> ADD TO CART
//             </motion.button>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Info Section - Gray Background */}
//       <div className="p-5 text-center bg-[#F9FAFB] grow border-t border-gray-50">
//         <h3 className="font-bold text-gray-800 text-lg mb-1">{product.name}</h3>
//         <div className="flex justify-center items-center gap-1 mb-2">
//           {[...Array(5)].map((_, i) => (
//             <Star key={i} size={14} className="fill-green-500 text-green-500" />
//           ))}
//           <span className="text-xs text-gray-400">({product.reviews})</span>
//         </div>
//         <div className="flex justify-center items-baseline gap-2">
//           <span className="text-xl font-bold text-gray-900">From ₹{product.price}</span>
//           <span className="text-xs text-gray-400 line-through">₹{product.oldPrice}</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// function BestSection() {
//   const [activeTab, setActiveTab] = useState("Best Solutions");
//   const [width, setWidth] = useState(0);
//   const carouselRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (carouselRef.current) {
//       setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
//     }
//   }, [activeTab]);

//   const scroll = (direction) => {
//     const { current } = carouselRef;
//     const shift = 320; // card width + gap
//     if (direction === 'left') {
//       current.scrollLeft -= shift;
//     } else {
//       current.scrollLeft += shift;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white py-12">
      
//       <div className="max-w-7xl mx-auto px-4 mt-16">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           I'm looking for the Best Solution
//         </h2>

//         {/* 2. Tabs Filtering */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveTab(cat)}
//               className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300
//                 ${activeTab === cat
//                   ? "bg-[#D4E9D6] border-[#C8E6C9] text-[#2E7D32]"
//                   : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"}`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* 3. Draggable Carousel */}
//         <div className="relative group px-2">
//           {/* Nav Arrows */}
//           <button 
//             onClick={() => scroll('left')}
//             className="absolute -left-5 top-1/2 -translate-y-1/2 z-40 p-3 bg-white rounded-full shadow-xl border border-gray-100 text-gray-400 hover:text-green-600 hidden lg:block active:scale-95 transition-transform"
//           >
//             <ChevronLeft size={24} strokeWidth={3} />
//           </button>
          
//           <button 
//             onClick={() => scroll('right')}
//             className="absolute -right-5 top-1/2 -translate-y-1/2 z-40 p-3 bg-white rounded-full shadow-xl border border-gray-100 text-gray-400 hover:text-green-600 hidden lg:block active:scale-95 transition-transform"
//           >
//             <ChevronRight size={24} strokeWidth={3} />
//           </button>

//           <div 
//             ref={carouselRef} 
//             className="overflow-hidden cursor-grab active:cursor-grabbing scroll-smooth"
//           >
//             <motion.div
//               drag="x"
//               dragConstraints={{ right: 0, left: -width }}
//               className="flex gap-6 py-4"
//             >
//               {products.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default BestSection;





import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShoppingCart, Save, ChevronLeft, ChevronRight } from "lucide-react";

// Product Assets
import item1 from "../../assets/products/skin_care.png";
import DiabicJuice from "../../assets/category/Digestive_Wellness.png";
import CholesterolJuice from "../../assets/category/Pain_reliever.png";
import ShapefixJuice from "../../assets/category/women_wellness.png";
import cover1 from "../../assets/items/cover1.png";
import cover2 from "../../assets/items/cover2.png";
import cover3 from "../../assets/items/cover3.png";
import cover4 from "../../assets/items/cover4.png";
import cover5 from "../../assets/items/cover2.png";
import cover6 from "../../assets/items/cover3.png";
import item2 from "../../assets/items/cover2.png";
import item3 from "../../assets/items/cover3.png";
import item4 from "../../assets/items/cover4.png";
import item5 from "../../assets/items/cover1.png";
import item6 from "../../assets/items/DiabicCare.png";

export const categories = [
  "Best Solutions",
  "Diabetic Wellness",
  "Digestive Wellness",
  "Pain Reliever",
  "Women's Wellness"
];

export const products = [
  // Best Solutions
  { id: 1, name: "She Care Juice", price: 541, oldPrice: 543, reviews: 8905, mainImg: item1, hoverImg: cover1, save: 2, category: "Best Solutions" },
  { id: 2, name: "Herbal Detox", price: 632, oldPrice: 650, reviews: 4210, mainImg: item2, hoverImg: cover2, save: 18, category: "Best Solutions" },
  { id: 3, name: "Vital Greens", price: 499, oldPrice: 520, reviews: 3120, mainImg: item3, hoverImg: cover3, save: 21, category: "Best Solutions" },
  { id: 4, name: "Immunity Booster", price: 720, oldPrice: 750, reviews: 1580, mainImg: item4, hoverImg: cover4, save: 30, category: "Best Solutions" },
  { id: 5, name: "Energy Plus", price: 610, oldPrice: 630, reviews: 2750, mainImg: item5, hoverImg: cover5, save: 20, category: "Best Solutions" },
  { id: 6, name: "Organic Blend", price: 550, oldPrice: 570, reviews: 1980, mainImg: item6, hoverImg: cover6, save: 20, category: "Best Solutions" },

  // Diabetic Wellness
  { id: 7, name: "Diabic Care Juice", price: 520, oldPrice: 540, reviews: 3420, mainImg: item1, hoverImg: cover1, save: 20, category: "Diabetic Wellness" },
  { id: 8, name: "Sugar Balance", price: 610, oldPrice: 635, reviews: 2150, mainImg: item2, hoverImg: cover2, save: 25, category: "Diabetic Wellness" },
  { id: 9, name: "Glucose Control", price: 490, oldPrice: 510, reviews: 1890, mainImg: item3, hoverImg: cover3, save: 20, category: "Diabetic Wellness" },
  { id: 10, name: "Herbal Diabetic Support", price: 730, oldPrice: 760, reviews: 1420, mainImg: item4, hoverImg: cover4, save: 30, category: "Diabetic Wellness" },
  { id: 11, name: "Diab-Plus", price: 600, oldPrice: 620, reviews: 2100, mainImg: item5, hoverImg: cover5, save: 20, category: "Diabetic Wellness" },
  { id: 12, name: "Gluco Herbs", price: 570, oldPrice: 590, reviews: 1760, mainImg: item6, hoverImg: cover6, save: 20, category: "Diabetic Wellness" },

  // Digestive Wellness
  { id: 13, name: "Digestive Aid Juice", price: 500, oldPrice: 520, reviews: 3010, mainImg: item1, hoverImg: cover1, save: 20, category: "Digestive Wellness" },
  { id: 14, name: "Herbal Digestion Blend", price: 620, oldPrice: 650, reviews: 1870, mainImg: item2, hoverImg: cover2, save: 30, category: "Digestive Wellness" },
  { id: 15, name: "Gut Health Plus", price: 480, oldPrice: 500, reviews: 2190, mainImg: item3, hoverImg: cover3, save: 20, category: "Digestive Wellness" },
  { id: 16, name: "Belly Comfort Juice", price: 710, oldPrice: 740, reviews: 1340, mainImg: item4, hoverImg: cover4, save: 30, category: "Digestive Wellness" },
  { id: 17, name: "Herbal Gut Support", price: 590, oldPrice: 610, reviews: 1990, mainImg: item5, hoverImg: cover5, save: 20, category: "Digestive Wellness" },
  { id: 18, name: "Organic Digestion Mix", price: 560, oldPrice: 580, reviews: 1700, mainImg: item6, hoverImg: cover6, save: 20, category: "Digestive Wellness" },

  // Pain Reliever
  { id: 19, name: "Pain Relief Juice", price: 540, oldPrice: 560, reviews: 2120, mainImg: item1, hoverImg: cover1, save: 20, category: "Pain Reliever" },
  { id: 20, name: "Herbal Pain Support", price: 620, oldPrice: 650, reviews: 1980, mainImg: item2, hoverImg: cover2, save: 30, category: "Pain Reliever" },
  { id: 21, name: "Joint Care Plus", price: 490, oldPrice: 510, reviews: 1780, mainImg: item3, hoverImg: cover3, save: 20, category: "Pain Reliever" },
  { id: 22, name: "Muscle Ease", price: 700, oldPrice: 730, reviews: 1500, mainImg: item4, hoverImg: cover4, save: 30, category: "Pain Reliever" },
  { id: 23, name: "Herbal Pain Reliever", price: 610, oldPrice: 630, reviews: 1900, mainImg: item5, hoverImg: cover5, save: 20, category: "Pain Reliever" },
  { id: 24, name: "Organic Pain Care", price: 580, oldPrice: 600, reviews: 1600, mainImg: item6, hoverImg: cover6, save: 20, category: "Pain Reliever" },

  // Women's Wellness
  { id: 25, name: "Women's Immunity Juice", price: 550, oldPrice: 570, reviews: 1980, mainImg: item1, hoverImg: cover1, save: 20, category: "Women's Wellness" },
  { id: 26, name: "Herbal Women Support", price: 630, oldPrice: 650, reviews: 1740, mainImg: item2, hoverImg: cover2, save: 20, category: "Women's Wellness" },
  { id: 27, name: "Women's Vitality Mix", price: 480, oldPrice: 500, reviews: 2050, mainImg: item3, hoverImg: cover3, save: 20, category: "Women's Wellness" },
  { id: 28, name: "Herbal Women's Care", price: 710, oldPrice: 740, reviews: 1360, mainImg: item4, hoverImg: cover4, save: 30, category: "Women's Wellness" },
  { id: 29, name: "Organic Women's Blend", price: 600, oldPrice: 620, reviews: 1900, mainImg: item5, hoverImg: cover5, save: 20, category: "Women's Wellness" },
  { id: 30, name: "Women's Energy Mix", price: 570, oldPrice: 590, reviews: 1780, mainImg: item6, hoverImg: cover6, save: 20, category: "Women's Wellness" },
];

// Product Card
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="min-w-70 md:min-w-75 relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group cursor-grab active:cursor-grabbing"
    >
      <div className="absolute top-3 left-3 z-20 bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-bold px-2 py-1 rounded border border-green-100 flex items-center gap-1">
        <Save size={10} /> Save ₹{product.save}
      </div>

      <div className="h-64 relative flex items-center justify-center p-6 bg-white overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={isHovered ? "hover" : "main"}
            src={isHovered ? product.hoverImg : product.mainImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-h-full object-contain pointer-events-none"
          />
        </AnimatePresence>

        <AnimatePresence>
          {isHovered && (
            <motion.button
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              exit={{ y: 80 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute bottom-4 left-4 right-4 bg-[#F27427] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 z-30 shadow-lg"
            >
              <ShoppingCart size={18} /> ADD TO CART
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="p-5 text-center bg-[#F9FAFB] grow border-t border-gray-50">
        <h3 className="font-bold text-gray-800 text-lg mb-1">{product.name}</h3>
        <div className="flex justify-center items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="fill-green-500 text-green-500" />
          ))}
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        <div className="flex justify-center items-baseline gap-2">
          <span className="text-xl font-bold text-gray-900">From ₹{product.price}</span>
          <span className="text-xs text-gray-400 line-through">₹{product.oldPrice}</span>
        </div>
      </div>
    </motion.div>
  );
};

// Best Section Component
function BestSection() {
  const [activeTab, setActiveTab] = useState("Best Solutions");
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);

  // Filter products by active category
  const filteredProducts = products.filter(p => p.category === activeTab);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [activeTab]);

  const scroll = (direction) => {
    const { current } = carouselRef;
    const shift = 320;
    if (direction === 'left') current.scrollLeft -= shift;
    else current.scrollLeft += shift;
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          I'm looking for the Best Solution
        </h2>

        {/* Tabs Filtering */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300
                ${activeTab === cat
                  ? "bg-[#D4E9D6] border-[#C8E6C9] text-[#2E7D32]"
                  : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Draggable Carousel */}
        <div className="relative group px-2">
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-40 p-3 bg-white rounded-full shadow-xl border border-gray-100 text-gray-400 hover:text-green-600 hidden lg:block active:scale-95 transition-transform"
          >
            <ChevronLeft size={24} strokeWidth={3} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-40 p-3 bg-white rounded-full shadow-xl border border-gray-100 text-gray-400 hover:text-green-600 hidden lg:block active:scale-95 transition-transform"
          >
            <ChevronRight size={24} strokeWidth={3} />
          </button>

          <div 
            ref={carouselRef} 
            className="overflow-hidden cursor-grab active:cursor-grabbing scroll-smooth"
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex gap-6 py-4"
            >
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSection;