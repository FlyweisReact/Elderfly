/** @format */

import React, { useState } from "react";
import img from "../Images/c-7.png";
import img2 from "../Images/c-8.png";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Navbar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();
  const Name = localStorage.getItem("AdminName")
  const [ modalShow , setModalShow] = useState(false)

  function LogOut() {
    localStorage.clear();
    navigate("/");
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Update Profile 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
        </Modal.Body>
      </Modal>
    );
  }
  

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
            <h6> {Name} </h6>
            <p>Admin Login</p>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              className="dropDown"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item  onClick={() => LogOut()}>
                Log Out{" "}
                <i
                  className="fa-solid fa-right-from-bracket"
                 
                ></i>{" "}
              </Dropdown.Item>
              <Dropdown.Item  onClick={() => LogOut()}>
                Updtate Profile{" "}
                <i className="fa-sharp fa-solid fa-user"></i> 
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Navbar;
