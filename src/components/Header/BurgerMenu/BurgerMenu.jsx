import React, { useContext } from 'react';
import classNames from 'classnames';
import styles from './BurgerMenu.module.scss';
import { NavContext } from '../../../context/NavContext';

const BurgerMenu = () => {
  const { isActive, setIsActive } = useContext(NavContext);

  return (
    <div className={styles.burger}>
      <button
        onClick={setIsActive}
        className={classNames(
          `${styles.burgerButton}`,
          {[styles.burgerButton_active]: isActive}
        )}
      >
        <div className={styles.burgerButton__item}></div>
      </button>
    </div>
  );
};

export default BurgerMenu;
