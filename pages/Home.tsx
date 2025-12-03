import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import Carousel3D from '../components/Carousel3D';
import Card from '../components/Card';
import { PROJECTS, SERVICES } from '../constants';
import { useTilt } from '../hooks/useTilt';

const Home: React.FC = () => {
  const heroRef = useTilt();
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      gsap.from('.stat-item', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="space-y-12">
      {/* Parallax Hero */}
      <div 
        className="w-full h-[240px] md:h-[300px] rounded-2xl bg-cover bg-center relative mb-8 animate-[changeBackground_15s_infinite_ease-in-out] shadow-2xl"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=60')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-bg/90 to-accent/20 rounded-2xl"></div>
      </div>

      {/* Intro Card */}
      <div ref={heroRef} className="hero-anim bg-card border border-white/10 rounded-2xl p-8 text-center relative -mt-20 mx-4 shadow-xl z-10 backdrop-blur-sm bg-opacity-95">
        <img 
          src="https://media.licdn.com/dms/image/v2/D4D03AQEyt_pZDkOL4A/profile-displayphoto-scale_400_400/B4DZq11V0OGkAk-/0/1763987251706?e=1766016000&v=beta&t=zAoRpkFJE7hXj9c9QSqw__MzhitysBJRtbup-DmfZIA" 
          alt="Avatar" 
          className="w-28 h-28 rounded-2xl mx-auto border-4 border-accent shadow-lg mb-6 object-cover"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-2">Criando produtos que encantam e vendem</h2>
        <p className="text-muted text-lg mb-6 max-w-2xl mx-auto">
          Especialista em PWA, Inteligência Artificial e interfaces modernas. Transformo código em experiências de valor.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/contato" className="px-6 py-3 bg-accent text-white rounded-xl font-medium hover:bg-accent2 transition-transform hover:-translate-y-1 shadow-lg shadow-accent/20">
            Entre em Contato
          </Link>
          <Link to="/projetos" className="px-6 py-3 border border-white/20 text-text rounded-xl font-medium hover:bg-white/5 transition-transform hover:-translate-y-1">
            Ver Projetos
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[
          { label: 'Projetos', value: '50+' },
          { label: 'Experiência', value: '8 Anos' },
          { label: 'Satisfação', value: '98%' },
          { label: 'Suporte', value: '24/7' },
        ].map((stat, idx) => (
          <div key={idx} className="stat-item bg-card border border-white/10 p-4 rounded-xl text-center hover:border-accent/40 transition-colors">
            <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
            <div className="text-sm text-muted">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Carousel */}
      <div className="hero-anim">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-text">Destaques</h3>
          <p className="text-muted">Projetos recentes que definem meu padrão de qualidade.</p>
        </div>
        <Carousel3D items={PROJECTS.filter(p => p.category === 'dev')} />
      </div>

      {/* Services Grid */}
      <div className="hero-anim">
        <h3 className="text-2xl font-bold text-text mb-6 text-center">Serviços</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => (
            <Card key={service.id} className="h-full flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-2xl mb-4">
                {service.icon}
              </div>
              <h4 className="font-bold text-lg mb-2 text-text">{service.title}</h4>
              <p className="text-sm text-muted mb-4 flex-grow">{service.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-muted border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;