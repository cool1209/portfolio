import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './CustomNavLink.module.scss';

const CustomNavLink = ({ name, path }) => {
  return (
    <NavLink
      to={path} 
      className={({ isActive }) => (
        isActive 
        ? `${styles.link} ${styles.link_active}`
        : styles.link
      )}
    >
      {name}
    </NavLink>
  );
};

export default CustomNavLink;
