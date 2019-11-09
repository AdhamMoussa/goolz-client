import React from 'react';

import Header from '../Header';
import SideBar from '../SideBar';

import styles from './styles.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />

      <SideBar />

      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
