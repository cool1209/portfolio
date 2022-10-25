import React from 'react';
import styles from './Navigation.module.scss';
import NavigationLink from './NavigationLink/NavigationLink';

const Navigation = () => {
  const links = [
    'home',
    'works',
    'about',
    'contacts'
  ];

  return (
    <nav className={styles.nav}>
      {links.map(link => (
        <NavigationLink link={link} key={link} />
      ))}
    </nav>
  );
};

export default Navigation;
