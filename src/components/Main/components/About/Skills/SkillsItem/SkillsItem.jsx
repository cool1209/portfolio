import React from 'react';
import styles from './SkillsItem.module.scss';

const SkillsItem = ({ skillsItem }) => {
  return (
    <li className={styles.skillsItem}>
      {skillsItem.info}
    </li>
  );
};

export default SkillsItem;
