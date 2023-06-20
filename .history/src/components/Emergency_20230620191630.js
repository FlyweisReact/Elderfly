/** @format */

import React, { useState, useEffect } from "react";
import HOC from "./HOC";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Navbar from "./navbar";

const Emergency = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
    // Pagination and Filter
    const [query, setQuery] = useState("");
    const [currentPage2, setCurrentPage2] = useState(1);
    const [postPerPage2] = useState(10);
    const lastPostIndex2 = currentPage2 * postPerPage2;
    const firstPostIndex2 = lastPostIndex2 - postPerPage2;
  
    let pages2 = [];
  
    const TotolData = query
      ? data?.filter((i) =>
          i?.name?.toLowerCase().includes(query?.toLowerCase())
        )
      : data;
  
    useEffect(() => {
      if (query) {
        setCurrentPage2(1);
      }
    }, [query]);
  
    const slicedData = TotolData?.slice(firstPostIndex2, lastPostIndex2);
  
    for (let i = 1; i <= Math.ceil(TotolData?.length / postPerPage2); i++) {
      pages2.push(i);
    }
  
    function Next() {
      setCurrentPage2(currentPage2 + 1);
    }
  
    function Prev() {
      if (currentPage2 !== 1) {
        setCurrentPage2(currentPage2 - 1);
      }
    }
  

  const FetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://nishant-jain12.vercel.app/api/v1/emergency"
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
          "https://nishant-jain12.vercel.app/api/v1/staff"
        );
        setStaffData(data.staff);
      } catch (e) {
        console.log(e);
      }
    };

    const getSubService = async () => {
      try {
        const { data } = await axios.get(
          "https://nishant-jain12.vercel.app/api/v1/subservi"
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
          "https://nishant-jain12.vercel.app/api/v1/emergency",
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
    try {
      const { data } = await axios.delete(
        `https://nishant-jain12.vercel.app/api/v1/emergency/${id}`
      );
      console.log(data);
      FetchData();
      toast.success("Deleted");
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

<Navbar  setQuery={setQuery} />
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
              <td>Options</td>
            </tr>
          </thead>
          <tbody>
            {slicedData?.map((i, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {i.staffId?.name} </td>
                <td> {i.date} </td>
                <td> {i.time} </td>
                <td> {i.subservices?.subServices} </td>
                <td> {i.status} </td>
                <td>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => deleteHandler(i._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="pagination">
            <button onClick={() => Prev()} className="prevBtn">
              <i className="fa-solid fa-backward"></i>
            </button>
            {currentPage2 === 1 ? (
              ""
            ) : (
              <button onClick={() => setCurrentPage2(1)}>1</button>
            )}

            {pages2?.slice(currentPage2 - 1, currentPage2 + 3).map((i, index) =>
              i === pages2?.length ? (
                ""
              ) : (
                <button
                  key={index}
                  onClick={() => setCurrentPage2(i)}
                  className={currentPage2 === i ? "activePage" : ""}
                >
                  {" "}
                  {i}{" "}
                </button>
              )
            )}

            <button
              onClick={() => setCurrentPage2(pages2?.length)}
              className={currentPage2 === pages2?.length ? "activePage" : ""}
            >
              {" "}
              {pages2?.length}{" "}
            </button>

            {currentPage2 === pages2?.length ? (
              ""
            ) : (
              <button onClick={() => Next()} className="nextBtn">
                {" "}
                <i className="fa-sharp fa-solid fa-forward"></i>
              </button>
            )}
          </div>
    </>
  );
};

export default HOC(Emergency);