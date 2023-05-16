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
import { Modal, Form, FloatingLabel, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "./HOC";

const Subs = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");

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
    const [planName, setPlanName] = useState("");
    const [amountPerMonth, setAmountPerMonth] = useState("");
    const [data, setData] = useState("");
    const [endDate, setEndDate] = useState("");
    const [startDate, setStartDate] = useState("");

    const AddSubscription = async (e) => {
      e.preventDefault();
      try {
        const { HandlerData } = await axios.post(
          "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/subcriptions",
          {
            planName,
            amountPerMonth,
            data,
            endDate,
            startDate,
          }
        );
        console.log(HandlerData);
        toast.success("Subscription Added");
        props.onHide();
        fetchData();
      } catch (e) {
        console.log(e);
      }
    };

    const EditSubscription = async (e) => {
      e.preventDefault();
      try {
        const { HandlerData } = await axios.put(
          `https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/subcriptions/${id}`,
          {
            planName,
            amountPerMonth,
            data,
            endDate,
            startDate,
          }
        );
        console.log(HandlerData);
        toast.success("Subscription Edited");
        props.onHide();
        fetchData();
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
            {edit ? "Edit" : "Add"} Subscription
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={edit ? EditSubscription : AddSubscription}>
            <Form.Group className="mb-3">
              <Form.Label>Plan Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setPlanName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount Per Month</Form.Label>
              <Form.Control
                type="number"
                min={0}
                onChange={(e) => setAmountPerMonth(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  onChange={(e) => setData(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>
            <Button className="submitBtn" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  const deleteSubscription = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/subcriptions/${id}`
      );
      console.log(data);
      toast.success("Subscription  Deleted");
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="Head">
        <div>
          <h4>Plan & Pricing</h4>
          <p>
            Simple Pricing, No hidden fees, Advance feature for your business
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
          >
            + Create New
          </button>
        </div>
      </div>

      <div className="dash-cont">
        <div className="dash-right">


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
                    <button
                      onClick={() => {
                        setId(i._id);
                        setEdit(true);
                        setModalShow(true);
                      }}
                    >
                      Edit{" "}
                    </button>
                    <button onClick={() => deleteSubscription(i._id)}>
                      Remove{" "}
                    </button>
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

export default HOC(Subs);
