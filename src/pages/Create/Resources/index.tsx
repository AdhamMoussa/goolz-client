import React from 'react';

import ResourcesList from '../../../components/ResourcesList';
import { IResource } from '../../../store/goals/types';

interface IProps {
  resourcesList: IResource[];
  updateFormState: (updates: IResource[]) => void;
  next: () => void;
  back: () => void;
}

const Resources: React.FC<IProps> = props => {
  const { resourcesList } = props;

  return (
    <div>
      <h1>What resources you&apos;ll use to achieve your learning goal?</h1>

      <ResourcesList resourcesList={resourcesList} />
    </div>
  );
};

export default Resources;
