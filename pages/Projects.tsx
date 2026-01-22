
import React, { useState } from 'react';
import { ProjectStatus } from '../types';
import { PROJECTS } from '../constants.tsx';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectStatus | 'All'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.status === filter);

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-royal py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-heading font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            Explore our portfolio of innovative solutions across agriculture, healthcare, and energy sectors.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-4 inline-flex flex-wrap gap-2 border border-gray-100">
          {['All', ProjectStatus.COMPLETED, ProjectStatus.ONGOING, ProjectStatus.UPCOMING].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status as any)}
              className={`px-6 py-2 rounded-xl font-bold transition-all ${
                filter === status 
                ? 'bg-royal text-white shadow-md' 
                : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <h3 className="text-2xl font-heading font-bold text-gray-400">No projects found for this category.</h3>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
