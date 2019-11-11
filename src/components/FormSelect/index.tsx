import React, { useState } from 'react';
import Dropdown, { Option } from 'react-dropdown';

import styles from './styles.module.scss';

export type OptionType = { label: string; value: string };

interface IProps {
  title: string;
  error?: string;
  options: OptionType[];
  onChange: (option: Option) => void;
}

const FormSelect: React.FC<IProps> = props => {
  const { title, options, error, onChange } = props;

  const [value, setValue] = useState<Option | undefined>();

  const changeHandler = (option: Option): void => {
    setValue(option);
    onChange(option);
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
      />

      <span className={styles.error}>{error}</span>
    </div>
  );
};

export default FormSelect;
