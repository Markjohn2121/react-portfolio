import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Instagram, 
  AtSign,
  Code, 
  Palette, 
  Briefcase,
  MessageSquare,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialMedia from './components/SocialMedia';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="container mx-auto px-4 pt-20">
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <section id="social" className="py-8">
          <SocialMedia />
        </section>

        <section id="about" className="py-16">
          <About />
        </section>

        <section id="skills" className="py-16">
          <Skills />
        </section>

        <section id="projects" className="py-16">
          <Projects />
        </section>

        <section id="services" className="py-16">
          <Services />
        </section>

        <section id="testimonials" className="py-16">
          <Testimonials />
        </section>

        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;