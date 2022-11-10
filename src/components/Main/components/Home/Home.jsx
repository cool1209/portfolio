import React from 'react';
import { NavLink } from 'react-router-dom';
import PageBackground from '../../../../assets/img/PageBackground';
import { useAppContext } from '../../../../hooks/useAppContext';
import Button from '../../../shared/Button/Button';
import styles from './Home.module.scss';

const Home = () => {
  const { greeting } = useAppContext();

  return (
    <section className={styles.home}>
      <PageBackground id='home' />
      <div className='container'>
        <div className={styles.home__inner}>
          <div className={styles.home__content}>
            <h1 className={styles.home__title}>
              {greeting.title}
            </h1>

            <div className={styles.home__text}>
              {greeting.paragraphs.map(paragraph => (
                <p key={paragraph.id}>
                  {paragraph.text}
                </p>
              ))}
            </div>

            <NavLink to='/works' tabIndex={-1}>
              <Button name='Portfolio' styles={styles.home__button} />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
