import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Categories = [
  {
    id: 1,
    name: "STAMINA BOOSTER",
    image:
      "https://krishnaayurved.com/cdn/shop/files/category_cover_stamina_booster_915x1080_copy.jpg?v=1725962563&width=750",
  },
  {
    id: 2,
    name: "AYURVEDIC JUICES",
    image:
      "https://krishnaayurved.com/cdn/shop/files/category-images_juices.jpg?v=1667317539&width=750",
  },
  {
    id: 3,
    name: "HERBAL POWDER",
    image:
      "https://krishnaayurved.com/cdn/shop/files/website_category_images_powders_2_3a94be5c-6489-4e57-8fb9-8e2b76b6bb90.jpg?v=1722920042&width=750",
  },
  {
    id: 4,
    name: "AYURVEDIC TABLETS",
    image:
      "https://krishnaayurved.com/cdn/shop/files/3_1.jpg?v=1722920042&width=750",
  },
  {
    id: 5,
    name: "AYURVEDIC OILS",
    image:
      "https://krishnaayurved.com/cdn/shop/files/oils-1_1.jpg?v=1750716556&width=450",
  },
  {
    id: 6,
    name: "HERBAL COSMETICS",
    image:
      "https://krishnaayurved.com/cdn/shop/files/website_category_images_cosmetics.jpg?v=1658902614&width=450",
  },
];

const Category = () => {
  return (
    <div className="bg-amber-100 py-12 px-6">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Shop by Category
      </h1>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        navigation
        autoplay={{ delay: 2500 }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {Categories.map((item) => (
          <SwiperSlide key={item.id}>

            <div className="flex flex-col items-center">

              {/* Card */}
              <div className="w-full bg-[#FFFFF0] rounded-xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group">

                {/* Name + Image */}
                <div className="text-center">
                  <h2 className="text-lg font-semibold text-orange-500 py-3">
                    {item.name}
                  </h2>

                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                </div>

              </div>

              {/* Button */}
              <div className="flex justify-center mt-4">
                <button className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-orange-500 transition duration-300 shadow-md">
                  Shop Now
                </button>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Category;