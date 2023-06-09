/** @format */

import React, { useState, useEffect } from "react";
import HOC from "../HOC";
import { Alert, Badge, Table } from "react-bootstrap";
import axios from "axios";
import { Form, Modal, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

const Customer = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://nishant-jain12.vercel.app/api/v1/usercreate/getAllUser"
      );
      setData(data.user.reverse());
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(false);

    const postHandler = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const { data } = await axios.post(
          "https://nishant-jain12.vercel.app/api/v1/auth",
          {
            username,
            email,
            password,
            role,
          }
        );
        fetchData();
        console.log(data);
        toast.success(" New user Created Successfully");
        props.onHide();
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
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
            Add User{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
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

            <Form.Select
              aria-label="Default select example"
              className="mb-3"
              onChange={(e) => setRole(e.target.value)}
            >
              <option>--Select Role --</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Form.Select>

            <button type="submit" className="SubmitBtn">
              {loading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                "Create"
              )}
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://nishant-jain12.vercel.app/api/v1/usercreate/deleteUserById/644faccc93${id}`
      );
      console.log(data);
      toast.success("Deleted");
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
      {/* <Navbar /> */}

      <div className="Head">
        <div>
          <h4>Users (Total : {data?.length}) </h4>
        </div>
        <div>
          <button onClick={() => setModalShow(true)}> + Create New</button>
        </div>
      </div>

      {data?.length === 0 || !data ? (
        <Alert style={{ width: "90%", margin: "auto", marginTop: "20px" }}>
          No Data Found
        </Alert>
      ) : (
        <div className="overflowCont">
          <Table className="NewTable">
            <thead>
              <tr>
                <th>Number</th>
                <th>User Name</th>
                <th>Email Address</th>
                <th> Role </th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> #{index + 1} </td>

                  <td>{i.username}</td>
                  <td>{i.email}</td>
                  <td>
                    {i.role === "admin" ? (
                      <Badge bg="success">Admin</Badge>
                    ) : (
                      ""
                    )}
                    {i.role === "user" ? <Badge>User</Badge> : ""}
                  </td>
                  <td>
                    <span>
                      <i
                        className="fa-solid fa-trash"
                        onClick={() => deleteHandler(i._id)}
                      ></i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default HOC(Customer);
