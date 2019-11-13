import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  className?: string;
}

const Card: React.FC<IProps> = ({ children, className }) => {
  return <div className={`${styles.Card} ${className || ''}`}>{children}</div>;
};

export default Card;
