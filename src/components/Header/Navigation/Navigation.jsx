import React, { useContext } from 'react';
import classNames from 'classnames';
import CustomNavLink from '../../shared/CustomNavLink/CustomNavLink';
import styles from './Navigation.module.scss';
import { NavContext } from '../../../context/NavContext';

const Navigation = () => {
  const { isActive } = useContext(NavContext)

  const links = [
    {
      name: 'home',
      path: '/home'
    },    {
      name: 'works',
      path: '/works'
    },    {
      name: 'about',
      path: '/about'
    },    {
      name: 'contacts',
      path: '/contacts'
    }
  ];

  return (
    <nav className={classNames(
      styles.nav,
      {[styles.nav_active]: isActive}
    )}>
      {links.map(link => (
        <CustomNavLink
          path={link.path}
          name={link.name}
          key={link.name}
          styles={styles.nav__link}
        />
      ))}
    </nav>
  );
};

export default Navigation;
