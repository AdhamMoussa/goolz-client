import React from 'react';
import { useHistory } from 'react-router-dom';

import ResourcesList from '../../../components/ResourcesList';
import Button from '../../../components/Button';
import MountAnimation from '../../../components/MountAnimation';

import { IResource } from '../../../store/goals/types';

import { routes } from '../../../utils/routes';

import styles from './styles.module.scss';
import { icons } from '../../../utils/ui/icons';

interface IProps {
  resourcesList: IResource[];
  updateFormState: (updates: IResource[]) => void;
}

const Resources: React.FC<IProps> = props => {
  const { resourcesList } = props;

  const history = useHistory();

  return (
    <MountAnimation>
      <div className={styles.Resources}>
        <h1 className={styles.title}>
          What resources you&apos;ll use to achieve your learning goal?
        </h1>

        {resourcesList.length === 0 ? (
          <div className={styles.noResources}>
            <p className={styles.noResourcesText}>No resource yet</p>

            <Button
              title="Add your first resource"
              styleType="main"
              type="button"
              icon={icons.add}
              iconPosition="right"
              onClick={(): void => {
                history.push(routes.CREATE__RESOURCE_FORM);
              }}
            />
          </div>
        ) : (
          <>
            <ResourcesList resourcesList={resourcesList} />

            <div className={styles.controls}>
              <Button
                title="Add a resource"
                styleType="secondary"
                type="button"
                icon={icons.add}
                iconPosition="right"
                onClick={(): void => {
                  history.push(routes.CREATE__RESOURCE_FORM);
                }}
              />

              <Button
                title="Next"
                styleType="main"
                type="button"
                icon={icons.next}
                iconPosition="right"
                onClick={(): void => {
                  history.push(routes.CREATE__CONFIRM);
                }}
              />
            </div>
          </>
        )}
      </div>
    </MountAnimation>
  );
};

export default Resources;
