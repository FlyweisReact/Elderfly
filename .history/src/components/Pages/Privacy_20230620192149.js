/** @format */

import React, { useState, useEffect } from "react";
import HOC from "../HOC";
import { Alert, Table } from "react-bootstrap";
import axios from "axios";
import { Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

const Privacy = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://nishant-jain12.vercel.app/api/v1/priv"
      );
      setData(data.terms);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [terms, setTerms] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://nishant-jain12.vercel.app/api/v1/priv",
          {
            privacy: terms,
          }
        );
        console.log(data);
        fetchData();
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
            Add Privacy Policy{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Privacy Policy</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTerms(e.target.value)}
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
        `https://nishant-jain12.vercel.app/api/v1/priv/${id}`
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

<Navbar  setQuery={setQuery} />

      <div className="Head">
        <div>
          <h4>Privacy Policy (Total : {data?.length}) </h4>
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
                <td>Number</td>
                <td>Privacy Policy</td>
                <td>Options</td>
              </tr>
            </thead>
            <tbody>
              {slicedData?.map((i, index) => (
                <tr key={index}>
                  <td> #{index + 1} </td>
                  <td>{i.privacy}</td>
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

export default HOC(Privacy);
