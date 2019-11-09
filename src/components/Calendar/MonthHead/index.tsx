import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  renderNextMonth: () => void;
  renderPrevMonth: () => void;
}

const MonthHead: React.FC<IProps> = ({
  title,
  renderNextMonth,
  renderPrevMonth
}) => {
  return (
    <div className={styles.MonthHead}>
      <button className={styles.navButton} onClick={renderPrevMonth}>
        &lt;
      </button>

      <h2 className={styles.title}>{title}</h2>

      <button className={styles.navButton} onClick={renderNextMonth}>
        &gt;
      </button>
    </div>
  );
};

export default MonthHead;
