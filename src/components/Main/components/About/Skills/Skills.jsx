import React from 'react';
import { useAppContext } from '../../../../../hooks/useAppContext';
import styles from './Skills.module.scss';
import SkillsItem from './SkillsItem/SkillsItem';

const Skills = () => {
  const { skills } = useAppContext();

  return (
    <ul className={styles.skillsList}>
      {skills.map(skillsItem => (
        <SkillsItem
          key={skillsItem}
          skillsItem={skillsItem}
        />
      ))}
    </ul>
  );
};

export default Skills;
