import React from 'react';
import Card from '../components/Card';

const ArtStudio: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Art & IA Studio
        </h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Onde criatividade humana e algoritmos generativos se encontram para criar novas estéticas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Avatar Card */}
        <Card className="p-0 overflow-hidden bg-gradient-to-b from-[#1a1033] to-card border-purple-500/20">
          <div className="h-64 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=60')`}}></div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Avatar IA</h3>
            <p className="text-gray-400 mb-4">Identidades digitais únicas criadas com Stable Diffusion e LoRA fine-tuning.</p>
            <div className="flex gap-2">
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Generative</span>
              <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded">Portrait</span>
            </div>
          </div>
        </Card>

        {/* Visagismo Card */}
        <Card className="p-0 overflow-hidden bg-gradient-to-b from-[#102a33] to-card border-cyan-500/20">
          <div className="h-64 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=60')`}}></div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Visagismo Digital</h3>
            <p className="text-gray-400 mb-4">Análise de geometria facial aplicada ao design de personagens e interfaces.</p>
            <div className="flex gap-2">
               <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">Geometry</span>
               <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Style</span>
            </div>
          </div>
        </Card>

        {/* Colorimetria Card */}
        <Card className="p-0 overflow-hidden bg-gradient-to-b from-[#331010] to-card border-red-500/20">
          <div className="h-64 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=60')`}}></div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Colorimetria</h3>
            <p className="text-gray-400 mb-4">Psicologia das cores aplicada para evocar emoções específicas e guiar a atenção.</p>
             <div className="flex gap-2">
               <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">Emotion</span>
               <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded">UX</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="bg-card border border-white/5 p-8 rounded-2xl text-center max-w-2xl mx-auto">
        <h3 className="text-xl font-bold mb-4">Quer uma arte exclusiva?</h3>
        <p className="text-muted mb-6">Trabalho sob encomenda criando assets para jogos, capas de livros e identidade visual para streamers.</p>
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform">
          Solicitar Orçamento Artístico
        </button>
      </div>
    </div>
  );
};

export default ArtStudio;