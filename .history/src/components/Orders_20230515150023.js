/** @format */

import React, { useState, useEffect } from "react";
import HOC from "./HOC";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Form , Button , Modal } from 'react-bootstrap'

const Orders = () => {
  const [order, setOrder] = useState([]);

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/orderr"
      );
      setOrder(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  // Edit Order Status
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
           Edit Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Label>
            <Form.Control 
          </Form.Label>
        </Form>
        </Modal.Body>
      </Modal>
    );
  }
  

  return (
    <>
      <div className="Head">
        <div>
          <h4>Orders</h4>
        </div>
      </div>

      <div className="overflowCont">
        <Table style={{ width: "90%", margin: "auto" , marginTop  : '20px' }} striped bordered hover>
          <thead>
            <tr>
              <td>Number</td>
              <td>Service Id</td>
              <td> User Id </td>
              <td> Call </td>
              <td> Date </td>
              <td> Time </td>
              <td>Created Date </td>
              <td>Staff Id </td>
              <td> Status </td>
              <td>Options</td>
            </tr>
          </thead>
          <tbody>
            {order?.map((i, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {i.subservicesId} </td>
                <td> {i.userId} </td>
                <td> {i.Call} </td>
                <td> {i.date} </td>
                <td> {i.time} </td>
                <td> {i.createdAt?.slice(0, 10)} </td>
                <td> {i.staffId} </td>
                <td> {i.status === true ? 'True' : "False" } </td>
                <td>
                  <span>
                  <i className="fa-regular fa-pen-to-square"></i>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Orders);
