/** @format */

import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import img from "../Images/c-16.png";



const RemoveStaff = () => {
  return (
    <>
      <div className="dash-cont">
        <div className="dash-left">
          <Sidebar />
        </div>
        <div className="dash-right">
          <Navbar />
          <div className="remove-staff-top">
            <h4>Remove Staff</h4>
          </div>

          <div className="staff-mid-cont">
            <div className="remove-staff-box">
              <img src={img} alt="" />
              <h4>Rahul Sharma</h4>
              <p>
                Lorem Ipsum is a dummy text which is used to check and deploy
                various elements in the static and dynamic website webud.
              </p>
              <button>Remove</button>
            </div>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default RemoveStaff;
