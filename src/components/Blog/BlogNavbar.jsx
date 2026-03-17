import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

const BlogNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlogHovered, setIsBlogHovered] = useState(false);
  const [hovered, setHovered] = useState(null);

  const navLinks = [
    { name: 'BLOG HOME', href: '#', active: true },
    { name: 'BLOG', href: '#', hasDropdown: true },
    { name: 'SHOP', href: '#' },
    { name: 'CONSULT BY VAIDYA', href: '#' },
    { name: 'CONTACT', href: '#' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 px-4 py-3 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <img src={logo} alt="logo" className="h-10 w-auto" />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative cursor-pointer"
              onMouseEnter={() => {
                setHovered(link.name);
                if (link.hasDropdown) setIsBlogHovered(true);
              }}
              onMouseLeave={() => {
                setHovered(null);
                if (link.hasDropdown) setIsBlogHovered(false);
              }}
            >
              <a
                href={link.href}
                className={`text-sm font-bold tracking-wide flex items-center gap-1 transition-colors ${
                  link.active
                    ? 'text-[#F37021]'
                    : 'text-[#001D3D] hover:text-[#F37021]'
                }`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={16} />}
              </a>

              {/* Animated Underline */}
              {(hovered === link.name || link.active) && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-6.5 left-0 right-0 h-0.75 bg-[#F37021]"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}

              {/* Dropdown */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {isBlogHovered && hovered === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-4 w-48 bg-white shadow-xl rounded-md py-2 border border-gray-100"
                    >
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">
                        Latest Articles
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">
                        Ayurveda Tips
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center relative group">
          <input
            type="text"
            placeholder="Search Articles.."
            className="pl-4 pr-10 py-2.5 w-64 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#F37021]"
          />
          <Search className="absolute right-4 text-gray-400 group-focus-within:text-[#F37021]" size={18} />
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white mt-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 border-b border-gray-50 text-sm font-bold text-[#001D3D]"
              >
                {link.name}
              </a>
            ))}

            <div className="py-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-4 pr-10 py-2 border rounded-full text-sm"
                />
                <Search className="absolute right-4 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default BlogNavbar;