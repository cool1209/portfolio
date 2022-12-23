import React from "react";
import classNames from "classnames";

import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";

const Navigation = () => {
  const { isActiveMenu } = useAppContext();
  const { setIsActiveMenu } = useAppContext();

  const links = ["home", "works", "about", "contacts"];

  return (
    <nav
      className={classNames(styles.nav, { [styles.nav_active]: isActiveMenu })}
    >
      {links.map((link) => (
        <NavLink
          key={link}
          to={`/${link}`}
          className={({ isActive }) =>
            isActive
              ? `${styles.nav__link} ${styles.nav__link_active}`
              : styles.nav__link
          }
          onClick={isActiveMenu && setIsActiveMenu}
        >
          {link}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
