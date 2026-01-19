
export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  year: string;
  description: string;
  improvements: string[];
  imageUrl: string;
  liveUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
