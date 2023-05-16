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
          {/* Sidebar */}
          <div className={hamb ? "activeSidebar" : "sidebar"}>
                <Sidebar />
          </div>
          <div
            className={
              hamb
                ? "Dash"
                : "activeDash"
            }
          >
            <Navbar hamb={hamb} setHamb={setHamb} />
            <div className="my-6 text-white h-[87%] wcomp overflow-y-auto">
              <Wcomponenet />
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
