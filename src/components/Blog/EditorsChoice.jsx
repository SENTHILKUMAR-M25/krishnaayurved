import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';

const EditorsChoice = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 bg-white">
      
      <h2 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-6 md:mb-8">
        Editor's Choice
      </h2>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#2E4A2E] rounded-2xl overflow-hidden md:flex"
      >

        {/* LEFT CONTENT */}
        <div className="flex-1 p-6 md:p-10 lg:p-14 text-white flex flex-col justify-between">
          
          <div>
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <span className="text-[10px] tracking-widest uppercase opacity-80">
                IMMUNITY WELLNESS
              </span>
              <div className="h-1 w-8 bg-white/40" />
            </div>

            <h3 className="text-xl md:text-3xl lg:text-4xl font-serif mb-4 md:mb-6 leading-snug">
              B12 Options For Vegetarians: Foods to Boost Vitamin B12 Naturally
            </h3>

            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              Sometimes, taking care of your nutrition can feel like work, especially if you are 
              a vegetarian...
            </p>
          </div>

          <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/10 pt-4 md:pt-6">
            <span className="text-[11px] text-white/70 italic">
              By Krishna's Herbal & Ayurveda — 5.7 min read
            </span>

            <button className="flex items-center gap-2 text-sm font-bold hover:text-orange-400 group">
              Continue Reading
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="lg:w-1/2 relative bg-[#3D5A3D] flex items-center justify-center">

          {/* Background texture */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]" />

          <div className="relative w-full h-full flex items-center justify-center lg:justify-end px-6 md:px-10">

            {/* IMAGE */}
            <div className="relative z-10">
              <div className="w-full relative   h-64 md:h-80 lg:h-96 overflow-hidden rounded-md border-[6px] border-white/10 shadow-xl">
                <img
                  src="https://blog.krishnaayurved.com/wp-content/uploads/2026/03/B12-Options-For-Vegetarians-Foods-to-Boost-Vitamin-B12-Naturally-1200x650.jpg"
                  alt="Vitamin"
                  className="w-full h-full  object-cover"
                />
                
              </div>

              {/* TEXT CARD */}
              
            </div>

          </div>

          {/* BORDER */}
          <div className="absolute inset-6 border border-white/10 hidden lg:block" />
        </div>
      </motion.div>
    </section>
  );
};

export default EditorsChoice;