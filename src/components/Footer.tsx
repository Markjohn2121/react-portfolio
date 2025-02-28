import React from 'react';
import { Github, Linkedin, Facebook, Instagram, AtSign } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white">
              <span className="text-[#ff6b00]">Port</span>folio
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Creating innovative digital solutions with a focus on user experience and performance.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://facebook.com/[username]" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com/[username]" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={20} />
            </a>
            <a href="https://threads.net/[username]" target="_blank" rel="noopener noreferrer" className="social-icon">
              <AtSign size={20} />
            </a>
            <a href="https://linkedin.com/in/[username]" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/[username]" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} [Your Name]. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap space-x-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#ff6b00] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#ff6b00] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#ff6b00] transition-colors">Cookies Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;