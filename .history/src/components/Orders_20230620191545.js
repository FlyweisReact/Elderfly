/** @format */

import React, { useState, useEffect } from "react";
import HOC from "./HOC";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import Navbar from "./navbar";

const Orders = () => {
  const [data, setOrder] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState("");

    // Pagination and Filter
    const [query, setQuery] = useState("");
    const [currentPage2, setCurrentPage2] = useState(1);
    const [postPerPage2] = useState(10);
    const lastPostIndex2 = currentPage2 * postPerPage2;
    const firstPostIndex2 = lastPostIndex2 - postPerPage2;
  
    let pages2 = [];
  
    const TotolData = query
      ? data?.filter((i) =>
          i?.userId?.name?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.userId?.name?.toLowerCase().includes(query?.toLowerCase())
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

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        "https://nishant-jain12.vercel.app/api/v1/orderr"
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
    const [status, setStatus] = useState("");

    const putHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.put(
          `https://nishant-jain12.vercel.app/api/v1/orderr/${id}`,
          {
            status,
          }
        );
        console.log(data.success);
        toast.success("Edited ");
        getOrders();
        props.onHide();
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
            Edit Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={putHandler}>
            <Form.Select
              aria-label="Default select example"
              className="mb-3"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>-- Select Status --</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </Form.Select>

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
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

<Navbar  setQuery={setQuery} />

      <div className="Head">
        <div>
          <h4>Callbacks</h4>
        </div>
      </div>

      <div className="overflowCont">
        <Table className="NewTable" striped bordered hover>
          <thead>
            <tr>
              <td>Number</td>
              <td>Service Id</td>
              <td> User Id </td>
              <td> Call </td>
              <td> Date </td>
              <td> Time </td>
              <td>Created Date </td>
              <td> Status </td>
              <td>Options</td>
            </tr>
          </thead>
          <tbody>
            {slicedData?.map((i, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {i.subservicesId?.subServices} </td>
                <td> {i.userId?.name} </td>
                <td> {i.Call} </td>
                <td> {i.date} </td>
                <td> {i.time} </td>
                <td> {i.createdAt?.slice(0, 10)} </td>
                <td> {i.status === true ? "True" : "False"} </td>
                <td>
                  <span>
                    <i
                      className="fa-regular fa-pen-to-square"
                      onClick={() => {
                        setId(i._id);
                        setModalShow(true);
                      }}
                    ></i>
                  </span>
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

export default HOC(Orders);
