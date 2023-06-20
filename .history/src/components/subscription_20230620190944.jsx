/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Form, FloatingLabel, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "./HOC";
import Navbar from "./navbar";

const Subs = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");

   // Pagination and Filter
   const [query, setQuery] = useState("");
   const [currentPage2, setCurrentPage2] = useState(1);
   const [postPerPage2] = useState(10);
   const lastPostIndex2 = currentPage2 * postPerPage2;
   const firstPostIndex2 = lastPostIndex2 - postPerPage2;
 
   let pages2 = [];
 
   const TotolData = query
     ? data?.filter((i) =>
         i?.name?.toLowerCase().includes(query?.toLowerCase())
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
        "https://nishant-jain12.vercel.app/api/v1/subcriptions"
      );
      setData(data.msg);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  function MyVerticallyCenteredModal(props) {
    const [planName, setPlanName] = useState("");
    const [amountPerMonth, setAmountPerMonth] = useState("");
    const [data, setData] = useState("");
    
    const endDate = ""
    const startDate = ""
    

    const AddSubscription = async (e) => {
      e.preventDefault();
      try {
        const { HandlerData } = await axios.post(
          "https://nishant-jain12.vercel.app/api/v1/subcriptions",
          {
            planName,
            amountPerMonth,
            data,
            endDate,
            startDate,
          }
        );
        console.log(HandlerData);
        toast.success("New Subscription Added Successfully");
        props.onHide();
        fetchData();
      } catch (e) {
        console.log(e);
      }
    };

    const EditSubscription = async (e) => {
      e.preventDefault();
      try {
        const { HandlerData } = await axios.put(
          `https://nishant-jain12.vercel.app/api/v1/subcriptions/${id}`,
          {
            planName,
            amountPerMonth,
            data,
            endDate,
            startDate,
          }
        );
        console.log(HandlerData);
        toast.success("Subscription Edited Successfully");
        props.onHide();
        fetchData();
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
            {edit ? "Edit" : "Add"} Subscription
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={edit ? EditSubscription : AddSubscription}>
            <Form.Group className="mb-3">
              <Form.Label>Plan Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setPlanName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount Per Month</Form.Label>
              <Form.Control
                type="number"
                min={0}
                onChange={(e) => setAmountPerMonth(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  onChange={(e) => setData(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Button className="submitBtn" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  const deleteSubscription = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://nishant-jain12.vercel.app/api/v1/subcriptions/${id}`
      );
      console.log(data);
      toast.success("Subscription  Deleted Successfully");
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
      <Navbar setQuery={setQuery}
      <div className="Head">
        <div>
          <h4>Subscription ( Total : {data?.length}) </h4>
        </div>
        <div>
          <button
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
          >
            + Create New
          </button>
        </div>
      </div>

      <div className="Three-Cont">
        {slicedData?.map((i, index) => (
          <div className="subes-box" key={index}>
            <div className="sub-box-item">
              <div className="sub-box-item-top">
                <h4> {i.planName} </h4>
              </div>
              <div className="sub-box-item-mid">
                <p className="head">Rs. {i.amountPerMonth}</p>
                <p className="subhead">Per Month</p>
                <p className="subhead">{i.data}</p>
              </div>
              <div className="sub-box-item-below">
                <button
                  onClick={() => {
                    setId(i._id);
                    setEdit(true);
                    setModalShow(true);
                  }}
                >
                  Edit{" "}
                </button>
                <button onClick={() => deleteSubscription(i._id)}>
                  Remove{" "}
                </button>
              </div>
            </div>
          </div>
        ))}

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
      </div>
    </>
  );
};

export default HOC(Subs);
