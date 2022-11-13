import React, { useState } from 'react';
import greeting from '../data/greeting';
import works from '../data/works';
import expirience from '../data/expirience';
import skills from '../data/skills';
import education from '../data/education';
import contacts from '../data/contacts';

export const AppContext = React.createContext({
  greeting: {},
  works: [],
  expirience: [],
  skills: [],
  educations: [],
  contacts: [],
  isActiveMenu: false,
  setIsActiveMenu: () => {}
});

export const AppProvider = ({ children }) => {
  const [ isActiveMenu, setIsActiveMenu ] = useState(false);

  const contextValue = {
    greeting,
    works,
    expirience,
    skills,
    education,
    contacts,
    isActiveMenu,
    setIsActiveMenu: () => {
      setIsActiveMenu(!isActiveMenu);
    }
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
