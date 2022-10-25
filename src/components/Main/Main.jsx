import React from 'react';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import Works from './components/Works/Works';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <Home />
      <Works />
      <About />
      <Contacts />
    </main>
  );
};

export default Main;