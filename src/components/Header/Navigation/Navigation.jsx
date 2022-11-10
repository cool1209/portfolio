import React from 'react';
import classNames from 'classnames';
import CustomNavLink from '../../shared/CustomNavLink/CustomNavLink';
import styles from './Navigation.module.scss';
import { useAppContext } from '../../../hooks/useAppContext';

const Navigation = () => {
  const { isActiveMenu } = useAppContext();

  const links = [
    'home',
    'works',
    'about',
    'contacts'
  ];

  return (
    <nav className={classNames(
      styles.nav,
      {[styles.nav_active]: isActiveMenu}
    )}>
      {links.map(link => (
        <CustomNavLink
          link={link}
          key={link}
          styles={styles.nav__link}
        />
      ))}
    </nav>
  );
};

export default Navigation;
