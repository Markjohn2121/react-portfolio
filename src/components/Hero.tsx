import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between">
      {/* Text Content */}
      <div className={`w-full md:w-1/2 mt-10 md:mt-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-in-left">
          Hi, I'm <span className="text-[#ff6b00]">[Name]</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
          A <span className="text-[#ff6b00]">[Profession]</span> passionate about <span className="text-[#ff6b00]">[Focus]</span>
        </h2>
        <p className="text-gray-300 mb-8 max-w-lg animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
          Welcome to my portfolio! I create innovative solutions that combine creativity with technical expertise.
        </p>
        <div className="flex space-x-4 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
          <a href="#contact" className="btn-primary">Get in Touch</a>
          <a href="#projects" className="btn-outline">View Projects</a>
        </div>
      </div>

      {/* Profile Image */}
      <div className={`w-full md:w-1/2 flex justify-center md:justify-end transition-all duration-1000 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
        <div className="profile-image-container w-64 h-64 md:w-80 md:h-80">
          <div className="profile-image-blur"></div>
          <div className="profile-image">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;