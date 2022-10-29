import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import Works from './components/Works/Works';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/works' element={<Works />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contacts' element={<Contacts />}/>
      </Routes>
    </main>
  );
};

export default Main;
