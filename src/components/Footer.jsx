import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>© {new Date().getFullYear()} Flames IT. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-orange-400">About</a>
            <a href="#services" className="hover:text-orange-400">Services</a>
            <a href="#products" className="hover:text-orange-400">Products</a>
            <a href="#why" className="hover:text-orange-400">Why Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
