import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../shared/Button/Button';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <section className={styles.home} id='home'>
      <div className={styles.home__blure}>
        <div className='container'>
          <div className={styles.home__inner}>
            <h1 className={styles.home__title}>
              Hello there!
            </h1>

            <div className={styles.home__text}>
              <p>
                I'm a frontend developer with a desire to learn new and improve. Currently, I'm looking for a react developer position and new challenging projects to develop myself even more.
              </p>

              <p>
                I have profound knowledge of HTML and CSS including preprocessors (Sass/Less), a good understanding of responsive web design, and proficiency in working with native JavaScript (Typescript) & Frameworks (React, Redux, MobX, NextJS). Also, I'm ready to learn new technologies.
              </p>
            </div>

            <NavLink to='/works'>
              <Button name='Portfolio' />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
