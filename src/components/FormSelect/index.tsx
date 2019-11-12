import React from 'react';
import Dropdown, { Option } from 'react-dropdown';

import styles from './styles.module.scss';

export type OptionType = { label: string; value: string };

interface IProps {
  title: string;
  error?: string;
  options: OptionType[];
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
}

const FormSelect: React.FC<IProps> = props => {
  const { title, value, options, error, disabled, onChange } = props;

  const changeHandler = (option: Option): void => {
    onChange(option.value);
  };

  return (
    <div className={styles.FormSelect}>
      <span className={styles.title}>{title}:</span>

      <Dropdown
        options={options}
        value={value}
        placeholder={title}
        controlClassName={`${styles.select} ${error ? styles.hasError : ''}`}
        menuClassName={styles.menu}
        placeholderClassName={styles.placeholder}
        onChange={changeHandler}
        disabled={disabled}
      />

      <span className={styles.error}>{error}</span>
    </div>
  );
};

export default FormSelect;
