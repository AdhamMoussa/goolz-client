import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation';

import styles from './styles.module.scss';

const SideBar: React.FC = () => {
  return (
    <aside className={styles.SideBar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="/images/logo.png" alt="Goolz" />
        </Link>
      </div>

      <Navigation />
    </aside>
  );
};

export default SideBar;
