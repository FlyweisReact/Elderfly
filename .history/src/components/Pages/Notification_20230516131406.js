/** @format */

import React, { useState, useEffect } from "react";
import HOC from "../HOC";
import { Alert, Table } from "react-bootstrap";
import axios from "axios";
import { Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

const Notification = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/noti"
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
    const [terms, setTerms] = useState("");
    const [ image , setImage ] = useState("")

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
            "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/noti",
          {
            message : terms, image
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
            Add Notification{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => uploadImage(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
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
        `https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/noti/${id}`
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

      <div className="Head">
        <div>
          <h4>Notification (Total : {data?.length}) </h4>
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
                <td>Image</td>
                <td>Message</td>
                <td>Created At</td>
                <td>Options</td>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> #{index + 1} </td>
                  <td>
                    <img src={i.image} alt='' style={{width : '100px'}} />
                  </td>
                  <td>{i.message}</td>
                  <td>{i.createdAt?.slice(0, 10)}</td>
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

export default HOC(Notification);
