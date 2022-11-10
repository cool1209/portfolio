import React from 'react';
import contacts from '../../../../data/contacts';
import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <ul>
        {contacts.map(contact => (
          <li key={contact.name}>
            <a href="#">
              <div>
                
              </div>

              <div>
                {contact.name}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contacts;
