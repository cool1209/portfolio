import React from 'react';
import styles from './Education.module.scss';
import education from '../../../../../data/education';
import EducationItem from './EducationItem/EducationItem';


const Education = () => {
  return (
    <ul className={styles.educationList}>
      {education.map( educationItem => (
        <EducationItem
          educationItem={educationItem} 
          key={educationItem.id}
        />
      ))}
    </ul>
  );
};

export default Education;
