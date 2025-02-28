import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
  role: string;
  tools: string;
  link: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.",
      backgroundImage: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      role: "Full Stack Developer",
      tools: "React, Node.js, MongoDB",
      link: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing creative work with smooth animations and responsive design.",
      backgroundImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      role: "Frontend Developer",
      tools: "HTML, CSS, JavaScript",
      link: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity app that helps users organize tasks, set priorities, and track progress.",
      backgroundImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      role: "UI/UX Designer & Developer",
      tools: "Figma, React, Firebase",
      link: "#"
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      description: "A fitness tracking application that monitors workouts, nutrition, and provides personalized recommendations.",
      backgroundImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      role: "Mobile Developer",
      tools: "React Native, Redux, Firebase",
      link: "#"
    },
    {
      id: 5,
      title: "AI Content Generator",
      description: "An AI-powered tool that generates high-quality content for blogs, social media, and marketing materials.",
      backgroundImage: "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      role: "AI Engineer",
      tools: "Python, TensorFlow, OpenAI API",
      link: "#"
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

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    setContentVisible(false);
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeProject]);

  const handleProjectClick = (index: number) => {
    setActiveProject(index);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className={`text-3xl font-bold mb-8 section-title ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        My Projects
      </h2>
      
      <div 
        className={`project-bg h-[500px] rounded-lg mb-6 relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${projects[activeProject].backgroundImage})`,
          transition: 'background-image 0.5s ease-in-out'
        }}
      >
        <div className={`absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-500 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold mb-3 text-white">{projects[activeProject].title}</h3>
          <p className="text-gray-300 mb-4 max-w-2xl">{projects[activeProject].description}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-gray-800 bg-opacity-70 px-4 py-2 rounded-full">
              <span className="text-[#ff6b00] font-medium">Role:</span> {projects[activeProject].role}
            </div>
            <div className="bg-gray-800 bg-opacity-70 px-4 py-2 rounded-full">
              <span className="text-[#ff6b00] font-medium">Tools:</span> {projects[activeProject].tools}
            </div>
          </div>
          
          <a 
            href={projects[activeProject].link} 
            className="inline-flex items-center text-[#ff6b00] hover:text-[#ff8c33] transition-colors"
          >
            View Project <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
      
      <div className={`project-carousel pb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`project-item p-4 w-40 md:w-48 ${activeProject === index ? 'active border-b-2 border-[#ff6b00]' : ''}`}
            onClick={() => handleProjectClick(index)}
          >
            <div 
              className="h-24 rounded-md mb-2 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.backgroundImage})` }}
            ></div>
            <h4 className="text-sm font-medium truncate">{project.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;