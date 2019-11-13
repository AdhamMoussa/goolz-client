import { icons } from '../../utils/ui/icons';

export const goalCategories = [
  'front end',
  'back end',
  'mobile development',
  'artificial intelligence',
  'blockchain',
  'devops',
  'databases',
  'computer science'
] as const;

export const resourceCategories = [
  'online course/tutorial',
  'book',
  'article',
  'side project'
] as const;

export const resourceCategoriesIcons = {
  [resourceCategories[0]]: icons.computer,
  [resourceCategories[1]]: icons.book,
  [resourceCategories[2]]: icons.web,
  [resourceCategories[3]]: icons.git
};

export interface IResource {
  title: string;

  url: string;

  category: typeof resourceCategories[number];

  hoursPerDay: number;

  weeklySchedule: number[];
}

export interface IGoalInfo {
  title: string;

  category: typeof goalCategories[number];

  startDate: Date;
}

export interface IGoal extends IGoalInfo {
  learningResources: IResource[];
}
