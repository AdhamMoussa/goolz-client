import React from 'react';

import { IResource } from '../../store/goals/types';

import { weekDays } from '../../utils/helpers/weekDays';

interface IProps {
  resourcesList: IResource[];
}

const ResourcesList: React.FC<IProps> = props => {
  const { resourcesList } = props;

  return (
    <div>
      {resourcesList.map(resource => (
        <div key={resource.url}>
          <div>
            <h2>{resource.title}</h2>
            <span>{resource.category}</span>
          </div>

          <div>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              Go to {resource.category} page
            </a>
          </div>

          <div>
            {resource.hoursPerDay} hours per day: every{' '}
            {resource.weeklySchedule.map(idx => weekDays[idx])}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourcesList;
