import React, { useState } from 'react';

import GoalForm, { IFormState } from './GoalForm';

import Page from '../../components/Page';
import MountAnimation from '../../components/MountAnimation';

import styles from './styles.module.scss';

const initialFormState: IFormState = {
  title: 'learn graphql',
  category: 'back end',
  startDate: new Date()
};

const Create: React.FC = () => {
  const [state, setState] = useState<IFormState>(initialFormState);

  return (
    <Page>
      <h1 className={styles.pageTitle}>Create a Goal</h1>

      <MountAnimation>
        <GoalForm initialFormState={state} updateFormState={setState} />
      </MountAnimation>
    </Page>
  );
};

export default Create;
