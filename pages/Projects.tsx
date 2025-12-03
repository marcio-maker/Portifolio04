import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent2 inline-block">
          Meus Projetos
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Uma seleção dos trabalhos mais recentes e relevantes, focados em performance, usabilidade e inovação.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <Card key={project.id} className="flex flex-col h-full group">
            <div className="overflow-hidden rounded-lg mb-4 h-48 relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link to={`/project/${project.id}`} className="px-4 py-2 bg-white text-black font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                  Ver Projeto
                </Link>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-text mb-2">{project.title}</h3>
            <p className="text-muted text-sm mb-4 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-1 text-xs font-medium rounded-md bg-accent/10 text-accent border border-accent/20">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;