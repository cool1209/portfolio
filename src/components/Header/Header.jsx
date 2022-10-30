import React from 'react';
import Logo from './Logo/Logo';
import styles from './Header.module.scss';
import Navigation from './Navigation/Navigation';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header = () => {  
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__inner}>
          <Logo />
          <Navigation />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
