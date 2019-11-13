import React from 'react';

import Card from '../Card';

import { IResource, resourceCategoriesIcons } from '../../store/goals/types';

import { weekDays } from '../../utils/helpers/weekDays';

import styles from './styles.module.scss';

interface IProps {
  resourcesList: IResource[];
}

const ResourcesList: React.FC<IProps> = props => {
  const { resourcesList } = props;

  return (
    <div className={styles.ResourcesList}>
      {resourcesList.map((resource, idx) => (
        <Card className={styles.resourceCard} key={resource.url}>
          <div className={styles.resourceHead}>
            <h2 className={styles.resourceTitle}>
              {`${idx + 1}. ${resource.title}`}
            </h2>

            <div className={styles.resourceCategory}>
              <span className={styles.resourceCategoryIcon}>
                {resourceCategoriesIcons[resource.category]}
              </span>

              {` ${resource.category}`}
            </div>
          </div>

          <div className={styles.resourceUrl}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              Resource URL
            </a>
          </div>

          <div className={styles.resourceFooter}>
            <div className={styles.resourceHours}>
              {resource.hoursPerDay} hours / day:
            </div>

            <div className={styles.resourceSchedule}>
              {weekDays.map((day, idx) => (
                <span
                  className={`
                  ${styles.weekDay}
                  ${resource.weeklySchedule.includes(idx) ? styles.active : ''}
                  `}
                  key={idx}
                >
                  {day.short}
                </span>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ResourcesList;
