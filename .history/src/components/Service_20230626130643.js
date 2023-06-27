/** @format */

import React, { useState, useEffect } from "react";
import HOC from "./HOC";
import { Alert, Spinner, Table } from "react-bootstrap";
import axios from "axios";
import { Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import Navbar from "./navbar";

const Service = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [edit, setEdit] = useState(false);
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
        i?.service?.toLowerCase().includes(query?.toLowerCase())
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

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://nishant-jain12.vercel.app/api/v1/servic"
      );
      setData(data.msg);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [image, setImage] = useState("");
    const [subServices, setSubService] = useState([]);
    const [service, setService] = useState("");
    const [subData, setSubData] = useState([]);
    const [spinActivate, setSpinActivate] = useState(false);
    const [imageStatus, setImageStatus] = useState(false);

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
      if (props.show === true) {
        getSubService();
      }
    }, [props.show]);

    const uploadImage = (e) => {
      setSpinActivate(true);
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dbcnha741");
      fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImage(data.url);
          setSpinActivate(false);
          setImageStatus(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://nishant-jain12.vercel.app/api/v1/servic",
          {
            image,
            subservices: subServices,
            service,
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

    const putHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.put(
          `https://nishant-jain12.vercel.app/api/v1/servic/${id}`,
          {
            image,
            service,
            subservices: subServices,
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

    const HandlerSelctor = (curr) => {
      setSubService((prev) => )
    }

    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {edit ? " Edit  " : "Add"} Service
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={edit ? putHandler : postHandler}>
            {spinActivate ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              ""
            )}

            {imageStatus ? (
              <Alert variant="success">Image Uploaded </Alert>
            ) : (
              ""
            )}
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={(e) => uploadImage(e)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Service Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setService(e.target.value)}
              />
            </Form.Group>

            <Form.Select
              aria-label="Default select example"
              className="mb-3"
              onChange={(e) => setSubService(e.target.value)}
              multiple
            >
              <option>-- Select Sub-Service --</option>
              {subData?.map((i, index) => (
                <option key={index} value={i._id}>
                  {" "}
                  {i.subServices}{" "}
                </option>
              ))}
            </Form.Select>

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
        `https://nishant-jain12.vercel.app/api/v1/servic/${id}`
      );
      console.log(data.message);
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

      <Navbar setQuery={setQuery} />

      <div className="Head">
        <div>
          <h4>Service (Total : {data?.length}) </h4>
        </div>
        <div>
          <button  onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}> + Create New</button>
        </div>
      </div>

      <div className="overflowCont">
        <Table className="NewTable">
          <thead>
            <tr>
              <td>Number</td>
              <td>Image</td>
              <td> Service </td>
              <td> Sub-Service </td>
              <td>Options</td>
            </tr>
          </thead>
          <tbody>
            {slicedData?.map((i, index) => (
              <tr key={index}>
                <td> #{index + 1} </td>
                <td>
                  <img src={i.image} alt="" style={{ width: "60px" }} />
                </td>
                <td>{i.service}</td>
                <td>
                  {i.subservices?.map((item, index) => (
                    <ul key={index}>
                      <li> {item.subServices} </li>
                    </ul>
                  ))}
                </td>
                <td>
                <span style={{ display: "flex", gap: "5px" }}>
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => deleteHandler(i._id)}
                    ></i>
                    <i
                      className="fa-solid fa-pen-to-square"
                      onClick={() => {
                        setId(i._id);
                        setEdit(true);
                        setModalShow(true);
                      }}
                    />
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

export default HOC(Service);
