import React from 'react';
import classNames from 'classnames';
import styles from './BurgerMenu.module.scss';
import { useAppContext } from '../../../hooks/useAppContext';


const BurgerMenu = () => {
  const { isActiveMenu, setIsActiveMenu } = useAppContext();
  
  const toggleActiveMenu = () => {
    setIsActiveMenu();
    document.body.classList.toggle('noScroll');
  }

  return (
    <div className={styles.burger}>
      <button
        onClick={toggleActiveMenu}
        className={classNames(
          `${styles.burgerButton}`,
          {[styles.burgerButton_active]: isActiveMenu}
        )}
      >
        <div className={styles.burgerButton__item}></div>
      </button>
    </div>
  );
};

export default BurgerMenu;
