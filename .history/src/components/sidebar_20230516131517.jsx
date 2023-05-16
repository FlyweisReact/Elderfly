/** @format */

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img from "../Images/c-2.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sideBar = [
    
    {
      name: "Dashboard",
      link: "/dashboard",
      icon : <i className="fa-solid fa-qrcode"></i>
    },
    {
      name: "Users",
      link: "/customer",
      icon : <i className="fa-solid fa-user"></i>
    },{
      name: "Staff",
      link: "/staff",
      icon : <i className="fa-sharp fa-solid fa-users"></i>
    },
    {
      name: "Subscriptions",
      link: "/subs",
      icon : <i className="fa-solid fa-money-bill"></i>
    },
    {
      name: "Team Sentiments",
      link: "/sentiments",
      icon : <i className="fa-brands fa-teamspeak"></i>
    },
    {
      name: "Transaction",
      link: "/payment",
      icon : <i className="fa-solid fa-money-bill"></i>
    },
    {
      name: "Contact us",
      link: "/contact",
      icon : <i className="fa-solid fa-address-book"></i>
    },
    {
      name: "Order",
      link: "/order",
    },
    {
      name: "Emergency Service",
      link: "/emergency-service",
    },
    {
      name: "Sub-Service",
      link: "/sub-service",
    },
    {
      name: "Service",
      link: "/service",
    },
   
 
  
    {
      name: "Terms  and Condition",
      link: "/terms",
      icon : <i className="fa-brands fa-discord"></i>
    },
    {
      name: "Privacy Policy",
      link: "/privacy",
      icon : <i className="fa-solid fa-lock"></i>
    },
    {
      name: "Notification",
      link: "/notification",
      icon : /** @format */

      import React, { useState, useEffect } from "react";
      import HOC from "../HOC";
      import { Alert, Table } from "react-bootstrap";
      import axios from "axios";
      import { Form, Modal } from "react-bootstrap";
      import { toast } from "react-toastify";
      
      const Privacy = () => {
        const [data, setData] = useState([]);
        const [modalShow, setModalShow] = useState(false);
      
        const fetchData = async () => {
          try {
            const { data } = await axios.get(
              "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/priv"
            );
            setData(data.terms);
          } catch (e) {
            console.log(e);
          }
        };
      
        useEffect(() => {
          fetchData();
        }, []);
      
        function MyVerticallyCenteredModal(props) {
          const [terms, setTerms] = useState("");
      
          const postHandler = async (e) => {
            e.preventDefault();
            try {
              const { data } = await axios.post(
                  "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/priv",
                {
                  privacy : terms,
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
                  Add Privacy Policy{" "}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={postHandler}>
                  <Form.Group className="mb-3">
                    <Form.Label>Privacy Policy</Form.Label>
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
              `https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/priv/${id}`
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
                <h4>Privacy Policy (Total : {data?.length}) </h4>
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
                      <td>Privacy Policy</td>
                      <td>Options</td>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((i, index) => (
                      <tr key={index}>
                        <td> #{index + 1} </td>
                        <td>{i.privacy}</td>
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
      
      export default HOC(Privacy);
      
    },
    {
      name: "Banner",
      link: "/banner",
    },
    {
      name: "Concierg Services",
      link: "/concierg-service",
    },
    {
      name: "Blogs",
      link: "/add",
    },
  ];

  return (
    <>
      <div className="side-cont">
        <img src={img} alt="" />
        <div className="side-list">
          {sideBar.map((i, index) => (
            <div
              className={
                i.link === location.pathname
                  ? "lst-itemp activeSide"
                  : "lst-itemp"
              }
              onClick={() => navigate(i.link)}
              key={index}
            >
              <div className="lst-item-1">
                <p> {i.icon} {i.name}   </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
