import React from 'react';
import classNames from 'classnames';
import styles from './BurgerMenu.module.scss';
import { useAppContext } from '../../../hooks/useAppContext';


const BurgerMenu = () => {
  const { isActiveMenu, setIsActiveMenu } = useAppContext();

  return (
    <div className={styles.burger}>
      <button
        onClick={setIsActiveMenu}
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
