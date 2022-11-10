import React from 'react';
import { useAppContext } from '../../../../../hooks/useAppContext';
import ExpirienceItem from './ExpirienceItem/ExpirienceItem';

const Expirience = () => {
  const { expirience } = useAppContext();

  return (
    <ul>
      {expirience.map( expirienceItem => (
        <ExpirienceItem 
          key={expirienceItem.date}
          expirienceItem={expirienceItem}
        />
      ))}
    </ul>
  );
};

export default Expirience;
