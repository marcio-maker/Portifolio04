import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfólio 4.0',
    description: 'Site PWA com animações, temas e dashboard.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=60',
    tags: ['PWA', 'React', 'Tailwind', 'GSAP'],
    fullDescription: 'Uma reinterpretação moderna de portfólios pessoais focada em performance e experiência do usuário (UX). Utiliza tecnologias de ponta como React 18 e Tailwind CSS, garantindo acessibilidade e um modo escuro nativo.',
    category: 'dev'
  },
  {
    id: 'academy',
    title: 'Aha! Academy',
    description: 'Plataforma de cursos offline-first.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=60',
    tags: ['PWA', 'Offline', 'Education'],
    fullDescription: 'Sistema completo de LMS (Learning Management System) que permite aos alunos baixarem aulas para assistir offline. Focado em mercados com conectividade limitada.',
    category: 'dev'
  },
  {
    id: 'social',
    title: 'Social PWA',
    description: 'Feed com cache inteligente.',
    image: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=900&q=60',
    tags: ['PWA', 'Social', 'Cache', 'Redis'],
    fullDescription: 'Rede social minimalista focada em compartilhamento de ideias rápidas. Utiliza estratégias avançadas de Service Workers para oferecer uma experiência "app-like" instantânea.',
    category: 'dev'
  },
  {
    id: 'creator',
    title: 'Creator Studio',
    description: 'Ferramentas de criação com IA.',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=60',
    tags: ['IA', 'GenAI', 'Tools', 'Python'],
    fullDescription: 'Suite de ferramentas para criadores de conteúdo, utilizando LLMs para gerar roteiros, ideias de posts e imagens promocionais automaticamente.',
    category: 'dev'
  },
  {
    id: 'avatar-ia',
    title: 'Avatar IA',
    description: 'Criação de personagens digitais e identidades visuais.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=60',
    tags: ['Stable Diffusion', 'Art', 'Design'],
    category: 'art'
  },
  {
    id: 'visagismo',
    title: 'Visagismo Digital',
    description: 'Análise estética para transformar experiências.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=60',
    tags: ['Design', 'Estética', 'Harmonia'],
    category: 'art'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'pwa',
    title: 'PWA Completo',
    description: 'Aplicações web que funcionam como apps nativos. Instaláveis, offline e rápidos.',
    icon: '⚡',
    tags: ['Instalável', 'Offline', 'Rápido']
  },
  {
    id: 'ia',
    title: 'IA & Automação',
    description: 'Chatbots, prompts e fluxos inteligentes para otimizar seu negócio.',
    icon: '🤖',
    tags: ['IA', 'Automação', 'Chatbots']
  },
  {
    id: 'design',
    title: 'Design Premium',
    description: 'Interfaces modernas focadas em conversão e experiência do usuário.',
    icon: '🎨',
    tags: ['UI/UX', 'Figma', 'Mobile First']
  },
  {
    id: 'conteudo',
    title: 'Conteúdo & Cursos',
    description: 'Desenvolvimento de materiais didáticos e plataformas de ensino.',
    icon: '📚',
    tags: ['Educação', 'E-learning']
  }
];
