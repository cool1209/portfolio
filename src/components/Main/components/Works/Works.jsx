import React from 'react';
import Img from '../../../../assets/img/Img';
import works from '../../../../data/works';
import Work from './Work/Work';
import styles from './Works.module.scss';

const Works = () => {
  return (
    <section className={styles.works}>
      <Img id='works' />
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
