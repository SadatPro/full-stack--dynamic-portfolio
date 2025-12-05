export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Collaboration {
  id: number;
  organization: string;
  role: string;
  description: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
}

export interface Language {
  id: number;
  name: string;
  proficiency: string;
}

export interface Achievement {
  id: number;
  icon: 'Trophy' | 'Certificate' | 'Award';
  title: string;
  date: string;
  description: string;
}

export interface Tool {
  id: number;
  name: string;
  iconUrl: string;
  category: string;
}

export interface PortfolioData {
  home: {
    name: string;
    taglines: string[];
    professionalFocus: { id: number; title: string; description: string }[];
  };
  about: {
    imageUrl: string;
    bio: string;
    skills: Skill[];
    experience: Experience[];
    collaborations: Collaboration[];
    education: Education[];
    languages: Language[];
  };
  projects: Project[];
  achievements: Achievement[];
  galleryImages: { id: number; url: string; alt: string }[];
  skillsAndTools: Tool[];
  contact: {
    email: string;
    socials: SocialLink[];
  };
}