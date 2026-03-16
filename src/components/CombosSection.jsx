import React, { useState } from 'react';

// Sample Data based on your screenshot
const comboData = [
  {
    id: 1,
    title: "Cholesterol Care Juice 1000 ml | Diabic Care Juice 1000 ml",
    price: 991,
    originalPrice: 1021,
    reviews: 44,
    saveAmount: 30,
    image: "https://krishnaayurved.com/cdn/shop/files/Diabic-_-Cholesterol-Care-Juice-2_7900a20b-d3a4-446c-848e-c84b4f1df44f.jpg?v=1737792932&width=750", // Replace with your image
    isBanner: true,
  },
  {
    id: 2,
    title: "Harshringar Leaf Juice 1000 ml | Joint Pain Care Juice 1000 ml",
    price: 869,
    originalPrice: 899,
    reviews: 12,
    saveAmount: 30,
    image1: "https://krishnaayurved.com/cdn/shop/files/Harshringar_JointPain.jpg?v=1684142405&width=750", 
    isBanner: false,
  },
  {
    id: 3,
    title: "Fat Reducer Juice 1000 ml | Lauki Amla 500 ml - Weight Management Combo",
    price: 654,
    originalPrice: 684,
    reviews: 28,
    saveAmount: 30,
    image1: "https://krishnaayurved.com/cdn/shop/files/fat_laukiamla.jpg?v=1698663933&width=750",
    isBanner: false,
  },
  {
    id: 4,
    title: "Cholesterol Care Juice 1000 ml | Cardiac Care Juice 1000 ml",
    price: 1010,
    originalPrice: 1040,
    reviews: 24,
    saveAmount: 30,
    image1: "https://krishnaayurved.com/cdn/shop/files/Cholesterol_Cardic.jpg?v=1684144379&width=1100",
    isBanner: false,
  },
  {
    id: 5,
    title: "Natural Handmade Soaps Combo -Haldi Chandan | Neem | Herbal | Lime Leaf Soap",
    price: 214,
    originalPrice: 1040,
    reviews: 24,
    saveAmount: 30,
    image1: "https://krishnaayurved.com/cdn/shop/products/Herbal_HaidiChandan_NeemHandmade_LimeleafSoap.jpg?v=1623840103&width=1100",
    isBanner: false,
  },
  {
    id: 6,
    title: "Liver Relive Juice 1000 ml | Bhumi Amla Juice 1000 ml",
    price: 214,
    originalPrice: 1040,
    reviews: 24,
    saveAmount: 30,
    image1: "https://krishnaayurved.com/cdn/shop/files/liver_Bhumi.jpg?v=1684141387&width=1100",
    isBanner: false,
  },
  {
    id: 7,
    title: "Diabic Health Combo- Aloe Vera Juice 1000 ml | Diabic Care Juice 1000 ml",
    price: 214,
    originalPrice: 1040,
    reviews: 24,
    saveAmount: 30,
    image1: "https://krishnaayurved.com/cdn/shop/products/DiaAloe.jpg?v=1667283950&width=750",
    isBanner: false,
  },
];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`min-w-[280px] flex-1 bg-white rounded-xl transition-all duration-300 relative group overflow-hidden border ${isHovered ? 'border-[#f37021] shadow-lg' : 'border-gray-100 shadow-sm'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Save Badge */}
      <div className="absolute top-3 left-3 z-10 bg-[#e8f5e9] border border-[#c8e6c9] text-[#2e7d32] px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
        Save ₹{product.saveAmount}
      </div>

      {/* Product Image Section */}
      <div className={`h-[280px] flex items-center justify-center  ${product.isBanner ? 'bg-[#d7e5d7]' : 'bg-white'}`}>
        {product.isBanner ? (
          <img src={product.image} alt={product.title} className="max-h-full object-contain" />
        ) : (
          <div className="h-full w-full">
            <img src={product.image1} alt="Product A" className="h-full w-full object-contain" />
            
          </div>
        )}
      </div>

      {/* Floating Add to Cart Button (Only on Hover) */}
      <div className={`px-4 transition-all duration-300 ${isHovered ? 'opacity-100 -translate-y-2' : 'opacity-0 translate-y-4'}`}>
        <button className="w-full bg-[#f37021] text-white py-2.5 rounded-md font-bold text-sm shadow-md hover:bg-orange-600 transition-colors">
          Add to cart
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 pt-2 text-center">
        <h3 className="text-[13px] font-semibold text-gray-800 leading-tight h-10 mb-2 overflow-hidden line-clamp-2">
          {product.title}
        </h3>
        
        {/* Rating Stars */}
        <div className="flex justify-center items-center gap-1 mb-2">
          <div className="flex text-green-500 text-xs">
            {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
          </div>
          <span className="text-gray-400 text-[10px]">({product.reviews})</span>
        </div>

        {/* Pricing */}
        <div className="flex justify-center items-center gap-2">
          <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
          <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default function ComboSection() {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Combos</h2>
        
        <div className="relative group">
          {/* Main Grid/Scroll Container */}
          <div className="flex gap-5 overflow-x-auto no-scrollbar pb-8 snap-x">
            {comboData.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

          {/* Navigation Arrow */}
          <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-gray-400 hover:text-gray-800 border border-gray-100 z-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}