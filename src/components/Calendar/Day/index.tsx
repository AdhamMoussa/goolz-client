import React, { useContext } from 'react';
import { format, isToday } from 'date-fns';
import { motion } from 'framer-motion';

import Task from '../Task';

import { IDay } from './types';

import styles from './styles.module.scss';

import { CalendarContext } from '..';

interface IProps {
  day: IDay;
}

const motionConfig = {
  type: 'spring',
  damping: 20,
  stiffness: 100
};

const Day: React.FC<IProps> = ({ day: { msDate, tasks, isInMonth } }) => {
  const { renderCustomDayView } = useContext(CalendarContext);
  return renderCustomDayView ? (
    renderCustomDayView(msDate, tasks, isInMonth)
  ) : (
    <motion.div
      transition={motionConfig}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
    </motion.div>
  );
};

export default Day;
