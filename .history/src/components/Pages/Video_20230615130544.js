import React, { useEffect, useState } from "react";
import HOC from "../HOC";
import axios from "axios";
import { Modal, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const Video = () => {
    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);
  
    const getBlogs = async () => {
      try {
        const { data } = await axios.get(
          "https://nishant-jain12.vercel.app/api/v1/vedio"
        );
        setData(data.vedioss);
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
            "https://nishant-jain12.vercel.app/api/v1/images",
            {
              image,
              desc,
            }
          );
          console.log(data);
          toast.success("Created");
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
  
    const deleteHandler = async (id) => {
      try {
        const { data } = await axios.delete(
          `https://nishant-jain12.vercel.app/api/v1/images/${id}`
        );
        console.log(data);
        toast.success("Deleted");
        getBlogs();
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
          <h4>Banners</h4>
          <button onClick={() => setModalShow(true)}>Upload</button>
        </div>
  
        <div className="Three-Cont2">
          {data?.map((i, index) => (
            <div key={index}>
              <img src={i.image} alt="" />
              <p style={{ margin: "0", textAlign: "center" }}> {i.desc} </p>
              <Button
                variant="outline-danger"
                style={{ width: "100%" }}
                onClick={() => deleteHandler(i._id)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </>
    );
  };

export default HOC(Video)