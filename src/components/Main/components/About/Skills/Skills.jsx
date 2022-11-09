import React from 'react';
import styles from './Skills.module.scss';
import skills from '../../../../../data/skills';
import SkillsItem from './SkillsItem/SkillsItem';

const Skills = () => {
  return (
    <ul className={styles.skillsList}>
      {skills.map(skillsItem => (
        <SkillsItem
          key={skillsItem.id}
          skillsItem={skillsItem}
        />
      ))}
    </ul>
  );
};

export default Skills;
