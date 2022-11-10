import React from 'react';
import PageBackground from '../../../../assets/img/PageBackground';
import { useAppContext } from '../../../../hooks/useAppContext';
import Work from './Work/Work';
import styles from './Works.module.scss';

const Works = () => {
  const { works } = useAppContext();

  return (
    <section className={styles.works}>
      <PageBackground id='works' />
      <div className='container'>
        <ul className={styles.works__inner}>
          {works.map(work => (
            <li key={work.name}>
              <Work work={work} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Works;
