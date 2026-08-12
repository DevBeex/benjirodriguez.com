export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  featured: boolean;
}
