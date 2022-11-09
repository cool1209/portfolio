import React from 'react';
import styles from './About.module.scss';
import Skills from './Skills/Skills';
import Expirience from './Expirience/Expirience';
import Education from './Education/Education';
import PageBackground from '../../../../assets/img/PageBackground';


const About = () => {
  return (
  <section className={styles.about}>
    <PageBackground id='about' />
    <div className='container'>
      <div className={styles.about__inner}>
        <div className={styles.about__col}>
          <div className={styles.about__colItem}>
            <h2 className={styles.about__title}>
              Experience
            </h2>
    
            <Expirience />
          </div>
        </div>

        <div className={styles.about__col}>
          <div className={styles.about__colItem}>
            <h2 className={styles.about__title}>
              Skills
            </h2>

            <Skills />
          </div>

          <div className={styles.about__colItem}>
            <h2 className={styles.about__title}>
              Education
            </h2>
    
            <Education />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
