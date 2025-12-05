
import React, { useState } from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Card from '../components/GlassmorphicCard';
import { Project } from '../types';
import { ExternalLinkIcon, CodeIcon } from '../assets/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProjectModal from '../components/ProjectModal';

const ProjectCard: React.FC<{ project: Project; onLearnMore: () => void }> = ({ project, onLearnMore }) => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div ref={ref} className={`scroll-animate ${isVisible ? 'is-visible' : ''} mb-4`}>
        <Card className="flex flex-col overflow-hidden" hoverEffect={true} onClick={onLearnMore}>
            {/* Reddit style: Header with small meta info could go here */}
            <div className="flex flex-col md:flex-row">
                {/* Thumbnail on the left/top */}
                <div className="w-full md:w-48 h-48 md:h-auto bg-gray-900 flex-shrink-0">
                     <img src={project.images?.[0] || '/placeholder-project.jpg'} alt={project.title} className="w-full h-full object-cover" />
                </div>
                
                {/* Content */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:underline">{project.title}</h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.techStack?.slice(0, 4).map(tech => (
                            <span key={tech} className="text-xs bg-gray-800 text-gray-300 font-medium px-2 py-1 rounded-full border border-gray-700">
                            {tech}
                            </span>
                        ))}
                         {project.techStack?.length > 4 && (
                            <span className="text-xs text-gray-500 py-1">+ {project.techStack.length - 4} more</span>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Footer Action Bar */}
            <div className="bg-[#272729] dark:bg-[#1A1A1B] border-t border-gray-700 p-2 px-4 flex justify-between items-center text-xs font-bold text-gray-500">
                 <div className="flex space-x-4">
                     <span className="hover:bg-gray-800 p-1.5 rounded flex items-center gap-1 cursor-pointer transition-colors" onClick={(e) => { e.stopPropagation(); window.open(project.repoUrl, '_blank')}}>
                         <CodeIcon className="w-5 h-5" /> Comments
                     </span>
                     <span className="hover:bg-gray-800 p-1.5 rounded flex items-center gap-1 cursor-pointer transition-colors" onClick={(e) => { e.stopPropagation(); window.open(project.liveUrl, '_blank')}}>
                         <ExternalLinkIcon className="w-5 h-5" /> Share
                     </span>
                 </div>
                 <span className="bg-gray-800 px-2 py-0.5 rounded-full">Project</span>
            </div>
        </Card>
    </div>
  );
};

const Projects: React.FC = () => {
  const { data } = usePortfolioData();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="feed-container">
      <div className="flex justify-between items-center mb-6 px-2">
         <h2 className="text-xl font-bold text-white">Projects Feed</h2>
         <div className="flex space-x-2 text-sm font-bold text-gray-400 bg-[#1A1A1B] border border-gray-700 rounded-full px-2 py-1">
             <button className="px-3 py-1 rounded-full bg-gray-700 text-white">Hot</button>
             <button className="px-3 py-1 hover:bg-gray-800 rounded-full">New</button>
             <button className="px-3 py-1 hover:bg-gray-800 rounded-full">Top</button>
         </div>
      </div>
      
      <div className="space-y-4">
        {data.projects?.map(project => (
          <ProjectCard key={project.id} project={project} onLearnMore={() => setSelectedProject(project)} />
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default Projects;
