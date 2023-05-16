import React, { useState, useEffect } from "react";
import HOC from "./HOC";
import { Table } from "react-bootstrap";
import axios from "axios";
import  { Modal , Form } from 'react-bootstrap'
import  { toast} from 'react-toastify'

const Emergency = () => {
    const [data, setData] = useState([]);

    const FetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/emergency"
        );
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };
  
    useEffect(() => {
      FetchData();
    }, []);

    function MyVerticallyCenteredModal(props) {
      const [ staffId , setStaffId ] = useState("")
      const [ date , setDate ] = useState("")
      const [ time , setTime ] = useState("")
      const [ subservices , setSubServices ] = useState("")
      const [ status , setStatus ] = useState("")
      const [ staffdata , setStaffData ] = useState([])
      const [ subdata , setSubData ] = useState([])

      const getStaff = async () => {
        try { 
          const { data } = await axios.get("https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/staff")
          setStaffData(data.staff)
        }catch(e) { 
          console.log(e)
        }
      }

      
      const getSubService = async () => {
        try { 
          const { data } = await axios.get("https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/subservi")
          setSubData(data)
        }catch(e) { 
          console.log(e)
        }
      }




      const postHandler = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post(
            "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/terms",
            {
       
            }
          );
          console.log(data);
          FetchData();
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
              Add Emergency Service{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={postHandler}>
          
  
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
        <div className="Head">
          <div>
            <h4>Emergency Service</h4>
          </div>
          <button> + Create New </button>
        </div>
  
        <div className="overflowCont">
          <Table style={{ width: "90%", margin: "auto" , marginTop : '20px' }}>
            <thead>
              <tr>
                <td>Number</td>
                <td>Staff Name</td>
                <td> Date </td>
                <td> Time </td>
                <td> Sub Service </td>
                <td> Status </td>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {i.staffId?.name} </td>
                  <td> {i.date} </td>
                  <td> {i.time} </td>
                  <td> {i.subservices?.subServices} </td>
                  <td> {i.status} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  };

export default HOC(Emergency)