/** @format */

import React, { useContext, useState } from "react";
import Sidebar from "./sidebar";
import { MyContext } from "./MyContext";

const HOC = (Wcomponenet) => {
  return function Component() {
  const { navShow , setNavShow } = useContext(MyContext);
    return (
      <>
        <section
          className="overflow-x-hidden HOCcomp"
        >
          <div
            className={navShow ? "activeSidebar" : "newsidebar"}
          
          >
            <Sidebar />
          </div>

          <div className="nvaCOnt">
            <div>
              <Wcomponenet   />
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
