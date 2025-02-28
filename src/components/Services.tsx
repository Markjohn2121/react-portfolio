import React, { useEffect, useState } from 'react';
import { Code, Layout, BookOpen } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  pricing: string;
}

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const services: Service[] = [
    {
      title: "Landing Page Creation",
      description: "Custom-designed landing pages to boost your online presence. Includes responsive design, SEO optimization, and conversion-focused elements.",
      icon: <Layout size={40} />,
      pricing: "Starting at $XXX"
    },
    {
      title: "Programming Material and Tutorials",
      description: "Educational content and resources for learning programming. Includes custom tutorials, code examples, and personalized learning paths.",
      icon: <BookOpen size={40} />,
      pricing: "Starting at $XXX"
    },
    {
      title: "Budget Programmer",
      description: "Affordable coding solutions for small projects. Perfect for startups and small businesses looking to establish their digital presence.",
      icon: <Code size={40} />,
      pricing: "Starting at $XXX"
    }
  ];

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

    const element = document.getElementById('services');
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
    <div className="max-w-6xl mx-auto">
      <h2 className={`text-3xl font-bold mb-8 section-title ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        My Services
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="p-6">
              <div className="text-[#ff6b00] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="text-[#ff6b00] font-medium">{service.pricing}</div>
            </div>
            <div className="bg-gray-700 p-4">
              <a href="#contact" className="text-white hover:text-[#ff6b00] transition-colors">
                Request Service →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;