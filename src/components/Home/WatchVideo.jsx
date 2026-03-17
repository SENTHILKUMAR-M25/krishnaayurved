import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Send, ChevronRight, X } from 'lucide-react';
import img from '../../assets/items/Shecare.png';
export const products = [
  {
    id: 1,
    title: "She Care Juice",
    price: 541,
    originalPrice: 543,
    discount: null,
    views: "5.4K",
    image: img,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/628c67a3e6594bc8aef352d1800e2abf.mp4",
    status: "In Stock"
  },
  {
    id: 2,
    title: "Chyawanprash Preservative Free",
    price: 480,
    originalPrice: 490,
    discount: "2% Off",
    views: "13.0K",
    image: img,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/0817ac7ba8c342ef88ff114e42bfb785.mp4",
    status: "Out Of Stock"
  },
  {
    id: 3,
    title: "Diabic Care Juice",
    price: 480,
    originalPrice: 490,
    discount: "2% Off",
    views: "9.4K",
    image: img,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/628c67a3e6594bc8aef352d1800e2abf.mp4",
    status: "In Stock"
  },
  {
    id: 4,
    title: "Vidari kand Powder",
    price: 170,
    originalPrice: null,
    discount: null,
    views: "14.4K",
    image: img,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/0b3dd43de58f465e92031d67995e320f.mp4",
    status: "In Stock"
  },
  {
    id: 5,
    title: "Diabic Care Juice",
    price: 480,
    originalPrice: 490,
    discount: "2% Off",
    views: "23.5K",
    image: img,
    videoUrl: "https://video.gumlet.io/64661d8e673536e1fe9044e2/664b130ea404011eb8da46e7/main.mp4",
    status: "In Stock"
  }

];

const WatchAndShop = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-10 py-10 font-sans">
      <h2 className="text-xl sm:text-2xl font-semibold text-center text-[#3D5A2D] mb-8">
        Watch & Shop
      </h2>

      <div className="relative max-w-7xl mx-auto">
        <div
          id="watch-scroll"
          className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {products.map((product) => {
            const videoRef = useRef(null);

            return (
              <motion.div
                key={product.id}
                whileHover={{ y: -5 }}
                className="snap-start min-w-[180px] sm:min-w-[220px] md:min-w-[240px] flex-shrink-0 border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer bg-white"
              >
                {/* Video Section */}
                <div
                  className="relative w-full h-[300px] bg-gray-100"
                  onMouseEnter={() => videoRef.current?.play()}
                  onMouseLeave={() => videoRef.current?.pause()}
                >
                  <video
                    ref={videoRef}
                    src={product.videoUrl}
                    muted
                    loop
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                  {/* Views Overlay */}
                  <div className="absolute bottom-3 left-3 bg-black/30 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded">
                    {product.views} Views
                  </div>
                  {/* Icons */}
                  <div className="absolute bottom-3 right-3 flex gap-3 text-white">
                    <Heart size={18} className="hover:fill-red-500 transition" />
                    <Send size={18} />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-4">

                  <div className="flex items-center gap-3 mb-3">

                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded border overflow-hidden bg-gray-50 p-1">
                      <img
                        src={product.image}
                        alt="thumb"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-800 truncate w-28 sm:w-32">
                        {product.title}
                      </span>

                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">
                          ₹ {product.price}
                        </span>

                        {product.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            ₹ {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                  <button className="w-full bg-[#3D5A2D] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#2F4522] transition">
                    Buy Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll Arrow */}
        <button
          onClick={() => {
            const container = document.getElementById("watch-scroll");
            container.scrollBy({ left: 300, behavior: "smooth" });
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border hidden md:flex"
        >
          <ChevronRight size={22} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default WatchAndShop;