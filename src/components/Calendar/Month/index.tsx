import React from 'react';

import Week from '../Week';

import { IMonth } from './types';

import styles from './styles.module.scss';

interface IProps {
  month: IMonth;
}

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

const Month: React.FC<IProps> = ({ month: { weeks } }) => {
  return (
    <div className={styles.Month}>
      <div className={styles.weekHead}>
        {weekDays.map(day => (
          <div className={styles.weekHeadTitle} key={day}>
            {day}
          </div>
        ))}
      </div>

      {weeks.map((week, i) => (
        <Week week={week} key={i} />
      ))}
    </div>
  );
};

export default Month;
