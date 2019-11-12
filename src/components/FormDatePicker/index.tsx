import React, { useState } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

import styles from './styles.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

interface IProps {
  title: string;
  error?: string;
  disabled: boolean;
  minDate?: Date;
  onChange: (date: Date | null) => void;
}

const FormDatePicker: React.FC<IProps> = props => {
  const { title, error, disabled, minDate, onChange } = props;
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const changeHandler: ReactDatePickerProps['onChange'] = date => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <div className={styles.FormDatePicker}>
      <span className={styles.title}>{title}:</span>

      <DatePicker
        className={styles.datePicker}
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
