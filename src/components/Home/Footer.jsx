import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#cfd6cf] text-gray-800 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* About Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About Us</h3>
          <ul className="space-y-3 text-sm">
            <li className=" cursor-pointer hover:underline">About Us</li>
            <li className=" cursor-pointer hover:underline">Contact Us</li>
            <li className=" cursor-pointer hover:underline">Media</li>
            <li className=" cursor-pointer hover:underline">Work with us</li>
            <li className=" cursor-pointer hover:underline">Blog</li>
            <li className=" cursor-pointer hover:underline">Collaborate / Become Affiliate</li>
            <li className=" cursor-pointer hover:underline">Consult</li>
          </ul>
        </div>

        {/* Your Account */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Your Account</h3>
          <ul className="space-y-3 text-sm">
            <li className=" cursor-pointer hover:underline">Login</li>
            <li className=" cursor-pointer hover:underline">Create Account</li>
            <li className=" cursor-pointer hover:underline">Rewards</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Policies</h3>
          <ul className="space-y-3 text-sm">
            <li className=" cursor-pointer hover:underline">Terms & Conditions</li>
            <li className=" cursor-pointer hover:underline">Privacy Policy</li>
            <li className=" cursor-pointer hover:underline">Shipping Policy</li>
            <li className=" cursor-pointer hover:underline">Return Policy</li>
            <li className=" cursor-pointer hover:underline">Disclaimer</li>
          </ul>
        </div>

        {/* Get the App */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get the App</h3>

          <div className="space-y-4">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="w-36 cursor-pointer"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-36 cursor-pointer"
            />
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Let's Connect</h3>

         
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-16 border-t border-gray-400 pt-6 text-center text-sm">
        © 2026, Krishna's Herbal & Ayurveda.
      </div>
    </footer>
  );
};

export default Footer;