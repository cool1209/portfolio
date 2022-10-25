import React from 'react';
import styles from './NavigationLink.module.scss';

const NavigationLink = ({ link }) => {
  return (
    <a href={`#${link}`} className={styles.link}>
      {link}
    </a>
  );
};

export default NavigationLink;
