import React from 'react';
import { Rocket, Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-white">
            <Rocket className="h-6 w-6 text-orange-500" />
            <span>Flames IT</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-orange-400 transition">About</a>
            <a href="#products" className="hover:text-orange-400 transition">Products</a>
            <a href="#services" className="hover:text-orange-400 transition">Services</a>
            <a href="#why" className="hover:text-orange-400 transition">Why Us</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white transition">Contact</a>
          </nav>
          <button aria-label="Open Menu" className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-white/5" onClick={() => setOpen(!open)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <div className="md:hidden py-4 space-y-2">
            <a href="#about" className="block px-3 py-2 rounded hover:bg-white/5">About</a>
            <a href="#products" className="block px-3 py-2 rounded hover:bg-white/5">Products</a>
            <a href="#services" className="block px-3 py-2 rounded hover:bg-white/5">Services</a>
            <a href="#why" className="block px-3 py-2 rounded hover:bg-white/5">Why Us</a>
            <a href="#contact" className="block px-3 py-2 rounded bg-orange-500 text-white">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
