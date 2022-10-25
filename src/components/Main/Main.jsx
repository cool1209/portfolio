import React from 'react';
import Icon from '../../assets/Icon';
import Img from '../../assets/Img';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import Works from './components/Works/Works';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className='container'>
        Main
        <Home />
        <Works />
        <About />
        <Contacts />

        <Icon id='x' />
        <Img id='x' />
      </div>
    </main>
  );
};

export default Main;
