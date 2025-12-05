
import React from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Card from '../components/GlassmorphicCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SkillCategory: React.FC<{ category: string; tools: any[] }> = ({ category, tools }) => {
    const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
    return (
        <div ref={ref} className={`scroll-animate ${isVisible ? 'is-visible' : ''}`}>
            <Card className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">{category}</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 text-center">
                    {tools?.map(tool => (
                    <div key={tool.id} className="flex flex-col items-center group">
                        <img 
                        src={tool.iconUrl} 
                        alt={tool.name} 
                        className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="mt-2 text-xs text-gray-400">{tool.name}</span>
                    </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}

const Skills: React.FC = () => {
  const { data } = usePortfolioData();

  // Group skills by category
  const skillsByCategory = data.skillsAndTools?.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<string, typeof data.skillsAndTools>) || {};

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills &amp; Tools<span className="text-gradient-cyan">.</span></h2>
      
      {Object.entries(skillsByCategory).map(([category, tools]) => (
        <SkillCategory key={category} category={category} tools={tools} />
      ))}
    </div>
  );
};

export default Skills;
