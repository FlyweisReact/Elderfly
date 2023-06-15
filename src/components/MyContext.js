/** @format */

import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [navShow, setNavShow] = useState(true);

  return (
    <MyContext.Provider
      value={{
        navShow,
        setNavShow,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
