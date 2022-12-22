import React from 'react';
import styles from './Education.module.scss';

const Education = ({ educationItem }) => {
  return (
    <div className={styles.education}>
      <div className={styles.education__organization}>
        {educationItem.organization}:
      </div>

      <div className={styles.education__education}>
        {educationItem.education}
      </div>
    </div>
  );
};

export default Education;
