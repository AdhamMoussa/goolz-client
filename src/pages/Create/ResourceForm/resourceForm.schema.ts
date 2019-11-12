import * as yup from 'yup';

export const resourceCategories = [
  'online course/tutorial',
  'book',
  'article',
  'side project'
] as const;

export const resourceFormSchema = yup.object().shape({
  title: yup.string().required(),

  url: yup
    .string()
    .url()
    .required(),

  category: yup
    .string()
    .oneOf(Array(...resourceCategories))
    .required(),

  hoursPerDay: yup
    .number()
    .max(24)
    .min(1)
    .required(),

  weeklySchedule: yup
    .array()
    .max(7)
    .min(1)
    .of(
      yup
        .number()
        .max(6)
        .min(0)
    )
    .required()
});
