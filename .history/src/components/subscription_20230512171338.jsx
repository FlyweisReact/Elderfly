/** @format */

import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";
import img9 from "../Images/c-3.png";
import img10 from "../Images/c-4.png";
import img11 from "../Images/c-5.png";
import img12 from "../Images/c-6.png";
// import img from "../Images/c-14.png";
import axios from "axios";
import { Modal, Form, FloatingLabel } from "react-bootstrap";

const Subs = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  const navigate = useNavigate();

  function MobileBar() {
    return (
      <>
        <div className="side-cont2">
          <button onClick={handleClick}>Close</button>
          <div className="side-cont-sub">
            <div className="lst-item">
              <div
                className="lst-item-1"
                onClick={() => navigate("/dashboard")}
              >
                <img src={img9} alt="" />
                <p>Dash Board</p>
              </div>
            </div>
            <div className="lst-itemp">
              <div className="lst-item-1" onClick={() => navigate("/subs")}>
                <img src={img10} alt="" />
                <p>Subscription</p>
              </div>
            </div>
            <div className="lst-itemp">
              <div className="lst-item-1" onClick={() => navigate("/staff")}>
                <img src={img11} alt="" />
                <p>Staff</p>
              </div>
            </div>
            <div className="lst-itemp">
              <div className="lst-item-1" onClick={() => navigate("/review")}>
                <img src={img12} alt="" />
                <p>Review</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/subcriptions"
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  function MyVerticallyCenteredModal(props) {

    const [ planName , setPlanName ] = useState("")
    const [ amountPerMonth , setAmountPerMonth ] = useState("")
    const [ data , setData ] = useState("")
    const [ endDate , setEndDate ] = useState("")
    const [ startDate , setStartDate ] = useState("")


    const AddSubscription = async (e) => {
        e.preventDefault()
        try{
            const { data } = await axios.post("https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/subcriptions" , {
                planName , amountPerMonth , data , endDate , 
            })
        }catch(e) { 
            console.log(e)
        }
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Subscription
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Plan Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount Per Month</Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {show ? <MobileBar className="mobilSideShow" /> : ""}
      <div className="dash-cont">
        <div className="dash-left">
          <Sidebar />
        </div>
        <i className="fa fa-bars barsIcon" onClick={handleClick}></i>
        <div className="dash-right">
          <Navbar />

          <div className="sub-top">
            <div className="sub-top-l">
              <h4>Plan & Pricing</h4>
              <p>
                Simple Pricing, No hidden fees, Advance feature for your
                business
              </p>
            </div>
            <div className="sub-top-r">
              <button onClick={() => setModalShow(true)}>+ Create New</button>
            </div>
          </div>
          {/* <div className="sub-mod">
            <img src={img} alt="" />
          </div> */}

          <div className="faltu-box">
            {data?.map((i, index) => (
              <div className="subes-box" key={index}>
                <div className="sub-box-item">
                  <div className="sub-box-item-top">
                    <h4> {i.planName} </h4>
                  </div>
                  <div className="sub-box-item-mid">
                    <p className="head">Rs. {i.amountPerMonth}</p>
                    <p className="subhead">Per Month</p>
                    <ul>
                      <li> Start Date : {i.startDate} </li>
                      <li> End Date : {i.endDate} </li>
                      <li> Content : {i.data} </li>
                    </ul>
                  </div>
                  <div className="sub-box-item-below">
                    <button>Edit </button>
                    <button>Remove </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Subs;
