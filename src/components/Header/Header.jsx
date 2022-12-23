import React from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import BurgerMenuButton from '../BurgerMenuButton/BurgerMenuButton';

const Header = () => {  
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__inner}>
          <Logo />
          <Navigation />
          <BurgerMenuButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
