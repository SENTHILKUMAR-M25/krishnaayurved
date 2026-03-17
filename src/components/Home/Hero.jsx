
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

import hero1 from "../../assets/Shecare.png";
import hero2 from "../../assets/diabetic.png";

export default function Hero() {

  const images = [hero1, hero2];

  const [index, setIndex] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative top-10 w-full h-screen sm:h-[70vh] md:h-screen lg:h-screen overflow-hidden">
 
      {/* Image */}
      <img
        src={images[index]}
        alt="Hero"
        className="w-full h-full object-cover transition duration-700"
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`cursor-pointer rounded-full transition
            ${index === i ? "bg-white" : "bg-gray-400"}
            w-2 h-2 sm:w-3 sm:h-3`}
          />
        ))}
      </div>

      {/* CHATBOT */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">

        {/* Chat Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-green-600 hover:bg-green-700 text-white p-3 sm:p-4 rounded-full shadow-lg"
        >
          <MessageCircle size={22} />
        </button>

        {/* Chat Box */}
        {chatOpen && (
          <div className="absolute bottom-14 right-0 w-[260px] sm:w-72 bg-white rounded-xl shadow-xl overflow-hidden">

            <div className="bg-green-600 text-white p-3 font-semibold text-sm sm:text-base">
              Chat Support
            </div>

            <div className="p-3 h-32 sm:h-40 overflow-y-auto text-sm">
              <p className="bg-gray-100 p-2 rounded mb-2">
                Hello 👋 How can I help you?
              </p>
            </div>

            <div className="flex border-t">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-2 text-sm outline-none"
              />
              <button className="bg-green-600 text-white px-3 sm:px-4 text-sm">
                Send
              </button>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}