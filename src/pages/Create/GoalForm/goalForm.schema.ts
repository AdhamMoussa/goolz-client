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
  title: yup.string().required('Title is required'),

  category: yup
    .string()
    .oneOf(Array(...goalCategories), 'Category is required')
    .required('Category is required'),

  startDate: yup
    .date()
    .default(new Date())
    .required('Start Date is required')
});
