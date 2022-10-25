import React from 'react';
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

            <p className={styles.home__text}>
              I'm a frontend developer with a huge desire to learn new and improve. Currently, I'm looking for a new challenging project to develop myself even more. I have profound knowledge of HTML5/CSS3 including preprocessors (Sass/Less), a good understanding of responsive web design, and proficiency in working with native JavaScript (Typescript) & Frameworks (React, Redux). Also, I'm ready to learn new technologies. I have experience in website layout and developing interfaces for web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
