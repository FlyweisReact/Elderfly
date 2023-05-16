import React, { useState, useEffect } from "react";
import HOC from "../HOC";
import { Alert, Table } from "react-bootstrap";
import axios from "axios";
import { Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";


const Customer = () => {
    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);
  
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
            "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/auth"
        );
        setData(data.users);
      } catch (e) {
        console.log(e);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    function MyVerticallyCenteredModal(props) {
        const [ username , setUserName ] = useState("")
        const [  email , setEmail] = useState("")
        const [ image , setImage ] = useState("")
        const [ password , setPassword ] = useState("")
        const [ role , setRole ] = useState("")
  
      const postHandler = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post(
            "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/auth",
            {
                username , email , image , password , role
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
              Add User{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={postHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type='text' />
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
          `https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/terms/${id}`
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
            <h4>Customer  (Total : {data?.length}) </h4>
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
                  <th>Number</th>
                  <th>Image</th>
                  <th>User Name</th>
                  <th>Email Address</th>
                  <th> Role </th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((i, index) => (
                  <tr key={index}>
                    <td> #{index + 1} </td>
                    <td> 
                    
                    <img src={i.image} alt='' style={{width : '100px'}} />
                     </td>
                    <td>{i.username}</td>
                    <td>{i.email}</td>
                    <td>{i.role}</td>
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
  

export default HOC(Customer)