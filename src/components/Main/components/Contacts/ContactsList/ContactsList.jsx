import React from 'react';
import { useAppContext } from '../../../../../hooks/useAppContext';
import Contact from './Contact/Contact';
import styles from './ContactsList.module.scss';

const ContactsList = () => {
  const { contacts } = useAppContext();

  return (
    <ul className={styles.contactsList}>
      {contacts.map(contact => (
        <Contact contact={contact}  key={contact.name} />
      ))}
    </ul>
  );
};

export default ContactsList;
