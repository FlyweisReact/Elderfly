/** @format */

import React, { useState, useEffect } from "react";
import HOC from "./HOC";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import Navbar from "./navbar";

const SubService = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [ edit , setEdit ] = useState(false)

  // Pagination and Filter
  const [query, setQuery] = useState("");
  const [currentPage2, setCurrentPage2] = useState(1);
  const [postPerPage2] = useState(10);
  const lastPostIndex2 = currentPage2 * postPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postPerPage2;

  let pages2 = [];

  const TotolData = query
    ? data?.filter((i) =>
        i?.subServices?.toLowerCase().includes(query?.toLowerCase())
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
        "https://nishant-jain12.vercel.app/api/v1/subservi"
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [image, setImage] = useState("");
    const [subServices, setSubService] = useState("");
    const [colour, setColor] = useState("");

    const uploadImage = (e) => {
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
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://nishant-jain12.vercel.app/api/v1/subservi",
          {
            image,
            subServices,
            colour,
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
        const { data } = await axios.post(
          ``,
          {
            image,
            subServices,
            colour,
          }
        );
        console.log(data);
        fetchData();
        props.onHide();
        toast.success("Added");
      } catch (e) {
        console.log(e);
      }
    }



    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Sub-Service
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={(e) => uploadImage(e)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setSubService(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setColor(e.target.value)}
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
      const { data } =
        await axios.delete(`https://nishant-jain12.vercel.app/api/v1/subservi/${id}
        `);
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

      <Navbar setQuery={setQuery} />
      <div className="Head">
        <div>
          <h4>Sub-Service (Total : {data?.length}) </h4>
        </div>
        <div>
          <button onClick={() => setModalShow(true)}> + Create New</button>
        </div>
      </div>

      <div className="overflowCont">
        <Table className="NewTable">
          <thead>
            <tr>
              <td>Number</td>
              <td>Image</td>
              <td> Sub-Service </td>
              <td>Color</td>
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
                <td>{i.subServices}</td>
                <td>{i.colour}</td>
                <td>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => deleteHandler(i._id)}
                  ></i>
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

export default HOC(SubService);
