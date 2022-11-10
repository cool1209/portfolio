import React from 'react';
import { useAppContext } from '../../../../../hooks/useAppContext';
import EducationItem from './EducationItem/EducationItem';


const Education = () => {
  const { education } = useAppContext();

  return (
    <ul>
      {education.map( educationItem => (
        <EducationItem
          educationItem={educationItem} 
          key={educationItem.organization}
        />
      ))}
    </ul>
  );
};

export default Education;
