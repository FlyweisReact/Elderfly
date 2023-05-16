import React, { useState, useEffect } from "react";
import HOC from "./HOC";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

const SubService = () => {
    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [id, setId] = useState("");
  
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/subservi"
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
      const [status, setStatus] = useState("");
  
      const putHandler = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.put(
            `https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/orderr/${id}`,
            {
              status,
            }
          );
          console.log(data.success);
          toast.success("Edited ");
          fetchData();
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
             
  
              <Form.Select aria-label="Default select example" className="mb-3" 
                  onChange={(e) => setStatus(e.target.value)}>
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
  
        <div className="Head">
          <div>
            <h4>Sub-Service</h4>
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
                <td>Staff Id </td>
                <td> Status </td>
                <td>Options</td>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {i.subservicesId} </td>
                  <td> {i.userId} </td>
                  <td> {i.Call} </td>
                  <td> {i.date} </td>
                  <td> {i.time} </td>
                  <td> {i.createdAt?.slice(0, 10)} </td>
                  <td> {i.staffId} </td>
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
      </>
    );
  };

export default HOC(SubService)