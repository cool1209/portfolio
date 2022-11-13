import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../../../../hooks/useAppContext';
import linkStyles from './CustomNavLink.module.scss';

const CustomNavLink = ({ link, styles }) => {
  const { setIsActiveMenu } = useAppContext();
  const { isActiveMenu } = useAppContext();

  return (
    <NavLink
      to={`/${link}`}
      className={({ isActive }) => (
        isActive
        ? `${linkStyles.link} ${styles} ${linkStyles.link_active}`
        : `${linkStyles.link} ${styles}`
      )}
      onClick={isActiveMenu && setIsActiveMenu}
    >
      {link}
    </NavLink>
  );
};

export default CustomNavLink;
