import React from "react";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-12">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">KeenKeeper</h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <p className="font-semibold mb-3">Social Links</p>

        <div className="flex justify-center gap-4 mb-10">
          <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
            <FaYoutube />
          </div>
          <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
            <FaFacebookF />
          </div>
          <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
            <FaXTwitter />
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
