import React from 'react';

import ResourcesList from '../../../components/ResourcesList';
import Button from '../../../components/Button';
import MountAnimation from '../../../components/MountAnimation';

import { IResource } from '../../../store/goals/types';

import styles from './styles.module.scss';

interface IProps {
  resourcesList: IResource[];
  updateFormState: (updates: IResource[]) => void;
}

const Resources: React.FC<IProps> = props => {
  const { resourcesList } = props;

  if (resourcesList.length === 0) {
    return (
      <MountAnimation>
        <Button
          title="Add your first resource"
          styleType="main"
          type="button"
          onClick={(): void => {}}
        />
      </MountAnimation>
    );
  }

  return (
    <MountAnimation>
      <div className={styles.Resources}>
        <h1 className={styles.title}>
          What resources you&apos;ll use to achieve your learning goal?
        </h1>

        <ResourcesList resourcesList={resourcesList} />
      </div>
    </MountAnimation>
  );
};

export default Resources;
