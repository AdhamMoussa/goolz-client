import React from 'react';

import MountAnimation from '../MountAnimation';

import styles from './styles.module.scss';

const Page: React.FC = ({ children }) => {
  return <MountAnimation className={styles.Page}>{children}</MountAnimation>;
};

export default Page;
