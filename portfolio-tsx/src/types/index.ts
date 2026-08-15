// ============================================================
//  KENJI D. SAKAMOTO — PORTFOLIO TYPES
// ============================================================

export interface SocialLink {
  href: string;
  ariaLabel: string;
  title: string;
  icon: string; // Font Awesome class string e.g. "fa-brands fa-github"
}

export interface SkillItem {
  icon: string; // Font Awesome class
  label: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string; // Font Awesome class
  items: SkillItem[];
}

export interface Education {
  id: string;
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
}

export interface Certification {
  id: string;
  image: string;
  alt: string;
}

export type ProjectCategory = 'web' | 'hardware' | 'software';

export interface ProjectLink {
  href: string;
  label: string;
  icon: string; // Font Awesome class
}

export interface Project {
  id: string;
  category: ProjectCategory;
  image: string;
  alt: string;
  tag: string;
  tagVariant?: 'default' | 'hardware';
  title: string;
  description: string;
  techStack: string[];
  links: ProjectLink[];
  featured?: boolean;
}

export interface ContactDetail {
  icon: string; // Font Awesome class
  label: string;
  value: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type GalleryCategory = 'work' | 'career';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
}
