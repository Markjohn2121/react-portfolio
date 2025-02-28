import React, { useEffect, useState } from 'react';
import { Code, Palette, Briefcase } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: boolean }>({});

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      title: 'Design Tools',
      icon: <Palette size={24} />,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Photoshop', level: 70 },
        { name: 'Illustrator', level: 65 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: <Briefcase size={24} />,
      skills: [
        { name: 'Communication', level: 95 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Teamwork', level: 85 },
        { name: 'Time Management', level: 80 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate skills progressively
          skillCategories.forEach(category => {
            category.skills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [skill.name]: true
                }));
              }, index * 200);
            });
          });
          
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
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
        My Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={categoryIndex} 
            className={`bg-gray-800 p-6 rounded-lg ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: `${categoryIndex * 0.2}s` }}
          >
            <div className="flex items-center mb-4">
              <div className="text-[#ff6b00] mr-3">{category.icon}</div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: animatedSkills[skill.name] ? `${skill.level}%` : '0%',
                        transition: 'width 1s ease-in-out'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;