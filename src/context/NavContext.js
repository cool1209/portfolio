import React, { useState } from 'react';

export const NavContext = React.createContext({
  isActive: false,
  setIsActive: () => {}
});

export const NavProvider = ({ children }) => {
  const [ isActive, setIsActive ] = useState(false);

  const contextValue = {
    isActive,
    setIsActive: () => {
      setIsActive(!isActive);
    }
  }

  return (
    <NavContext.Provider value={contextValue}>
      {children}
    </NavContext.Provider>
  );
};
