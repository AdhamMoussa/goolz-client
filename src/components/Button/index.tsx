import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  disabled?: boolean;
  styleType: 'main' | 'secondary';
  type: 'button' | 'submit';
  icon?: React.ReactNode;
  iconPosition?: 'right' | 'left';
  onClick?: () => void;
}

const Button: React.FC<IProps> = props => {
  const {
    title,
    icon,
    iconPosition = 'left',
    disabled,
    styleType,
    type,
    onClick
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.Button} ${styles[styleType]}`}
    >
      {icon && (
        <span
          className={`
            ${styles.icon}
            ${styles[iconPosition]}
          `}
        >
          {icon}
        </span>
      )}

      {title}
    </button>
  );
};

export default Button;
