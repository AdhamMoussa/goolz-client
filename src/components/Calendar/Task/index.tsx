import React from 'react';
import TruncateMarkup from 'react-truncate-markup';

import styles from './styles.module.scss';

import { ITask } from './types';

interface IProps {
  task: ITask;
}

const Task: React.FC<IProps> = ({ task }) => {
  return (
    <div className={styles.Task} style={{ backgroundColor: task.color }}>
      <TruncateMarkup>
        <span>{task.title}</span>
      </TruncateMarkup>
    </div>
  );
};

export default Task;
