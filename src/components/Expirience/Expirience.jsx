import React from 'react';
import styles from './Expirience.module.scss';

const Expirience = ({ expirienceItem }) => {
  return (
    <div className={styles.expirience}>
      <div className={styles.expirience__element}>
        <span className={styles.expirience__elementName}>
          Position
        </span>
        {': '}
        <span className={styles.expirience__elementInfo}>
          {expirienceItem.position}
        </span>
      </div>

      <div className={styles.expirience__element}>
        <span className={styles.expirience__elementName}>
          Company
        </span>{': '}

        <span className={styles.expirience__elementInfo}>
          {expirienceItem.company}
        </span>
      </div>

      <div className={styles.expirience__element}>
        <span className={styles.expirience__elementName}>
          Date
        </span>{': '}

        <span className={styles.expirience__elementInfo}>
          {expirienceItem.date}
        </span>
      </div>

      {expirienceItem.technologies &&
        <div className={styles.expirience__element}>
          <span className={styles.expirience__elementName}>
            Technologies
          </span>{': '}

          <div className={
            `${styles.expirience__elementInfo} ${styles.expirience__technologies}`
          }>
            {expirienceItem.technologies}
          </div>
        </div>
      }

      <div className={styles.expirience__element}>
        <span className={styles.expirience__elementName}>
          Responsibilities
        </span>{': '} 
        
        <ul className={styles.expirience__responsibilities}>
          {expirienceItem.responsibilities.map(responsibility => (
            <li
              key={responsibility}
              className={
                `${styles.expirience__elementInfo} ${styles.expirience__responsibility}`
              }
            >
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Expirience;
