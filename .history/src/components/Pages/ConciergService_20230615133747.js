/** @format */

import React, { useState, useEffect } from "react";
import HOC from "../HOC";
import { Alert, Table } from "react-bootstrap";
import axios from "axios";
import { Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

const ConciergService = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://nishant-jain12.vercel.app/api/v1/conciergeser"
      );
      setData(data.msg[0].services);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [terms, setTerms] = useState("");
    const [ services , setServices ] = useState([])

    const fetchServices = async () => {
      try { 
        const { data }  = await axios.get("https://nishant-jain12.vercel.app/api/v1/servic")
        setServices(data.msg)
      }catch(e) { 
        console.log(e)
      }
    }


    useEffect(() => {
      if(props.show){
        fetchServices()
      }

    },[props.show])

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://nishant-jain12.vercel.app/api/v1/conciergeServicess",
          {
            services: terms,
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
            Add Concierg Service{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Services</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTerms(e.target.value)}
              />
            </Form.Group>

            <Form.Select aria-label="Default select example" className="mb-3">
      <option>Select Services</option>
      {services?Alert}
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
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
        `https://nishant-jain12.vercel.app/api/v1/conciergeServicess/${id}`
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
          <h4>Concierge Service (Total : {data?.length}) </h4>
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
                <td>Service</td>
                <td>Color</td>
                <td>Options</td>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> #{index + 1} </td>
                  <td>
                    <img src={i.image} alt="" style={{ width: "100px" }} />
                  </td>
                  <td>{i.service}</td>
                  <td>{i.colour}</td>
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

export default HOC(ConciergService);
