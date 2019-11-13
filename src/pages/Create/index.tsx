import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import GoalForm from './GoalForm';
import Resources from './Resources';
import ResourceForm from './ResourceForm';
import CreateGoalConfirm from './CreateGoalConfirm';

import Page from '../../components/Page';
import MountAnimation from '../../components/MountAnimation';

import { IGoal } from '../../store/goals/types';

import { routes } from '../../utils/routes';

import styles from './styles.module.scss';

const initialFormState: IGoal = {
  title: 'learn graphql',
  category: 'back end',
  startDate: new Date(),
  learningResources: [
    // {
    //   title: 'graphql bootcamp by Andrew Mead',
    //   url: 'https://google.com',
    //   category: 'online course/tutorial',
    //   hoursPerDay: 3,
    //   weeklySchedule: [0, 1, 3, 5]
    // },
    // {
    //   title: 'graphql programming',
    //   url: 'https://google.com',
    //   category: 'book',
    //   hoursPerDay: 1,
    //   weeklySchedule: [2, 3, 4, 5]
    // }
  ]
};

const Create: React.FC = () => {
  const [state, setState] = useState<IGoal>(initialFormState);

  return (
    <Page>
      <h1 className={styles.pageTitle}>Create a new Goal</h1>

      <Switch>
        <Route path={routes.CREATE} exact>
          <MountAnimation>
            <GoalForm
              initialFormState={{
                title: state.title,
                category: state.category,
                startDate: state.startDate
              }}
              updateFormState={(updates): void => {
                setState(currentState => ({
                  ...currentState,
                  ...updates
                }));
              }}
            />
          </MountAnimation>
        </Route>

        <Route path={routes.CREATE__RESOURCES_LIST}>
          <MountAnimation>
            <Resources
              resourcesList={initialFormState.learningResources}
              updateFormState={(updates): void => {
                setState(currentState => ({
                  ...currentState,
                  learningResources: updates
                }));
              }}
            />
          </MountAnimation>
        </Route>

        <Route path={routes.CREATE__RESOURCE_FORM}>
          <MountAnimation>
            <ResourceForm />
          </MountAnimation>
        </Route>

        <Route path={routes.CREATE__CONFIRM}>
          <MountAnimation>
            <CreateGoalConfirm />
          </MountAnimation>
        </Route>
      </Switch>
    </Page>
  );
};

export default Create;
