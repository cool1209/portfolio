import React from 'react';
import styles from './EducationItem.module.scss';

const EducationItem = ({ educationItem }) => {
  return (
    <li className={styles.educationItem}>
      <div className={styles.educationItem__organization}>
        {educationItem.organization}:
      </div>

      <div className={styles.educationItem__education}>
        {educationItem.education}
      </div>
    </li>
  );
};

export default EducationItem;
