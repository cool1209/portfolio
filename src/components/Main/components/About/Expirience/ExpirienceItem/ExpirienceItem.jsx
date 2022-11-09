import React from 'react';
import styles from './ExpirienceItem.module.scss';

const ExpirienceItem = ({ expirienceItem }) => {
  return (
    <li className={styles.expirienceItem}>
      <div className={styles.expirienceItem__element}>
        <span className={styles.expirienceItem__elementName}>
          Position
        </span>
        {': '}
        <span className={styles.expirienceItem__elementInfo}>
          {expirienceItem.position}
        </span>
      </div>

      <div className={styles.expirienceItem__element}>
        <span className={styles.expirienceItem__elementName}>
          Company
        </span>{': '}

        <span className={styles.expirienceItem__elementInfo}>
          {expirienceItem.company}
        </span>
      </div>

      <div className={styles.expirienceItem__element}>
        <span className={styles.expirienceItem__elementName}>
          Date
        </span>{': '}

        <span className={styles.expirienceItem__elementInfo}>
          {expirienceItem.date}
        </span>
      </div>

      {expirienceItem.technologies &&
        <div className={styles.expirienceItem__element}>
          <span className={styles.expirienceItem__elementName}>
            Technologies
          </span>{': '}

          <div className={
            `${styles.expirienceItem__elementInfo} ${styles.expirienceItem__technologies}`
          }>
            {expirienceItem.technologies}
          </div>
        </div>
      }

      <div className={styles.expirienceItem__element}>
        <span className={styles.expirienceItem__elementName}>
          Responsibilities
        </span>{': '} 
        
        <ul className={styles.expirienceItem__responsibilities}>
          {expirienceItem.responsibilities.map(responsibility => (
            <li
              key={responsibility}
              className={
                `${styles.expirienceItem__elementInfo} ${styles.expirienceItem__responsibility}`
              }
            >
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ExpirienceItem;
