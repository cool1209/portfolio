import React from 'react';
import CustomNavLink from '../../shared/CustomNavLink/CustomNavLink';
import styles from './Navigation.module.scss';

const Navigation = () => {
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
    <nav className={styles.nav}>
      {links.map(link => (
        <CustomNavLink
          path={link.path}
          name={link.name}
          key={link.name}
        />
      ))}
    </nav>
  );
};

export default Navigation;
