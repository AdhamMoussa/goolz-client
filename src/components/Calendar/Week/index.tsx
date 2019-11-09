import React from 'react';

import Day from '../Day';

import { IWeek } from './types';

import styles from './styles.module.scss';

interface IProps {
  week: IWeek;
}

const Week: React.FC<IProps> = ({ week: { days } }) => {
  return (
    <div className={styles.Week}>
      {days.map(day => (
        <Day day={day} key={day.msDate} />
      ))}
    </div>
  );
};

export default Week;
