
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Save } from "lucide-react";

// ✅ Images (local + online)
import item1 from "../../assets/items/Shecare.png";
import cover1 from "../../assets/items/cover1.png";
import cover2 from "../../assets/items/cover2.png";
import cover4 from "../../assets/items/cover4.png";

// ✅ Products (ALL will be shown)
const products = [
  {
    id: 1,
    name: "Eye Care Juice",
    price: 541,
    oldPrice: 543,
    discount: 2,
    rating: 4.5,
    reviews: 8905,
    mainImg: "https://krishnaayurved.com/cdn/shop/files/Eye_care_Juice_1.jpg?v=1766129077&width=750",
    hoverImg: "https://krishnaayurved.com/cdn/shop/files/Eye_care_Juice_1.jpg?v=1766129077&width=750",
  },
  {
    id: 2,
    name: "IBS Care Juice",
    price: 457,
    oldPrice: 459,
    discount: 2,
    rating: 4.4,
    reviews: 8331,
    mainImg: cover4,
    hoverImg: "https://krishnaayurved.com/cdn/shop/files/HeroImage_4eb67581-17c6-4aa4-a0f3-406559597701.jpg?v=1758197671&width=750",
  },
  {
    id: 3,
    name: "MigroFix Juice",
    price: 560,
    oldPrice: 562,
    discount: 2,
    rating: 4.3,
    reviews: 6397,
    mainImg: cover1,
    hoverImg: "https://krishnaayurved.com/cdn/shop/files/MigroFix_2.jpg?v=1766131961&width=750",
  },
  {
    id: 4,
    name: "Shapefix Juice",
    price: 476,
    oldPrice: 478,
    discount: 2,
    rating: 4.2,
    reviews: 5750,
    mainImg: cover1,
    hoverImg: "https://krishnaayurved.com/cdn/shop/files/Hero-Image.jpg?v=1768634472&width=750",
  },
  {
    id: 5,
    name: "Himalayan Shilajit Resin Women",
    price: 541,
    oldPrice: 543,
    discount: 2,
    rating: 4.5,
    reviews: 8905,
    mainImg: item1,
    hoverImg: "https://krishnaayurved.com/cdn/shop/files/C.png?v=1772884748&width=750",
  },
  {
    id: 6,
    name: "Sciatifix Juice",
    price: 457,
    oldPrice: 459,
    discount: 2,
    rating: 4.4,
    reviews: 8331,
    mainImg: cover2,
    hoverImg: "https://krishnaayurved.com/cdn/shop/files/Sciatifix_Jucie_1.jpg?v=1766126833&width=750",
  },
];

// ✅ Product Card
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="min-w-[280px] md:min-w-[300px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
    >
      {/* Discount */}
      <div className="absolute top-3 left-3 z-20 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
        Save ₹{product.discount}
      </div>

      {/* Image */}
      <div className="h-64 flex items-center justify-center p-6 relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={isHovered ? "hover" : "main"}
            src={isHovered ? product.hoverImg : product.mainImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-h-full object-contain"
          />
        </AnimatePresence>

        {/* Button */}
        {isHovered && (
          <motion.button
            initial={{ y: 60 }}
            animate={{ y: 0 }}
            className="absolute bottom-4 left-4 right-4 bg-orange-500 text-white py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} /> Add to Cart
          </motion.button>
        )}
      </div>

      {/* Info */}
      <div className="p-4 text-center bg-gray-50">
        <h3 className="font-semibold">{product.name}</h3>

        <div className="flex justify-center items-center gap-1 text-sm text-gray-500">
          <Star size={14} className="fill-green-500 text-green-500" />
          {product.rating} ({product.reviews})
        </div>

        <div className="mt-2">
          <span className="font-bold text-lg">₹{product.price}</span>
          <span className="line-through text-gray-400 ml-2">
            ₹{product.oldPrice}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// ✅ Main Component
const NewArrivals = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (carouselRef.current) {
        setWidth(
          carouselRef.current.scrollWidth -
          carouselRef.current.offsetWidth
        );
      }
    }, 100);
  }, []);

  const scroll = (dir) => {
    const amount = 300;
    if (dir === "left") {
      carouselRef.current.scrollLeft -= amount;
    } else {
      carouselRef.current.scrollLeft += amount;
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-8">
          New Arrivals
        </h2>

        <div className="relative">

          {/* Left */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow rounded-full hidden lg:block"
          >
            <ChevronLeft />
          </button>

          {/* Right */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow rounded-full hidden lg:block"
          >
            <ChevronRight />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="overflow-x-auto scroll-hide cursor-grab"
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: -width, right: 0 }}
              className="flex gap-6 py-4"
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewArrivals;