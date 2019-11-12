import React from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

import styles from './styles.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

interface IProps {
  title: string;
  selectedDate: Date;
  error?: string;
  disabled: boolean;
  minDate?: Date;
  onChange: (date: Date) => void;
}

const FormDatePicker: React.FC<IProps> = props => {
  const { title, selectedDate, error, disabled, minDate, onChange } = props;

  const changeHandler: ReactDatePickerProps['onChange'] = date => {
    if (date) {
      onChange(date);
    }
  };

  return (
    <div className={styles.FormDatePicker}>
      <label className={styles.title} htmlFor={title}>
        {title}:
      </label>

      <DatePicker
        className={styles.datePicker}
        name={title}
        wrapperClassName={styles.datePickerWrapper}
        selected={selectedDate}
        disabled={disabled}
        minDate={minDate}
        onChange={changeHandler}
      />

      <span className={styles.error}>{error}</span>
    </div>
  );
};

export default FormDatePicker;
