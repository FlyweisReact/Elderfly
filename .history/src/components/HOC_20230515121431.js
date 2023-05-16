/** @format */

import React, { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const HOC = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(false);
    return (
      <>
        <section className="overflow-x-hidden HOCcomp" > 
          <div className={hamb ? "activeSidebar" : "sidebar"} style={{width : '300px'}}>
                <Sidebar />
          </div>

          <div>
            <Navbar hamb={hamb} setHamb={setHamb} />
            <div className="my-6  h-[87%] wcomp overflow-y-auto" style={{width : '100%'}}>
              <Wcomponenet />
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
