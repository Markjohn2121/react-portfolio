import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white">
          <span className="text-[#ff6b00]">Port</span>folio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-[#ff6b00] transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-[#ff6b00] transition-colors">About</a>
          <a href="#skills" className="text-white hover:text-[#ff6b00] transition-colors">Skills</a>
          <a href="#projects" className="text-white hover:text-[#ff6b00] transition-colors">Projects</a>
          <a href="#services" className="text-white hover:text-[#ff6b00] transition-colors">Services</a>
          <a href="#contact" className="text-white hover:text-[#ff6b00] transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-40 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          <a href="#home" className="text-white hover:text-[#ff6b00] transition-colors" onClick={closeMenu}>Home</a>
          <a href="#about" className="text-white hover:text-[#ff6b00] transition-colors" onClick={closeMenu}>About</a>
          <a href="#skills" className="text-white hover:text-[#ff6b00] transition-colors" onClick={closeMenu}>Skills</a>
          <a href="#projects" className="text-white hover:text-[#ff6b00] transition-colors" onClick={closeMenu}>Projects</a>
          <a href="#services" className="text-white hover:text-[#ff6b00] transition-colors" onClick={closeMenu}>Services</a>
          <a href="#contact" className="text-white hover:text-[#ff6b00] transition-colors" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;