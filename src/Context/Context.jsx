import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const [dashclicked, setdashClicked] = useState(false);
  const [clas, setClas] = useState("none");
  const handleClick = () => {
    setClicked(true);
  };
  const handleDash = () => {
    setdashClicked(!dashclicked);
    if (dashclicked) {
      setClas("block");
    } else {
      setClas("none");
    }
  };

  return (
    <AppContext.Provider
      value={{ clicked, handleClick, dashclicked, handleDash, clas, setClas }}
    >
      {children}
    </AppContext.Provider>
  );
};
