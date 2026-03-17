import React from 'react';
import { motion } from 'framer-motion';

const ConsultationSection = () => {
  return (
    <section className="bg-[#E9EDE9] py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Promotional Banner */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden shadow-xl aspect-video md:aspect-auto"
        >
          {/* Banner Background & Content Simulation */}
             

             {/* Doctor Images (Simulated with absolute positioning) */}
                <img 
                  src="https://blog.krishnaayurved.com/wp-content/uploads/2026/01/Doc-Consultation-Banner-800x367.jpg" 
                  alt="Doctors" 
                  className=" object-cover grayscale-[0.2] contrast-125"
                  style={{ maskImage: 'linear-gradient(to left, black 80%, transparent)' }}
                />
        </motion.div>

        {/* Right Side: CTA Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h2 className="text-[#2E5B37] text-3xl md:text-4xl font-serif mb-6">
            Online Consultation with ayurvedic doctor
          </h2>

          {/* Wiggly/Squiggly Divider SVG */}
          <div className="w-full mb-8 overflow-hidden">
            <svg width="100%" height="20" viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10 T 120 10 T 140 10 T 160 10 T 180 10 T 200 10 T 220 10 T 240 10 T 260 10 T 280 10 T 300 10 T 320 10 T 340 10 T 360 10 T 380 10 T 400 10" 
                stroke="#D1D5DB" 
                strokeWidth="1"
              />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            <p className="text-gray-700 text-lg leading-relaxed flex-1">
              Connect with certified vaidyas, nutritionists, & fitness experts of 
              Krishna's Herbal & Ayurveda.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F37021] text-white font-bold py-5 px-16 rounded-[2rem] shadow-lg whitespace-nowrap"
            >
              Book now
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConsultationSection;