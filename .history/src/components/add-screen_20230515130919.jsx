/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import HOC from "./HOC";
import { Modal } from "bootstrap";
import { Form } from "react-router-dom";

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
          Add Blog
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

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
