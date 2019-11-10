import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  name: string;
  label: string;
  error?: string;
  disabled?: boolean;
  register: () => void;
}

const FormInput: React.FC<IProps> = props => {
  const { name, label, error, disabled, register } = props;

  return (
    <div className={styles.FormInput}>
      <label htmlFor={name} hidden>
        {label}
      </label>

      <input
        className={`
          ${styles.input}
          ${error && !disabled ? styles.hasError : ''}
        `}
        type="text"
        name={name}
        placeholder={name}
        disabled={disabled}
        ref={register}
      />

      <span className={styles.error}>{error && !disabled ? error : ''}</span>
    </div>
  );
};

export default FormInput;
