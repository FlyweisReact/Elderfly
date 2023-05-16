/** @format */

import React, { useState } from "react";
import img2 from "../Images/c-8.png";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import {  Form } from "react-bootstrap";

const Navbar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();
  const Name = localStorage.getItem("AdminName");
  const AdminId = localStorage.getItem("AdminId");
  const [modalShow, setModalShow] = useState(false);

  function LogOut() {
    localStorage.clear();
    navigate("/");
  }

  function MyVerticallyCenteredModal(props) {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const updateProfile = async (e) => {
      e.preventDefault();

      try {
        const { data } = await axios.put(
          `https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/auth/${AdminId}`,
          {
            username,
            email,
            password,
            role: "admin",
          }
        );
        console.log(data);
        toast.success("Profile Updated Successfully");
        props.onHide();
        navigate("/")
      } catch (e) {
        console.log(e);
      }
    };

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
          <Form onSubmit={updateProfile}>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <button type="submit" className="SubmitBtn">
              Submit
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="dash-right-top">
        <div className="dash-top-left">
          <i className="fa fa-bars barsIcon" onClick={() => setHamb(!hamb)}></i>
          <input type="text" placeholder="Search" />
        </div>

        <div className="dash-top-right">
          <img className="img2" src={img2} alt="" />
          <div className="r-cont">
            <h6> {Name} </h6>
            <p>Admin</p>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              className="dropDown"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => LogOut()}>
                Log Out <i className="fa-solid fa-right-from-bracket"></i>{" "}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setModalShow(true)}>
                Updtate Profile <i className="fa-sharp fa-solid fa-user"></i>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Navbar;
