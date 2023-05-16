/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import HOC from "./HOC";
import { Modal } from "bootstrap";

const AddScreen = () => {
  const [data, setData] = useState([]);

  const getBlogs = async () => {
    try {
      const { data } = await axios.get(
        "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/blog"
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

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

  return (
    <>
      <div className="Head">
        <h4>Blogs</h4>
        <button>Upload</button>
      </div>

      <div className="Three-Cont2">
        {data?.map((i, index) => (
          <div key={index}>
            <img src={i.image} alt="" />
            <p> {i.desc} </p>
          </div>
        ))}
      </div>

 
    </>
  );
};

export default HOC(AddScreen);
