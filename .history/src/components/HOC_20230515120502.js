/** @format */

import React, { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const HOC = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(false);
    return (
      <>
        <section className="d-flex overflow-x-hidden">
          {/* Sidebar */}
          <div>
            <Sidebar hamb={hamb} setHamb={setHamb} />
          </div>
          <div
            className={
              hamb
                ? " transition-all px-4 py-2  bg-white duration-150 w-full h-screen"
                : " w-full h-screen  px-4 py-2  bg-white z-50 transition-all duration-150 "
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
