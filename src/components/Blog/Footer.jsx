import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, Phone, Mail, ArrowRight } from 'lucide-react';
import logo from '../../assets/logo.png';
const Footer = () => {
  const footerSections = {
    INFORMATION: ['About us', 'Contact us', 'Media'],
    BLOG: ['Blood Purifier', 'Diabetic Wellness', 'Digestive Wellness', 'Immunity Wellness', 'Pain Reliever', 'Skin Wellness'],
    SHOP: ['Juices', 'Herbal Powders', 'Tablets', 'Oils', 'Cosmetics'],
    LEGAL: ['Terms And Conditions', 'Privacy Policy', 'Disclaimer', 'Refunds and Cancellation Policy']
  };

  return (
    <footer className="relative mt-20 bg-[#FDF0E9] pt-24 pb-12 overflow-hidden">
      {/* 1. THE TOP WAVE SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-20"
          fill="white" // Matches the background above the footer
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2,1200,10.19V0Z opacity-100"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,104.5,23.11,33.32,13.56,65.3,27.77,101.37,31.54,30.1,3.14,59.34-2.22,87.69-12.28C776.11,31,811.09,10,845.87,14c35,4,66,24.78,98,41.22,23.33,12,47,19.22,71,23.1,32,5.2,64.22-3.35,93-21V0Z" opacity=".25"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <img src={logo} alt="" />
          
          <button className="bg-[#2E4A2E] text-white px-8 py-3 rounded-full flex items-center gap-2 font-bold text-sm hover:bg-[#1f331f] transition-all">
            Book Appointment <ArrowRight size={18} />
          </button>
        </div>

        {/* 2. THE SQUIGGLY DIVIDER */}
        <div className="w-full mb-12 opacity-30">
          <svg width="100%" height="20" viewBox="0 0 1200 20" fill="none">
            <path 
              d="M0 10 C 20 0, 40 20, 60 10 S 100 0, 120 10 S 160 20, 180 10 S 220 0, 240 10 S 280 20, 300 10 S 340 0, 360 10 S 400 20, 420 10 S 460 0, 480 10 S 520 20, 540 10 S 580 0, 600 10 S 640 20, 660 10 S 700 0, 720 10 S 760 20, 780 10 S 820 0, 840 10 S 880 20, 900 10 S 940 0, 960 10 S 1000 20, 1020 10 S 1060 0, 1080 10 S 1120 20, 1140 10 S 1180 0, 1200 10" 
              stroke="#8B4513" 
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-[#2D2D2D] text-xs tracking-[0.2em] mb-6 uppercase">{title}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-[#555] text-[13px] hover:text-[#F37021] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h4 className="font-bold text-[#2D2D2D] text-xs tracking-[0.2em] mb-6 uppercase">GET IN TOUCH</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#555] text-[13px]">
                <Phone size={16} className="text-[#2D2D2D]" /> 0291 3529700
              </li>
              <li className="flex items-center gap-3 text-[#555] text-[13px]">
                <Mail size={16} className="text-[#2D2D2D]" /> care@krishnaayurved.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] text-[#555]">
            © 2024 — Krishna's Herbal & Ayurveda • All rights reserved.
          </p>
          
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 bg-black/5 rounded-lg flex items-center justify-center text-[#2D2D2D] hover:bg-[#F37021] hover:text-white transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;