import useForm from 'react-hook-form';
import { InferType } from 'yup';
import { Option } from 'react-dropdown';

import { goalFormSchema } from './goalForm.schema';

export const useGoalForm = () => {
  const formMethods = useForm<InferType<typeof goalFormSchema>>({
    validationSchema: goalFormSchema
  });

  const {
    register,
    handleSubmit,
    errors,
    setValue,
    triggerValidation
  } = formMethods;

  register({
    name: 'category'
  });

  register({
    name: 'startDate'
  });

  const categoryChangeHandler = (option: Option): void => {
    setValue('category', option.value);
    if (errors.category) {
      triggerValidation();
    }
  };

  const startDateChangeHandler = (date: Date | null): void => {
    if (date) {
      setValue('startDate', date);

      if (errors.category) {
        triggerValidation();
      }
    }
  };

  const submitHandler = handleSubmit(async data => {
    console.log(JSON.stringify(data, null, 2));
  });

  return {
    formMethods,
    categoryChangeHandler,
    startDateChangeHandler,
    submitHandler
  };
};
