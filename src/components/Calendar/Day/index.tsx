import React, { useContext } from 'react';
import { format, isToday } from 'date-fns';

import Task from '../Task';

import MountAnimation from '../../MountAnimation';

import { IDay } from './types';

import { CalendarContext } from '..';

import styles from './styles.module.scss';

interface IProps {
  day: IDay;
}

const Day: React.FC<IProps> = ({ day: { msDate, tasks, isInMonth } }) => {
  const { renderCustomDayView } = useContext(CalendarContext);
  return renderCustomDayView ? (
    renderCustomDayView(msDate, tasks, isInMonth)
  ) : (
    <MountAnimation
      className={`${styles.Day} ${isInMonth ? '' : styles.inActive} ${
        isToday(msDate) ? styles.isToday : ''
      }`}
    >
      <div className={styles.dayInner}>
        <div className={styles.dayContent}>
          <span className={styles.dayNumber}>{format(msDate, 'dd')}</span>

          {tasks.map(task => (
            <Task task={task} key={task.id} />
          ))}
        </div>
      </div>
    </MountAnimation>
  );
};

export default Day;
