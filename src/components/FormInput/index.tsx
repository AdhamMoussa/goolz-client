import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  value: string;
  name: string;
  label: string;
  error?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const FormInput: React.FC<IProps> = props => {
  const { value, name, label, error, disabled, onChange } = props;

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.FormInput}>
      <label className={styles.title} htmlFor={name}>
        {label}
      </label>

      <input
        className={`
          ${styles.input}
          ${error && !disabled ? styles.hasError : ''}
        `}
        value={value}
        type="text"
        name={name}
        placeholder={label}
        disabled={disabled}
        onChange={changeHandler}
      />

      <span className={styles.error}>{error && !disabled ? error : ''}</span>
    </div>
  );
};

export default FormInput;
