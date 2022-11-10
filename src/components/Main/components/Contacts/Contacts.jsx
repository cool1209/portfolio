import React from 'react';
import styles from './Contacts.module.scss';
import Button from '../../../shared/Button/Button';
import PageBackground from '../../../../assets/img/PageBackground';
import ContactsList from './ContactsList/ContactsList';

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <PageBackground id='contacts' />
      <div className='container'>
        <div className={styles.contacts__inner}>
          <ContactsList />
          <Button name='Download _CV' styles={styles.contacts__button} />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
