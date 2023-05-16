/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../Images/c-15.png";
import img2 from "../Images/c-22.png";
import axios from "axios";
import { toast } from "react-toastify";
import { Alert, Table } from "react-bootstrap";
import { Form, Modal } from "react-bootstrap";
import HOC from "./HOC";

const Staff = () => {
  const navigate = useNavigate();
  const [addStaff, setAddStaff] = useState(false);
  const [data, setData] = useState([]);
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

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/staff"
      );
      setData(data.staff);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const AddStaff = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const { data } = await axios.post(
          "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/staff",
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
        window.scrollTo(0, 0);
      } catch (e) {
        console.log(e);
      }
    } else {
      setPasswordError(true);
    }
  };

  function MyVerticallyCenteredModal(props) {
    const [data, setData] = useState([]);
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
            "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/staff",
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
          window.scrollTo(0, 0);
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
                type="date"
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
              <Form.Control type="text"
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
              <Form.Label> Location</Form.Label>
              <Form.Control
                type="text"
                          onChange={(e) => setWorkLocation(e.target.value)}
                       />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Location</Form.Label>
              <Form.Control
                type="text"
                          onChange={(e) => setWorkLocation(e.target.value)}
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
      <div className="Head">
        <div>
          <h4>Staff (Total : {data?.length}) </h4>
        </div>
        <div>
          <button onClick={() => setAddStaff(true)}> + Create New</button>
        </div>
      </div>

      <div className="dash-cont">
        <div className="dash-right">
          <div className="staff-top-cont">
            <div className="staff-top-cont-l">
              <h3>Add Staff</h3>
            </div>
            <div className="staff-top-cont-r">
              <p>open documentation </p>
              <a href="#some">
                <button onClick={() => setAddStaff(!addStaff)}>
                  Setup Details
                </button>
              </a>
              <img onClick={() => navigate("/remove-staff")} src={img} alt="" />
            </div>
          </div>

          <div className="overflowCont">
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
                          // onClick={() => deleteHandler(i._id)}
                        ></i>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          {addStaff ? (
            <div className="add-staff-cont" id="some">
              <form className="add-staff-form" onSubmit={AddStaff}>
                {passwordError ? (
                  <Alert variant="danger">Passwords Not match</Alert>
                ) : (
                  ""
                )}
                <div className="form-cont-1">
                  <div className="add-form-it">
                    <label>Name / Surname</label>
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="add-form-it">
                    <label>Address</label>
                    <input
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-cont-2">
                  <div className="form-cont-2-l">
                    <img src={img2} alt="" />
                  </div>

                  <div className="form-cont-2-r">
                    <div className="form-cont-2-r1">
                      <div className="form-cont-2-it2">
                        <label>Birthday</label>
                        <input
                          type="date"
                          onChange={(e) => setBirthday(e.target.value)}
                        />
                      </div>
                      <div className="form-cont-2-it2">
                        <label>Gender</label>
                        <input
                          type="text"
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </div>
                      <div className="form-cont-2-it2">
                        <label>Email</label>
                        <input
                          type="email"
                          onChange={(e) => setOfficialEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-cont-2-it2">
                        <label>Nationality</label>
                        <input
                          type="text"
                          onChange={(e) => setNationality(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-cont-2-r1">
                      <div className="form-cont-3-it">
                        <label>Language</label>
                        <input
                          type={"text"}
                          onChange={(e) => setLanguage(e.target.value)}
                        />
                      </div>
                      <div className="form-cont-3-it">
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          pattern="[0-9]{10}"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-cont-2-r1">
                      <div className="form-cont-4-it">
                        <label>Department</label>
                        <input
                          type="text"
                          onChange={(e) => setDepartment(e.target.value)}
                        />
                      </div>
                      <div className="form-cont-4-it">
                        <label>Location</label>
                        <input
                          type="text"
                          onChange={(e) => setWorkLocation(e.target.value)}
                        />
                      </div>
                      <div className="form-cont-4-it">
                        <label>Password</label>
                        <input
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-cont-2-r1">
                      <div className="form-cont-5-it">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-cont-2-r1">
                      <div className="form-cont-6-it1"></div>
                      <div className="form-cont-6-it">
                        <button type="submit">Save Information</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default HOC(Staff);
