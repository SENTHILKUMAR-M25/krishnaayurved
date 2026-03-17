import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    category: "IMMUNITY WELLNESS",
    title: "B12 Options For Vegetarians: Foods to Boost Vitamin B12 Naturally",
    bgColor: "bg-[#5D6B4A]",
    img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/03/B12-Options-For-Vegetarians-Foods-to-Boost-Vitamin-B12-Naturally-1200x650.jpg",
  },
  {
    id: 2,
    category: "IMMUNITY WELLNESS",
    title: "How Does Cold Weather Affect Heart Health",
    bgColor: "bg-[#A6756C]",
    img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/03/How-Does-Cold-Weather-Affect-Heart-Health_-800x433.jpg",
  },
  {
    id: 3,
    category: "IMMUNITY WELLNESS",
    title: "Natural Ayurvedic Remedies for throat Infection relief",
    bgColor: "bg-[#6C8A7A]",
    img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/03/Natural-Ayurvedic-Remedies-for-throat-Infection-relief-800x433.jpg",
  },
  {
    id: 4,
    category: "IMMUNITY WELLNESS",
    title: "Air Pollution And Children – What You Need to Know",
    bgColor: "bg-[#6C8A7A]",
    img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/02/Air-Pollution-And-Children-800x433.jpg",
  },
  {
    id: 5,
    category: "IMMUNITY WELLNESS",
    title: "Empty Stomach Walk vs Post-Meal Walk: Which Is Better for Weight Loss",
    bgColor: "bg-[#6C8A7A]",
    img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/02/Empty-Stomach-Walk-vs-Post-Meal-Walk-Which-Is-Better-for-Weight-Loss-600x325.png",
  },
  {
    id: 6,
    category: "IMMUNITY WELLNESS",
    title: "Difference Between Sciatica and General Backache: What to Know",
    bgColor: "bg-[#6C8A7A]",
    img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/02/Difference-Between-Sciatica-and-General-Backache-What-to-Know-600x325.png",
  },
  {
    id: 7,
    category: "IMMUNITY WELLNESS",
    title: "Winter Headaches: Causes, Symptoms & Remedies for Cold-Triggered Pain",
    bgColor: "bg-[#6C8A7A]",
    img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/01/Winter-Headaches-Causes-Symptoms-Remedies-for-Cold-Triggered-Pain-600x325.png",
  },
  {
    id: 6,
    category: "IMMUNITY WELLNESS",
    title: "Winter Cough in Kids: Ayurvedic Home Remedies & Syrup You Can Trust",
    bgColor: "bg-[#6C8A7A]",
    img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/01/Winter-Cough-in-Kids-Ayurvedic-Home-Remedies-Syrup-You-Can-Trust-600x325.jpg",
  },
];

const ArticleCarousel = () => {
  const [index, setIndex] = useState(0);

  const cardsPerView = window.innerWidth >= 768 ? 2 : 1;

  const nextStep = () => {
    setIndex((prev) =>
      prev + cardsPerView >= articles.length ? 0 : prev + 1
    );
  };

  const prevStep = () => {
    setIndex((prev) =>
      prev === 0 ? articles.length - cardsPerView : prev - 1
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-white">
      <h2 className="text-3xl font-serif text-[#2D3A3A] mb-8">
        Latest Articles
      </h2>

      <div className="relative overflow-hidden">

        {/* SLIDER */}
        <motion.div
          animate={{
            x: `-${index * (100 / cardsPerView)}%`,
          }}
          transition={{ duration: 0.5 }}
          className="flex"
        >
          {articles.map((article) => (
            <div
              key={article.id}
              className="min-w-full md:min-w-[50%] px-3"
            >
              {/* Card */}
              <div className={`${article.bgColor} rounded-xl overflow-hidden h-[300px]`}>
                <img
                  src={article.img}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative -mt-16 mr-10 bg-[#F9FBFA] p-6 rounded-tr-[40px] rounded-bl-[40px] shadow-sm">
                <p className="text-xs text-gray-500 font-bold mb-2">
                  {article.category}
                </p>

                <h4 className="text-[#2E5B37] text-xl hover:text-orange-400 font-serif mb-4 hover:underline cursor-pointer">
                  {article.title}
                </h4>

                <button className="flex items-center gap-2 text-[#2E5B37] text-xs font-bold hover:text-orange-400">
                  Continue Reading <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ARROWS */}
        <button
          onClick={prevStep}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextStep}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-10">
        {articles.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`cursor-pointer h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-[#F37021]" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleCarousel;