
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  }

  return (
    <AppContext.Provider value={{ clicked, handleClick }}>
      {children}
    </AppContext.Provider>
  );
}
