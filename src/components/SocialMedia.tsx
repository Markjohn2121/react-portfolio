import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Facebook, Instagram, AtSign } from 'lucide-react';

const SocialMedia: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('social');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center space-x-8">
      {[
        { icon: <Facebook size={24} />, url: 'https://facebook.com/[username]', delay: 0 },
        { icon: <Instagram size={24} />, url: 'https://instagram.com/[username]', delay: 0.1 },
        { icon: <AtSign size={24} />, url: 'https://threads.net/[username]', delay: 0.2 },
        { icon: <Linkedin size={24} />, url: 'https://linkedin.com/in/[username]', delay: 0.3 },
        { icon: <Github size={24} />, url: 'https://github.com/[username]', delay: 0.4 },
      ].map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon p-3 rounded-full hover:bg-gray-800 transition-all duration-300 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: `${social.delay}s` }}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;