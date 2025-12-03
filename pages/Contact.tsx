import React, { useState } from 'react';
import Card from '../components/Card';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success('Mensagem enviada com sucesso! Em breve entrarei em contato.');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-text mb-2">Vamos conversar?</h2>
        <p className="text-muted">Tem um projeto em mente? Preencha o formulário ou me chame nas redes.</p>
      </div>

      <Card className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-text">Nome Completo</label>
            <input 
              required
              type="text" 
              id="name"
              className="w-full px-4 py-3 bg-bg border border-white/10 rounded-lg focus:outline-none focus:border-accent text-text transition-colors"
              placeholder="Seu nome"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-text">E-mail Corporativo</label>
            <input 
              required
              type="email" 
              id="email"
              className="w-full px-4 py-3 bg-bg border border-white/10 rounded-lg focus:outline-none focus:border-accent text-text transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-text">Assunto</label>
            <select 
              id="subject"
              className="w-full px-4 py-3 bg-bg border border-white/10 rounded-lg focus:outline-none focus:border-accent text-text transition-colors"
            >
              <option>Orçamento de Projeto</option>
              <option>Consultoria PWA/IA</option>
              <option>Mentoria</option>
              <option>Outro</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-text">Mensagem</label>
            <textarea 
              required
              id="message"
              rows={5}
              className="w-full px-4 py-3 bg-bg border border-white/10 rounded-lg focus:outline-none focus:border-accent text-text transition-colors resize-none"
              placeholder="Descreva brevemente sua necessidade..."
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent2 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Enviando...
              </>
            ) : (
              'Enviar Mensagem'
            )}
          </button>
        </form>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card p-4 rounded-lg border border-white/5 flex items-center gap-4">
          <div className="w-10 h-10 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-xl">
            📱
          </div>
          <div>
            <div className="text-xs text-muted">WhatsApp</div>
            <div className="text-text font-medium">(11) 99999-9999</div>
          </div>
        </div>
        <div className="bg-card p-4 rounded-lg border border-white/5 flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center text-xl">
            📧
          </div>
          <div>
            <div className="text-xs text-muted">E-mail</div>
            <div className="text-text font-medium">contato@marciomaker.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;