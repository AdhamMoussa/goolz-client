import useForm from 'react-hook-form';
import { FieldName, FieldValue } from 'react-hook-form/dist/types';
import { useEffect, useRef } from 'react';
import { Schema } from 'yup';

export const useCustomForm = <FormState>(
  validationSchema: Schema<any>,
  defaultValues: FormState,
  updateFormState: (state: FormState) => void
) => {
  const formMethods = useForm<FormState>({
    validationSchema,
    defaultValues
  });

  const {
    register,
    errors,
    setValue,
    triggerValidation,
    getValues
  } = formMethods;

  const keysRef = useRef(Object.keys(defaultValues));

  useEffect(() => {
    keysRef.current.forEach(key => {
      register({
        name: key
      });
    });
  }, [register]);

  const changeHandler = (
    key: FieldName<FormState>,
    value: FieldValue<FormState>
  ): void => {
    setValue(key, value);
    updateFormState(getValues());

    if (errors[key]) {
      triggerValidation();
    }
  };

  return {
    formMethods,
    changeHandler
  };
};
