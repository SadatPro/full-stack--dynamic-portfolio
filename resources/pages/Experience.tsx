
import React from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Card from '../components/GlassmorphicCard';
import { BriefcaseIcon, UsersIcon } from '../assets/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const { data } = usePortfolioData();
  const [expRef, isExpVisible] = useScrollAnimation<HTMLDivElement>();
  const [collabRef, isCollabVisible] = useScrollAnimation<HTMLDivElement>();
  const [eduRef, isEduVisible] = useScrollAnimation<HTMLDivElement>();
  const [langRef, isLangVisible] = useScrollAnimation<HTMLDivElement>();


  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-center text-white">Experience & Education<span className="text-gradient-cyan">.</span></h2>
      
      <div ref={expRef} className={`scroll-animate ${isExpVisible ? 'is-visible' : ''}`}>
        <Card className="p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Professional Experience<span className="text-gradient-cyan">.</span></h3>
            <div className="relative border-l-2 border-gray-700 ml-4">
            {data.about?.experience?.map((exp) => (
                <div key={exp.id} className="mb-10 ml-10 relative">
                <span className="absolute flex items-center justify-center w-8 h-8 card-bg rounded-full -left-[30px] ring-4 ring-gray-700">
                    <BriefcaseIcon className="w-5 h-5 text-cyan-400" />
                </span>
                <h4 className="font-bold text-lg text-white">{exp.role}</h4>
                <p className="font-semibold text-cyan-400 mb-1">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                    {exp.responsibilities?.map((resp, i) => <li key={i}>{resp}</li>)}
                </ul>
                </div>
            ))}
            </div>
        </Card>
      </div>

      <div ref={collabRef} className={`scroll-animate ${isCollabVisible ? 'is-visible' : ''}`}>
        <Card className="p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Collaborations<span className="text-gradient-cyan">.</span></h3>
            <div className="space-y-6">
            {data.about?.collaborations?.map((collab) => (
                <div key={collab.id} className="flex items-start space-x-4">
                <div className="flex-shrink-0 pt-1">
                    <UsersIcon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                    <h4 className="font-bold text-lg text-white">{collab.organization}</h4>
                    <p className="font-semibold text-cyan-400 mb-1">{collab.role}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{collab.description}</p>
                </div>
                </div>
            ))}
            </div>
        </Card>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div ref={eduRef} className={`scroll-animate ${isEduVisible ? 'is-visible' : ''}`}>
            <Card className="p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Education<span className="text-gradient-cyan">.</span></h3>
            <div className="space-y-4">
                {data.about?.education?.map(edu => (
                <div key={edu.id}>
                    <h4 className="font-bold text-white">{edu.degree}</h4>
                    <p className="text-cyan-400">{edu.institution}</p>
                    <p className="text-sm text-gray-400">{edu.period}</p>
                </div>
                ))}
            </div>
            </Card>
        </div>
        <div ref={langRef} className={`scroll-animate ${isLangVisible ? 'is-visible' : ''}`}>
            <Card className="p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Languages<span className="text-gradient-cyan">.</span></h3>
            <div className="space-y-2">
                {data.about?.languages?.map(lang => (
                <div key={lang.id} className="flex justify-between text-white">
                    <span>{lang.name}</span>
                    <span className="text-gray-400">{lang.proficiency}</span>
                </div>
                ))}
            </div>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;
