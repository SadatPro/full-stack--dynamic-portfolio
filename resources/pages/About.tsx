
import React from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Card from '../components/GlassmorphicCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { data } = usePortfolioData();
  const [containerRef, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div ref={containerRef} className={`max-w-4xl mx-auto space-y-8 scroll-animate ${isVisible ? 'is-visible' : ''}`}>
      <h2 className="text-3xl font-bold text-center text-white">About Me<span className="text-gradient-cyan">.</span></h2>
      <Card className="p-6 md:p-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 flex flex-col items-center text-center">
            <img 
              src={data.about?.imageUrl || '/placeholder-profile.jpg'} 
              alt="Profile" 
              className="w-48 h-48 rounded-full object-cover border-4 border-gray-700 shadow-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-white">{data.home?.name || 'Your Name'}</h2>
            <p className="text-cyan-400">{data.home?.taglines?.[0] || 'Software Engineer'}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">My Story<span className="text-gradient-cyan">.</span></h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              {data.about?.bio || 'No bio available.'}
            </p>
            <h4 className="text-xl font-bold mb-4 text-white">Core Competencies</h4>
            <div className="flex flex-wrap gap-2">
                {data.about?.skills?.map(skill => (
                    <span key={skill.name} className="skill-tag">{skill.name}</span>
                ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;
