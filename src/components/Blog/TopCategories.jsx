import React from 'react';
import { motion } from 'framer-motion';

const categories = [
    {
        id: 1,
        name: "Women's Wellness",
        img: "https://blog.krishnaayurved.com/wp-content/uploads/2024/09/women_wellness-400x400.jpg"
    },
    { id: 2, 
      name: "Skin Wellness",
      img: "https://blog.krishnaayurved.com/wp-content/uploads/2024/05/Category_banner-Skin-Wellness-400x400.jpg" 
    },

    { id: 3, name: "Pain Reliever", img: "https://blog.krishnaayurved.com/wp-content/uploads/2024/05/Category_banner-Pain-Reliever-400x400.webp" },
    { id: 4, name: "Immunity Wellness", img: "https://blog.krishnaayurved.com/wp-content/uploads/2024/05/Category_Immunity-Wellness-400x400.webp" },
    { id: 5, name: "Digestive Wellness", img: "https://blog.krishnaayurved.com/wp-content/uploads/2024/05/Category_banner-Digestive-Wellness-400x400.webp" },
    { id: 6, name: "Diabetic Wellness", img: "https://blog.krishnaayurved.com/wp-content/uploads/2024/05/Category_banner-Diabetic-Wellness-copy-400x400.jpg" },
    { id: 7, name: "Blood Purifier", img: "https://blog.krishnaayurved.com/wp-content/uploads/2024/05/Category_banner-Blood-Purifier-copy-400x400.jpg" },
];

const TopCategories = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 bg-white relative">
            <h2 className="text-2xl font-serif text-[#1a1a1a] mb-10">Top Categories</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
                {categories.map((cat, index) => (
                    <motion.div
                        key={cat.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center group cursor-pointer"
                    >
                        {/* Squircle Image Container */}
                        <div className="w-full aspect-square overflow-hidden rounded-[40px] mb-4 transition-transform duration-300 group-hover:scale-105 shadow-sm">
                            <img
                                src={cat.img}
                                alt={cat.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Title */}
                        <p className="text-[#2E5B37] font-serif text-center text-lg hover:text-orange-300 md:text-base leading-snug group-hover:underline">
                            {cat.name}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Floating Scroll to Top Button - Bottom Right */}
            <div className="fixed bottom-8 right-8 z-50">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-12 h-12 bg-[#2D2D2D] text-white rounded-xl flex items-center justify-center shadow-lg hover:bg-black transition-colors group"
                >
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </motion.div>
                    {/* Small orange accent dot/line as seen in image */}
                    <div className="absolute top-0 right-0 w-2 h-2 bg-[#F37021] rounded-full -mt-1 -mr-1" />
                </button>
            </div>
        </section>
    );
};

export default TopCategories;