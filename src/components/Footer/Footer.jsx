import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__copyText}>
        Copyright - 2022
      </div>

      <a
        href='https://www.linkedin.com/in/ihor-kuchin-6a3736203/'
        target={`_blank`}
        className={styles.footer__copyAuthor}
      >
        Ihor-IK
      </a>
    </footer>
  );
};

export default Footer;
