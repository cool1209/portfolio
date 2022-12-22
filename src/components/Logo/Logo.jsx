import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext';
import LogoStyles from './Logo.module.scss';

const Logo = ({ styles = null }) => {
  const { setIsActiveMenu } = useAppContext();
  const { isActiveMenu } = useAppContext();

  return (
    <NavLink
      to='/'
      className={`${LogoStyles.logo} ${styles}`}
      onClick={isActiveMenu && setIsActiveMenu}
    >
      <span className={LogoStyles.logo__leftPart}>Ihor</span>
      <span className={LogoStyles.logo__rightPart}>Kuchin</span>   
    </NavLink>
  );
};

export default Logo;
