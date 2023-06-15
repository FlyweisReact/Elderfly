/** @format */

import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [navShow , setNavShow] = useState(false);

  return (
    <MyContext.Provider
      value={{
        navShow , setNvShow
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
