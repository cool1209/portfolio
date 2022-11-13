import React from 'react';
import Icon from '../../../../../../assets/icons/Icon';
import styles from './Contact.module.scss';
import ContactButton from './ContactButton/ContactButton';

const Contact = ({ contact }) => {

  return (
    <li className={styles.contact}>
      <div className={styles.contact__info}>
        <Icon id={contact.name} />
        <span>{contact.info}</span>
      </div>

      <ContactButton
        name={contact.buttonName}
        link={contact.info}
      />
    </li>
  );
};

export default Contact;
