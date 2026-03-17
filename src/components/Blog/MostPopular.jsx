import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';

const popularArticles = [
  { id: 1, category: "IMMUNITY WELLNESS", title: "B12 Options For Vegetarians: Foods to Boost Vitamin B12 Naturally", img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/03/B12-Options-For-Vegetarians-Foods-to-Boost-Vitamin-B12-Naturally-1200x650.jpg" },
  { id: 2, category: "IMMUNITY WELLNESS", title: "How Does Cold Weather Affect Heart Health", img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/03/How-Does-Cold-Weather-Affect-Heart-Health_-600x325.jpg" },
  { id: 3, category: "IMMUNITY WELLNESS", title: "Natural Ayurvedic Remedies for throat infection relief", img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/03/Natural-Ayurvedic-Remedies-for-throat-Infection-relief-600x325.jpg" },
  { id: 4, category: "IMMUNITY WELLNESS", title: "Air Pollution And Children – What You Need to Know", img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/02/Air-Pollution-And-Children-600x325.jpg" },
  { id: 5, category: "IMMUNITY WELLNESS", title: "Empty Stomach Walk vs Post Meal Walk", img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/02/Empty-Stomach-Walk-vs-Post-Meal-Walk-Which-Is-Better-for-Weight-Loss-600x325.png" },
  { id: 6, category: "IMMUNITY WELLNESS", title: "Difference Between Sciatica and Backache", img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/02/Difference-Between-Sciatica-and-General-Backache-What-to-Know-600x325.png" },
  { id: 7, category: "IMMUNITY WELLNESS", title: "Winter Headaches: Causes & Remedies", img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/01/Winter-Headaches-Causes-Symptoms-Remedies-for-Cold-Triggered-Pain-600x325.png" },
  { id: 8, category: "IMMUNITY WELLNESS", title: "Winter Cough in Kids", img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/01/Winter-Cough-in-Kids-Ayurvedic-Home-Remedies-Syrup-You-Can-Trust-600x325.jpg" },
  { id: 9, category: "IMMUNITY WELLNESS", title: "Sea Buckthorn Juice Benefits", img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/01/Top-10-Sea-Buckthorn-Juice-Benefits-for-Health-and-Wellness-600x325.jpg" },
  { id: 10, category: "IMMUNITY WELLNESS", title: "Why You Wake Up With Headache", img: "https://blog.krishnaayurved.com/wp-content/uploads/2026/01/6-Reasons-You-May-Be-Waking-Up-With-a-Headache-600x325.jpg" },
  { id: 11, category: "IMMUNITY WELLNESS", title: "What is Sciatica", img: "https://blog.krishnaayurved.com/wp-content/uploads/2025/12/What-is-Sciatica_-Symptoms-Causes-and-Treatment-600x325.jpg" },
];

const MostPopular = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <h2 className="text-3xl font-serif text-[#1a1a1a] mb-10">Most Popular</h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        <AnimatePresence>
          {popularArticles.slice(0, visibleCount).map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col group cursor-pointer h-full"
            >
              {/* IMAGE */}
              <div className="rounded-xl overflow-hidden h-56 md:h-60 lg:h-64 shadow-sm hover:shadow-md transition bg-gray-50">
                <div className="w-full h-full p-3">
                  <div className="w-full h-full overflow-hidden rounded-sm relative">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 border border-white/20 m-1 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="mt-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                    {article.category}
                  </span>
                  <div className="h-[1px] w-8 bg-gray-200" />
                </div>

                <h4 className="text-[#2E5B37] font-serif text-lg leading-snug mb-4 group-hover:underline">
                  {article.title}
                </h4>

                <button className="mt-auto flex items-center gap-2 text-[#2E5B37] text-[11px] font-bold uppercase tracking-wider transition-all">
                  Continue Reading
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    <ArrowRight size={14} />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* LOAD MORE */}
      {visibleCount < popularArticles.length && (
        <div className="mt-16 flex flex-col items-center">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="flex items-center gap-3 bg-[#2E5B37] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#F37021] disabled:bg-gray-400"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Loading for next post...
              </>
            ) : (
              "Load More Posts"
            )}
          </button>

          {isLoading && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 3 }}
              className="h-1 bg-[#F37021] mt-4 rounded-full"
            />
          )}
        </div>
      )}
    </section>
  );
};

export default MostPopular;