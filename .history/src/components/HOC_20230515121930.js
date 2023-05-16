/** @format */

import React, { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const HOC = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(true);
    return (
      <>
        <section className="overflow-x-hidden HOCcomp" style={{border : '1px solid black'}} > 
          <div className={hamb ? "activeSidebar" : "sidebar"} style={{width : '300px'}}>
                <Sidebar />
          </div>

          <div className="nva">
            <Navbar hamb={hamb} setHamb={setHamb} />
            <div>
              <Wcomponenet />
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
