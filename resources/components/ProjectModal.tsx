
import React from 'react';
import { Project } from '../types';
import Card from './GlassmorphicCard';
import { CloseIcon, ExternalLinkIcon, CodeIcon } from '../assets/icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 k-bar-backdrop" onClick={onClose}>
      <Card className="modal-bg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 relative animate-fade-in" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full header-btn z-10" aria-label="Close modal">
          <CloseIcon className="w-6 h-6" />
        </button>
        
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">{project.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <img src={project.images[0]} alt={project.title} className="rounded-lg object-cover w-full h-full" />
          <div className="space-y-4">
            {project.images.slice(1).map((img, index) => (
              <img key={index} src={img} alt={`${project.title} screenshot ${index + 1}`} className="rounded-lg object-cover w-full h-auto" />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map(tech => (
            <span key={tech} className="text-xs bg-cyan-500/10 text-cyan-400 font-semibold px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">{project.longDescription}</p>

        <div className="flex space-x-4 text-gray-300">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 hover:text-cyan-400 transition-colors">
              <ExternalLinkIcon className="w-5 h-5" />
              <span>Live Site</span>
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 hover:text-cyan-400 transition-colors">
              <CodeIcon className="w-5 h-5" />
              <span>Repository</span>
            </a>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ProjectModal;
