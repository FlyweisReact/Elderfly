/** @format */

import React, { useState, useEffect } from "react";
import HOC from "./HOC";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const Emergency = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const FetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/emergency"
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [staffId, setStaffId] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [subservices, setSubServices] = useState("");
    const [status, setStatus] = useState("");
    const [staffdata, setStaffData] = useState([]);
    const [subdata, setSubData] = useState([]);

    const getStaff = async () => {
      try {
        const { data } = await axios.get(
          "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/staff"
        );
        setStaffData(data.staff);
      } catch (e) {
        console.log(e);
      }
    };

    const getSubService = async () => {
      try {
        const { data } = await axios.get(
          "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/subservi"
        );
        setSubData(data);
      } catch (e) {
        console.log(e);
      }
    };

    useEffect(() => {
      if (props.show) {
        getStaff();
        getSubService();
      }
    }, [props]);

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/emergency",
          {
            staffId,
            date,
            time,
            subservices,
            status,
          }
        );
        console.log(data);
        FetchData();
        props.onHide();
        toast.success("Added");
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
            Add Emergency Service{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Select
              aria-label="Default select example"
              className="mb-3"
              onChange={(e) => setStaffId(e.target.value)}
            >
              <option> -- Select Staff --</option>
              {staffdata?.map((i, index) => (
                <option key={index} value={i._id}>
                  {" "}
                  {i.name}{" "}
                </option>
              ))}
            </Form.Select>
            <Form.Select
              aria-label="Default select example"
              className="mb-3"
              onChange={(e) => setSubServices(e.target.value)}
            >
              <option> -- Select Sub-Service --</option>
              {subdata?.map((i, index) => (
                <option key={index} value={i._id}>
                  {" "}
                  {i.subServices}{" "}
                </option>
              ))}
            </Form.Select>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setStatus(e.target.value)}
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

  const deleteHandler = async (id) => {
    try{
      const { data } = await axios.delete(`https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/emergency/${id}`)
      console.log(data)
      FetchData()
      toast.success('Deleted')
    }catch(e) { 
      console.log(e)
    }
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="Head">
        <div>
          <h4>Emergency Service</h4>
        </div>
        <button onClick={() => setModalShow(true)}> + Create New </button>
      </div>

      <div className="overflowCont">
        <Table style={{ width: "90%", margin: "auto", marginTop: "20px" }}>
          <thead>
            <tr>
              <td>Number</td>
              <td>Staff Name</td>
              <td> Date </td>
              <td> Time </td>
              <td> Sub Service </td>
              <td> Status </td>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {i.staffId?.name} </td>
                <td> {i.date} </td>
                <td> {i.time} </td>
                <td> {i.subservices?.subServices} </td>
                <td> {i.status} </td>
                <td>
                  <i className="fa-solid fa-trash" onClick={() => deleteHandler()} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Emergency);
