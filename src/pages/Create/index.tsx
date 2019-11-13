import React, { useState } from 'react';

import GoalForm from './GoalForm';
import Resources from './Resources';

import Page from '../../components/Page';
import MountAnimation from '../../components/MountAnimation';

import { IGoal } from '../../store/goals/types';

import styles from './styles.module.scss';

const initialFormState: IGoal = {
  title: 'learn graphql',
  category: 'back end',
  startDate: new Date(),
  learningResources: []
};

enum Steps {
  goalInfo,
  resources,
  confirm
}

const Create: React.FC = () => {
  const [state, setState] = useState<IGoal>(initialFormState);
  const [activeStep, setActiveStep] = useState<Steps>(Steps.goalInfo);

  return (
    <Page>
      <h1 className={styles.pageTitle}>Create a Goal</h1>

      {activeStep === Steps.goalInfo && (
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
            next={(): void => {
              setActiveStep(Steps.resources);
            }}
          />
        </MountAnimation>
      )}

      {activeStep === Steps.resources && (
        <MountAnimation>
          <Resources
            resourcesList={initialFormState.learningResources}
            updateFormState={(updates): void => {
              setState(currentState => ({
                ...currentState,
                learningResources: updates
              }));
            }}
            next={(): void => {
              setActiveStep(Steps.confirm);
            }}
            back={(): void => {
              setActiveStep(Steps.goalInfo);
            }}
          />
        </MountAnimation>
      )}

      {activeStep === Steps.confirm && (
        <MountAnimation>
          <h1>confirmation view</h1>
          <button
            onClick={() => {
              setActiveStep(Steps.resources);
            }}
          >
            back
          </button>
        </MountAnimation>
      )}
    </Page>
  );
};

export default Create;
