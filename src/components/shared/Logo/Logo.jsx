import React from 'react';
import LogoStyles from './Logo.module.scss';

const Logo = ({ styles = null }) => {
  return (
    <a href='#home' className={`${LogoStyles.logo} ${styles}`}>
      <span className={LogoStyles.logo__leftPart}>Ihor</span>
      <span className={LogoStyles.logo__rightPart}>Kuchin</span>
    </a>
  );
};

export default Logo;
