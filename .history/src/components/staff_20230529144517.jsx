/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Alert, Table } from "react-bootstrap";
import { Form, Modal } from "react-bootstrap";
import HOC from "./HOC";

const Staff = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://nishant-jain12.vercel.app/api/v1/staff"
      );
      setData(data.staff);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [officialEmail, setOfficialEmail] = useState("");
    const [nationality, setNationality] = useState("");
    const [language, setLanguage] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [Department, setDepartment] = useState("");
    const [workLocation, setWorkLocation] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    const AddStaff = async (e) => {
      e.preventDefault();
      if (password === confirmPassword) {
        try {
          const { data } = await axios.post(
            "https://nishant-jain12.vercel.app/api/v1/staff",
            {
              name,
              address,
              birthday,
              gender,
              officialEmail,
              emailAddress: officialEmail,
              nationality,
              language,
              phoneNumber,
              Department,
              workLocation,
              password,
              confirmPassword,
            }
          );
          console.log(data);
          fetchData();
          toast.success("Staff Added");
          props.onHide();
        } catch (e) {
          console.log(e);
        }
      } else {
        setPasswordError(true);
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
            Add Staff{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {passwordError ? (
            <Alert variant="danger">Passwords Not match</Alert>
          ) : (
            ""
          )}
          <Form onSubmit={AddStaff}>
            <Form.Group className="mb-3">
              <Form.Label>Name / Surname</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Address</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Birthday</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setBirthday(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Gender</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setGender(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setOfficialEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Nationality</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setNationality(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Language</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setLanguage(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Phone Number</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{10}"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Department</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDepartment(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Location</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setWorkLocation(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Confirm Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
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
    try {
      const { data } = await axios.delete(
        `https://nishant-jain12.vercel.app/api/v1/staff/${id}`
      );
      console.log(data);
      fetchData();
      toast.success("Staff Deleted");
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
          <h4>Staff (Total : {data?.length}) </h4>
        </div>
        <div>
          <button onClick={() => setModalShow(true)}> + Create New</button>
        </div>
      </div>

      <div className="overflowCont" sty>
        <Table className="NewTable">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Address</th>
              <th>Birthday</th>
              <th>Gender</th>
              <th>Officaial Email</th>
              <th>Nationality</th>
              <th> Language </th>
              <th> Phone Number </th>
              <th>Department </th>
              <th>Work Location </th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> #{index + 1} </td>
                <td> {i.name} </td>
                <td> {i.address} </td>
                <td> {i.birthday} </td>
                <td> {i.gender} </td>
                <td> {i.officialEmail} </td>
                <td> {i.nationality} </td>
                <td> {i.language} </td>
                <td> {i.phoneNumber} </td>
                <td> {i.Department} </td>
                <td> {i.workLocation} </td>
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
    </>
  );
};

export default HOC(Staff);
