import React from 'react';
import styles from './Expirience.module.scss';
import expirience from '../../../../../data/expirience';
import ExpirienceItem from './ExpirienceItem/ExpirienceItem';

const Expirience = () => {
  return (
    <ul className={styles.experienceList}>
      {expirience.map( expirienceItem => (
        <ExpirienceItem 
          key={expirienceItem.id}
          expirienceItem={expirienceItem}
        />
      ))}
    </ul>
  );
};

export default Expirience;
