import React from 'react';
import Card from '../components/Card';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text mb-4">Sobre Mim</h2>
        <p className="text-muted text-lg">
          Desenvolvedor Full Stack, Entusiasta de IA e Criador de Produtos.
        </p>
      </div>

      <Card className="p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D03AQEyt_pZDkOL4A/profile-displayphoto-scale_400_400/B4DZq11V0OGkAk-/0/1763987251706?e=1766016000&v=beta&t=zAoRpkFJE7hXj9c9QSqw__MzhitysBJRtbup-DmfZIA" 
            alt="Márcio Maker" 
            className="w-40 h-40 rounded-full border-4 border-accent object-cover shadow-2xl"
          />
          <div className="space-y-4 text-left">
            <h3 className="text-2xl font-bold text-accent">Olá, eu sou o Márcio</h3>
            <p className="text-text leading-relaxed">
              Com mais de 8 anos de experiência no mercado de tecnologia, me especializei na intersecção entre engenharia de software robusta e design intuitivo. Acredito que o código não é apenas funcionalidade, mas uma forma de arte que resolve problemas reais.
            </p>
            <p className="text-text leading-relaxed">
              Meu foco atual é explorar o potencial dos Progressive Web Apps (PWA) para criar experiências mobile-first que rivalizam com apps nativos, integrando camadas de Inteligência Artificial para automação e personalização.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h4 className="text-xl font-bold text-accent mb-4">Hard Skills</h4>
          <ul className="space-y-3">
            {[
              { name: 'React / TypeScript', level: 95 },
              { name: 'Node.js / Python', level: 90 },
              { name: 'PWA / Service Workers', level: 95 },
              { name: 'Tailwind / UI Design', level: 90 },
              { name: 'GenAI Integration', level: 85 },
            ].map(skill => (
              <li key={skill.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-text font-medium">{skill.name}</span>
                  <span className="text-muted">{skill.level}%</span>
                </div>
                <div className="h-2 bg-bg rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-accent to-accent2 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h4 className="text-xl font-bold text-accent mb-4">Metodologia</h4>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <strong className="text-text block">Performance First</strong>
                <p className="text-sm text-muted">Otimização extrema de assets e renderização.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <strong className="text-text block">Mobile Centric</strong>
                <p className="text-sm text-muted">Pensado para o toque e telas pequenas desde o início.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🧩</span>
              <div>
                <strong className="text-text block">Arquitetura Modular</strong>
                <p className="text-sm text-muted">Código limpo, reutilizável e fácil de escalar.</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;