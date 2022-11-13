import React from 'react';
import styles from './Contacts.module.scss';
import PageBackground from '../../../../assets/img/PageBackground';
import ContactsList from './ContactsList/ContactsList';
import DownloadCVButton from './DownloadCVButton/DownloadCVButton';

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <PageBackground id='contacts' />
      <div className='container'>
        <div className={styles.contacts__inner}>
          <ContactsList />
          <DownloadCVButton styles={styles.contacts__button} />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
