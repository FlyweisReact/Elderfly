/** @format */

import React from "react";
import img from "../Images/c-7.png";
import img2 from "../Images/c-8.png";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = ({ hamb, setHamb }) => {
  return (
    <>
      <div className="dash-right-top">
        <div className="dash-top-left">
          <i className="fa fa-bars barsIcon" onClick={() => setHamb(!hamb)}></i>
          <input type="text" placeholder="Search" />
        </div>

        <div className="dash-top-right">
          <img className="img1" src={img} alt="" />
          <img className="img2" src={img2} alt="" />
          <div className="r-cont">
            <h6>Nishant Jain</h6>
            <p>Admin Login</p>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              className="dropDown"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                Log Out <i className="fa-solid fa-right-from-bracket"></i>{" "}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Navbar;
