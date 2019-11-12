import React from 'react';

import FormInput from '../../../components/FormInput';
import FormSelect from '../../../components/FormSelect';
import FormDatePicker from '../../../components/FormDatePicker';

import { useGoalForm } from './useGoalForm';

import { goalCategories } from './goalForm.schema';

import styles from './styles.module.scss';
import 'react-dropdown/style.css';

const goalCategoriesOptions = goalCategories.map(value => ({
  value,
  label: value
}));

const GoalForm: React.FC = () => {
  const {
    formMethods,
    categoryChangeHandler,
    startDateChangeHandler,
    submitHandler
  } = useGoalForm();

  const { register, errors, formState } = formMethods;

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.formInput}>
        <FormInput
          name="title"
          label="Goal title"
          disabled={formState.isSubmitting}
          ref={register}
          error={errors.title ? errors.title.message : undefined}
        />
      </div>

      <div className={styles.formInput}>
        <FormSelect
          title="category"
          options={goalCategoriesOptions}
          onChange={categoryChangeHandler}
          error={errors.category ? errors.category.message : undefined}
          disabled={formState.isSubmitting}
        />
      </div>

      <div className={styles.formInput}>
        <FormDatePicker
          title="start date"
          disabled={formState.isSubmitting}
          error={errors.startDate ? errors.startDate.message : undefined}
          onChange={startDateChangeHandler}
          minDate={new Date()}
        />
      </div>

      <input type="submit" />
    </form>
  );
};

export default GoalForm;
