import { useState } from "react";
import { Search, User, ShoppingBag, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";
import { categories, products } from "../data/Data";

export default function Navbar() {

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
<nav className="w-full bg-white fixed top-0 z-50 border-b px-10 py-4 flex items-center justify-between">

      {/* Logo */}
      <img src={logo} className="h-10" />

      {/* Menu */}
      <ul className="flex items-center gap-8 text-gray-700 font-medium">

        {/* Category */}
        <li
          className="cursor-pointer"
          onMouseEnter={() => setCategoryOpen(true)}
          onMouseLeave={() => setCategoryOpen(false)}
        >
          <div className="flex items-center gap-1">
            Category <ChevronDown size={16} />
          </div>
        </li>

        {/* Products */}
        <li
          className="cursor-pointer"
          onMouseEnter={() => setProductOpen(true)}
          onMouseLeave={() => setProductOpen(false)}
        >
          <div className="flex items-center gap-1">
            Products <ChevronDown size={16} />
          </div>
        </li>

        <li>Combos</li>
        <li>Offers</li>
        <li>Consult by Vaidya</li>
        <li>Rewards</li>
        <li>Blog</li>

      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <Search />
        <User />
        <div className="relative">
          <ShoppingBag />
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1 rounded-full">
            0
          </span>
        </div>
      </div>

      {/* CATEGORY DROPDOWN */}
      {categoryOpen && (
        <div
          onMouseEnter={() => setCategoryOpen(true)}
          onMouseLeave={() => setCategoryOpen(false)}
          className="absolute left-0 top-full w-full bg-white shadow-lg py-8 px-12"
        >
          <div className="grid grid-cols-6 gap-8">

            {categories.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 rounded-xl p-3 text-center cursor-pointer hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  className="w-full h-32 object-cover rounded-lg"
                />

                <p className="text-sm mt-2 font-medium">
                  {item.name}
                </p>
              </div>
            ))}

          </div>
        </div>
      )}

      {/* PRODUCTS DROPDOWN */}
      {productOpen && (
        <div
          onMouseEnter={() => setProductOpen(true)}
          onMouseLeave={() => setProductOpen(false)}
          className="absolute left-0 top-full w-full bg-white shadow-lg py-1 px-12"
        >
          <div className="grid grid-cols-6 gap-8">

            {products.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 rounded-xl p-3 text-center cursor-pointer hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  className="w-full h-32 object-cover rounded-lg"
                />

                <p className="text-sm mt-2 font-medium">
                  {item.name}
                </p>
              </div>
            ))}

          </div>
        </div>
      )}

    </nav>
  );
}