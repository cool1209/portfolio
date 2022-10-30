import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NavContext } from '../../../context/NavContext';
import linkStyles from './CustomNavLink.module.scss';

const CustomNavLink = ({ name, path, styles }) => {
  const { setIsActive } = useContext(NavContext);

  return (
    <NavLink
      to={path}
      className={({ isActive }) => (
        isActive
        ? `${linkStyles.link} ${styles} ${linkStyles.link_active}`
        : `${linkStyles.link} ${styles}`
      )}
      onClick={setIsActive}
    >
      {name}
    </NavLink>
  );
};

export default CustomNavLink;
