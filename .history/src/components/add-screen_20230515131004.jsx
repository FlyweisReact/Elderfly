/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import HOC from "./HOC";
import { Modal } from "bootstrap";
import { Form } from "react-router-dom";

const AddScreen = () => {
  const [data, setData] = useState([]);

  const getBlogs = async () => {
    try {
      const { data } = await axios.get(
        "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/blog"
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

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
          Add Blog
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label></Form.Label>
              </Form.Group>
            </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <div className="Head">
        <h4>Blogs</h4>
        <button>Upload</button>
      </div>

      <div className="Three-Cont2">
        {data?.map((i, index) => (
          <div key={index}>
            <img src={i.image} alt="" />
            <p> {i.desc} </p>
          </div>
        ))}
      </div>

 
    </>
  );
};

export default HOC(AddScreen);
