import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a demo form - in a real portfolio, this would send your message.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className={`text-3xl font-bold mb-8 section-title ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        Get In Touch
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className={`md:w-1/2 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#ff6b00]"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#ff6b00]"
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="contact-input w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#ff6b00]"
                placeholder="Project Inquiry"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="contact-input w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#ff6b00]"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn-primary w-full"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className={`md:w-1/2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="bg-gray-800 p-6 rounded-lg h-full">
            <h3 className="text-xl font-semibold mb-6 text-[#ff6b00]">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-[#ff6b00] mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-[#ff6b00] transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#ff6b00] mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-[#ff6b00] transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#ff6b00] mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-300">
                    [Your City], [Your Country]
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-3">Working Hours</h4>
              <p className="text-gray-300 mb-2">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-300">
                Weekend: Available for urgent matters
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;