import * as yup from 'yup';

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

export const goalFormSchema = yup.object().shape({
  title: yup.string().required(),

  category: yup
    .string()
    .oneOf(Array(...goalCategories))
    .required(),

  startDate: yup
    .date()
    .default(new Date())
    .required()
});
