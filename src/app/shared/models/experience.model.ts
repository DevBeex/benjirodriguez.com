export interface Experience {
  company: string;
  title: string;
  type?: string;
  period: string;
  location: string;
  current?: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}
