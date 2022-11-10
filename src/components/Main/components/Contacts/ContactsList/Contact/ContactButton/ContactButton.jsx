import React from 'react';
import styles from './ContactButton.module.scss';

const compileLinkPath = (name, link) => {
  switch (name) {
    case 'call me':
      return `tel:${link}`;

    case 'send mail':
      return `mailto:${link}`;

    default:
      return link;
  }
}

const ContactButton = ({
  name,
  link,
  style
}) => {
  const buttonLink = compileLinkPath(name, link);
  const targetBlank = (name !== 'call me') && (name !== 'send mail');

  return (
    <a
      href={buttonLink}
      className={`${styles.button} ${style}$`}
      target={targetBlank ? `_blank` : ``}
    >
      <span className={styles.button__name}>
        {name}
      </span>
    </a>
  );
};

export default ContactButton;
