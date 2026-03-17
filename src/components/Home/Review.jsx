import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    id: 1,
    text: "Very effective my sugar level was fasting 305 and after food was 508. I had to do my eye surgery due to cataract.. but unfortunately failed due to the high sugar levels.. but after taking diabic care juice I feel so good sugar level drastically dropped to 156 this morning. I now can do my surgery by the grace of god. I advise everyone to please go ahead and enjoy this juice. It's not bitter. Cheers to you all.",
    author: "Andrea Romeo",
  },
  {
    id: 2,
    text: "ये पथरी के लिए रामबाण मेडिसिन है मेने अपनी जिंदगी में इससे बेहतर आज तक कोई दवा नहीं देखी है | 6 MM की पथरी 15 दिनों में गायब हो गया था आज से 3 महीने पहले.",
    author: "Santosh Yogi",
  },
  {
    id: 3,
    text: "I got this product...",
    author: "User C",
  },
  {
    id: 4,
    text: "I got this product...",
    author: "User D",
  }
];

const Review = () => {
  return (
    <div className="bg-white py-16 px-4 font-sans">
      <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">
        From Our Customers
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 900 }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.2 },
        }}
        className="max-w-6xl !pb-12"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            {({ isActive }) => (
              <div 
                className={`transition-all duration-500 ease-in-out p-10 rounded-2xl min-h-[300px] flex flex-col items-center justify-center text-center
                ${isActive 
                  ? 'bg-[#f4f7f0] scale-100 opacity-100 shadow-sm' 
                  : 'bg-[#f8faf7] scale-90 opacity-40 blur-[1px]'
                }`}
              >
                {/* 5 Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#22c55e] text-2xl">★</span>
                  ))}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-2xl">
                  {review.text}
                </p>

                <h4 className="font-bold text-gray-900 text-xl italic">
                  {review.author}
                </h4>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Container */}
      <div className="custom-pagination flex justify-center gap-2 mt-4"></div>
      
      {/* Floating Chat Support Action */}
      <div className="fixed bottom-6 right-6 cursor-pointer">
        <div className="relative">
          <img 
            src="https://via.placeholder.com/60" 
            alt="Support" 
            className="rounded-full border-2 border-white shadow-lg"
          />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">1</span>
          <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border-2 border-white"></span>
        </div>
      </div>
    </div>
  );
};

export default Review;