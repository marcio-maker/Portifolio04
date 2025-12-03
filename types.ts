export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  fullDescription?: string;
  category?: 'dev' | 'art' | 'design';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface NavLink {
  path: string;
  label: string;
}