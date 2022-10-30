import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoStyles from './Logo.module.scss';

const Logo = ({ styles = null }) => {
  return (
    <NavLink to='/' className={`${LogoStyles.logo} ${styles}`}>
      <span className={LogoStyles.logo__leftPart}>Ihor</span>
      <span className={LogoStyles.logo__rightPart}>Kuchin</span>   
    </NavLink>
  );
};

export default Logo;
