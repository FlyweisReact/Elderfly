/** @format */

import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [navShow , set] = useState(false);

  return (
    <MyContext.Provider
      value={{
        
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
