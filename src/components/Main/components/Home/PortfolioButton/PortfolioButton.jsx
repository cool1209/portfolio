import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PortfolioButton.module.scss';

const Button = () => {
  return (
    <NavLink
      to='/works'
      tabIndex={-1}
      className={styles.button}
    >
      Portfolio
    </NavLink>
  );
};

export default Button;
