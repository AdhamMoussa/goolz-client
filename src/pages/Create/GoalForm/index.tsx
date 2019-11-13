import React from 'react';
import { useHistory } from 'react-router-dom';

import FormInput from '../../../components/FormInput';
import FormSelect from '../../../components/FormSelect';
import FormDatePicker from '../../../components/FormDatePicker';
import Button from '../../../components/Button';

import { useCustomForm } from '../../../hooks/useCustomForm';
import { goalCategories, IGoalInfo } from '../../../store/goals/types';
import { icons } from '../../../utils/ui/icons';

import { goalFormSchema } from './goalForm.schema';

import styles from './styles.module.scss';
import 'react-dropdown/style.css';
import { routes } from '../../../utils/routes';

const goalCategoriesOptions = goalCategories.map(value => ({
  value,
  label: value
}));

interface IProps {
  initialFormState: IGoalInfo;
  updateFormState: (state: IGoalInfo) => void;
}

const GoalForm: React.FC<IProps> = props => {
  const { initialFormState, updateFormState } = props;

  const history = useHistory();

  const { formMethods, changeHandler } = useCustomForm<IGoalInfo>(
    goalFormSchema,
    initialFormState,
    updateFormState
  );

  const { errors, formState, handleSubmit } = formMethods;

  const submitHandler = handleSubmit(() => {
    history.push(routes.CREATE__RESOURCES_LIST);
  });

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.formInput}>
        <FormInput
          name="title"
          value={initialFormState.title}
          label="title"
          disabled={formState.isSubmitting}
          error={errors.title ? errors.title.message : undefined}
          onChange={(value): void => {
            changeHandler('title', value);
          }}
        />
      </div>

      <div className={styles.formInput}>
        <FormSelect
          title="category"
          value={initialFormState.category}
          options={goalCategoriesOptions}
          error={errors.category ? errors.category.message : undefined}
          disabled={formState.isSubmitting}
          onChange={(value): void => {
            changeHandler('category', value);
          }}
        />
      </div>

      <div className={styles.formInput}>
        <FormDatePicker
          title="start date"
          selectedDate={initialFormState.startDate}
          disabled={formState.isSubmitting}
          error={errors.startDate ? errors.startDate.message : undefined}
          minDate={new Date()}
          onChange={(value): void => {
            changeHandler('startDate', value);
          }}
        />
      </div>

      <Button
        title="Next"
        styleType="main"
        type="submit"
        icon={icons.next}
        iconPosition="right"
      />
    </form>
  );
};

export default GoalForm;
