import React from 'react';
import Img from '../../../../assets/img/Img';
import works from '../../../../database/works';
import Work from './Work/Work';
import styles from './Works.module.scss';

const Works = () => {
  return (
    <section className={styles.works}>
      <Img id='works' />
      <div className='container'>
        <div className={styles.works__inner}>
          {works.map(work => (
            <Work work={work} key={work.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
