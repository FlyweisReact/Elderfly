/** @format */

import React, { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

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
            // style={{ width: "300px" }}
          >
            <Sidebar />
          </div>

          <div className="nvaCOnt">
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
