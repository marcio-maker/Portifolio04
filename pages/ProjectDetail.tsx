import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projetos" />;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
      <Link to="/projetos" className="inline-flex items-center gap-2 text-accent hover:text-accent2 transition-colors mb-4">
        ← Voltar para Projetos
      </Link>
      
      <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-accent/20 text-white text-sm rounded-full backdrop-blur-md border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-card p-6 md:p-8 rounded-xl border border-white/10">
            <h2 className="text-xl font-bold text-text mb-4">Sobre o Projeto</h2>
            <p className="text-muted leading-relaxed">
              {project.fullDescription || project.description}
            </p>
            <p className="text-muted leading-relaxed mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-bold text-text mb-4">Informações</h3>
            <div className="space-y-4">
              <div>
                <div className="text-xs text-muted uppercase tracking-wider">Cliente</div>
                <div className="text-text font-medium">Confidencial</div>
              </div>
              <div>
                <div className="text-xs text-muted uppercase tracking-wider">Ano</div>
                <div className="text-text font-medium">2024</div>
              </div>
              <div>
                <div className="text-xs text-muted uppercase tracking-wider">Role</div>
                <div className="text-text font-medium">Lead Developer & UI Designer</div>
              </div>
            </div>
            <button className="w-full mt-6 py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-all">
              Ver Demo Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;