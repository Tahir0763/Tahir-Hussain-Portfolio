
export interface Project {
  id: string;
  title: string;
  year: string;
  description: string[];
  tags: string[];
  category: 'All' | 'AI' | 'Data' | 'Dev';
  link?: string;
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  subtitle: string;
}
