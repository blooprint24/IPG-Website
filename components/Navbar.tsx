
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-neutral-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-lime-400 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Rocket className="w-6 h-6 text-black" />
          </div>
          <span className="text-2xl font-extrabold tracking-tighter">
            IPG<span className="text-lime-400">.</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-semibold hover:text-lime-400 transition-colors">Services</a>
          <a href="#features" className="text-sm font-semibold hover:text-lime-400 transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm font-semibold hover:text-lime-400 transition-colors">Pricing</a>
          <a href="#about" className="text-sm font-semibold hover:text-lime-400 transition-colors">About</a>
          <button className="bg-lime-400 text-black px-6 py-2.5 rounded-md font-bold hover:bg-lime-300 transition-all active:scale-95">
            Book a Strategy Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8 text-lime-400" /> : <Menu className="w-8 h-8 text-lime-400" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <a href="#services" onClick={() => setIsOpen(false)} className="text-2xl font-bold hover:text-lime-400">Services</a>
        <a href="#features" onClick={() => setIsOpen(false)} className="text-2xl font-bold hover:text-lime-400">How It Works</a>
        <a href="#pricing" onClick={() => setIsOpen(false)} className="text-2xl font-bold hover:text-lime-400">Pricing</a>
        <button className="bg-lime-400 text-black px-10 py-4 rounded-md font-bold text-xl" onClick={() => setIsOpen(false)}>
          Book a Strategy Call
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
