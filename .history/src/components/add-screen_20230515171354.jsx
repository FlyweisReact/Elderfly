/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import HOC from "./HOC";
import { Modal, Form, Button } from "react-bootstrap";

const AddScreen = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

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
    const [image, setImage] = useState("");
    const [desc, setDesc] = useState("");

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

    const postBlog = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/blog",
          {
            image,
            desc,
          }
        );
        console.log(data);
        alert("Created");
        getBlogs();
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
          <Modal.Title id="contained-modal-title-vcenter">Add Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postBlog}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={(e) => uploadImage(e)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const deleteHandler  = async (id) => {
    try{
      const { data } = await axios.delete(`https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/blog/${id}`)
      console.log(data)
      getBlogs()
      Toast.success("Deleted")
    }catch(e) { 
      console.log(e)
    }
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="Head">
        <h4>Blogs</h4>
        <button onClick={() => setModalShow(true)}>Upload</button>
      </div>

      <div className="Three-Cont2">
        {data?.map((i, index) => (
          <div key={index}>
            <img src={i.image} alt="" />
            <p style={{margin : '0' , textAlign : 'center'}}> {i.desc} </p>
            <Button variant="outline-danger" style={{width : '100%'}}>Delete</Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HOC(AddScreen);
