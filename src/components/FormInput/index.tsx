import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  name: string;
  label: string;
  error?: string;
  disabled?: boolean;
}

const FormInput: React.RefForwardingComponent<HTMLInputElement, IProps> = (
  props,
  ref
) => {
  const { name, label, error, disabled } = props;

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
        placeholder={label}
        disabled={disabled}
        ref={ref}
      />

      <span className={styles.error}>{error && !disabled ? error : ''}</span>
    </div>
  );
};

export default React.forwardRef(FormInput);
