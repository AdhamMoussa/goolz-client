import React from 'react';

import GoalForm from './GoalForm';

import Page from '../../components/Page';

import styles from './styles.module.scss';

const Create: React.FC = () => {
  return (
    <Page>
      <h1 className={styles.pageTitle}>Create a Goal</h1>

      <div style={{ width: '300px' }}>
        <GoalForm />
      </div>
    </Page>
  );
};

export default Create;
