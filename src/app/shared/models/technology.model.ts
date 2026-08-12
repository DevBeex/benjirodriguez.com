export interface TechnologyCategory {
  name: string;
  icon: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
  items: string[];
}
