import React, { useEffect, useState } from 'react';

const About: React.FC = () => {
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

    const element = document.getElementById('about');
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
    <div className="max-w-4xl mx-auto">
      <h2 className={`text-3xl font-bold mb-8 section-title ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        About Me
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className={`md:w-1/2 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <p className="text-lg text-gray-300 mb-6">
            With <span className="text-[#ff6b00]">[X]</span> years of experience in <span className="text-[#ff6b00]">[Field]</span>, 
            I specialize in <span className="text-[#ff6b00]">[Skills/Interests]</span>.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            My journey began when I discovered my passion for creating digital experiences that make a difference. 
            Since then, I've been dedicated to honing my craft and delivering exceptional results for clients and teams alike.
          </p>
          <p className="text-lg text-gray-300">
            When I'm not working, you can find me [Hobbies/Interests]. I believe that [Personal Philosophy/Approach].
          </p>
        </div>
        
        <div className={`md:w-1/2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#ff6b00]">Quick Facts</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#ff6b00] mr-2">•</span>
                <span>Based in [Location]</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff6b00] mr-2">•</span>
                <span>[Degree/Certification] in [Field]</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff6b00] mr-2">•</span>
                <span>Completed [Number] projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff6b00] mr-2">•</span>
                <span>Worked with clients from [Industries/Countries]</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff6b00] mr-2">•</span>
                <span>Fluent in [Languages]</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;