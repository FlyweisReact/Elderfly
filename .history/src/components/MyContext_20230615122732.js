/** @format */

import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [show , setShow] = useState(false);

  return (
    <MyContext.Provider
      value={{
        show 
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
