/** @format */

import React, { useState } from "react";
import Sidebar from "./sidebar";
import { MyContext } from "./MyContext";

const HOC = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(true);
    return (
      <>
        <section
          className="overflow-x-hidden HOCcomp"
        >
          <div
            className={hamb ? "activeSidebar" : "newsidebar"}
          
          >
            <Sidebar />
          </div>

          <div className="nvaCOnt">
            {/* <Navbar hamb={hamb} setHamb={setHamb} /> */}
            <div>
              <Wcomponenet hamb={hamb} setHamb={setHamb}  />
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
