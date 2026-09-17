export type SkillCategoryId =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'tools';

export interface TechnologyCategory {
  id: SkillCategoryId;
  icon: SkillCategoryId;
  items: string[];
}
