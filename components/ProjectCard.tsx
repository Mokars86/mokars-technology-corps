
import React from 'react';
import { Project, ProjectStatus } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.COMPLETED: return 'bg-emerald text-white';
      case ProjectStatus.ONGOING: return 'bg-royal text-white';
      case ProjectStatus.UPCOMING: return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusColor(project.status)} shadow-sm`}>
          {project.status}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-heading font-bold mb-2 text-royal">{project.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1">
            <span>Project Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-1000 ${project.status === ProjectStatus.COMPLETED ? 'bg-emerald' : 'bg-royal'}`}
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map(tech => (
            <span key={tech} className="bg-blue-50 text-royal text-[10px] font-bold px-2 py-1 rounded uppercase">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto border-t border-gray-50 pt-4">
          <p className="text-xs font-medium text-emerald flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald"></span>
            {project.impact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
