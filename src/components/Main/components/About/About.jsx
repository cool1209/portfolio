import React from 'react';
import Img from '../../../../assets/img/Img';
import styles from './About.module.scss';

const About = () => {
  return (
  <section className={styles.about}>
    <Img id='about' />
    <div className='container'>
      <div className={styles.about__inner}>
        <ul className={styles.about__skills}>

        </ul>

        <div>
          <ul className={styles.about__experience}>

          </ul>

          <ul className={styles.about__education}>

          </ul>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
