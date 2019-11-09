import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';
import { icons } from '../../utils/ui/icons';

interface ILinkInfo {
  label: string;
  route: string;
  icon: JSX.Element;
}

const navLinks: ILinkInfo[] = [
  {
    label: 'feed',
    route: '/',
    icon: icons.community
  },
  {
    label: 'dashboard',
    route: '/dashboard',
    icon: icons.dashboard
  },
  {
    label: 'create',
    route: '/create',
    icon: icons.add
  }
];

const Navigation: React.FC = () => {
  return (
    <nav className={styles.Navigation}>
      <ul className={styles.navList}>
        {navLinks.map(({ label, route, icon }) => (
          <li className={styles.navListItem} key={route}>
            <NavLink
              to={route}
              exact
              activeClassName={styles.navListItemActive}
            >
              <span className={styles.navListItemIcon}>{icon}</span>

              <span className={styles.navListItemLabel}>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
