import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rohan Sharma",
    image: "https://krishnaayurved.com/cdn/shop/files/testimonial_covers_copy_2.jpg?v=1753519748&width=1100",
    rating: 5,
    review:
      "It's really helpful and I am using it for 10 days. I feel light and energetic.",
    product: {
      name: "Shapefix Juice",
      price: 476,
      originalPrice: 479,
      image: "https://krishnaayurved.com/cdn/shop/files/ShapeFix_1.jpg",
    },
  },
  {
    id: 2,
    name: "Dhiresh Bhattacherjee",
    image:
      "https://krishnaayurved.com/cdn/shop/files/testimonial_covers_copy_3.jpg",
    rating: 5,
    review:
      "Very satisfied! I stopped pills and started this juice. Amazing results.",
    product: {
      name: "Diabic Care Juice",
      price: 457,
      originalPrice: 459,
      image: "https://krishnaayurved.com/cdn/shop/files/DiabicCare_1.jpg",
    },
  },
  {
    id: 3,
    name: "Gazal Jain",
    image:
      "https://krishnaayurved.com/cdn/shop/files/testimonial_covers_copy_1.jpg",
    rating: 5,
    review:
      "Skin glowing and feeling light. Great product, will continue using it.",
    product: {
      name: "She Care Juice",
      price: 457,
      originalPrice: 459,
      image: "https://krishnaayurved.com/cdn/shop/files/SheCare_1.jpg",
    },
  },
  {
    id: 4,
    name: "Amit Verma",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    rating: 5,
    review:
      "Superb quality. I can feel the improvement in my health within days.",
    product: {
      name: "MigroFix Juice",
      price: 560,
      originalPrice: 562,
      image: "https://krishnaayurved.com/cdn/shop/files/MigroFix_2.jpg",
    },
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = window.innerWidth < 768 ? 1 : 2;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - itemsPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - itemsPerView : prev - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Real people, real stories</h2>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 border rounded-full hover:bg-gray-50"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="p-2 border rounded-full hover:bg-gray-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / itemsPerView)
            }%)`,
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-1/2 px-3 flex-shrink-0"
            >
              <div className="flex gap-2 h-130">

                {/* Left Image */}
                <div className="relative w-1/2 rounded-l-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />

                  {/* <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 to-transparent flex items-end justify-center p-4">
                    <h3 className="text-white text-lg font-semibold">
                      {item.name}
                    </h3>
                  </div> */}
                </div>

                {/* Right Content */}
                <div className="w-1/2 bg-white border border-gray-600 rounded-r-xl p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm mb-3">{item.name}</h4>

                    <div className="flex gap-1 mb-3">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-green-500 text-green-500"
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm">
                      {item.review}
                    </p>
                  </div>

                  {/* Product */}
                  <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3">
                    <img
                      src={item.product.image}
                      className="w-10 h-10 rounded"
                      alt="product"
                    />
                    <div>
                      <p className="text-xs font-semibold">
                        {item.product.name}
                      </p>
                      <p className="text-sm font-bold">
                        ₹{item.product.price}
                        <span className="text-xs text-gray-400 line-through ml-2">
                          ₹{item.product.originalPrice}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;