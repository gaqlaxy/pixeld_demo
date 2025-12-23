export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
  client?: string;
  role?: string;
  gallery?: string[];
  longDescription?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}