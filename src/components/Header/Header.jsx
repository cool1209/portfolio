import React from 'react';
import Logo from '../shared/Logo/Logo';
import styles from './Header.module.scss';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__inner}>
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
