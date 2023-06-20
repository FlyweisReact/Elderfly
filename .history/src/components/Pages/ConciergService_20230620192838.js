/** @format */

import React, { useState, useEffect } from "react";
import HOC from "../HOC";
import { Alert, Table } from "react-bootstrap";
import axios from "axios";
import { Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../navbar";

const ConciergService = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

   // Pagination and Filter
   const [query, setQuery] = useState("");
   const [currentPage2, setCurrentPage2] = useState(1);
   const [postPerPage2] = useState(10);
   const lastPostIndex2 = currentPage2 * postPerPage2;
   const firstPostIndex2 = lastPostIndex2 - postPerPage2;
 
   let pages2 = [];
 
   const TotolData = query
     ? data?.filter((i) =>
     data?.services?.filter((i) =>
     i?.service?.toLowerCase().includes(query?.toLowerCase())
   ))
      
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
        "https://nishant-jain12.vercel.app/api/v1/conciergeser"
      );
      setData(data.msg);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [services, setServices] = useState([]);
    const [name, setName] = useState("");

    const fetchServices = async () => {
      try {
        const { data } = await axios.get(
          "https://nishant-jain12.vercel.app/api/v1/servic"
        );
        setServices(data.msg);
      } catch (e) {
        console.log(e);
      }
    };

    useEffect(() => {
      if (props.show) {
        fetchServices();
      }
    }, [props.show]);

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://nishant-jain12.vercel.app/api/v1/conciergeser",
          {
            services: name,
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
            <Form.Select
              aria-label="Default select example"
              className="mb-3"
              onChange={(e) => setName(e.target.value)}
            >
              <option>Select Services</option>
              {services?.map((i, index) => (
                <option key={index} value={i._id}>
                  {" "}
                  {i.service}{" "}
                </option>
              ))}
            </Form.Select>

            <button type="submit" className="SubmitBtn">
              Submit
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://nishant-jain12.vercel.app/api/v1/conciergeser/${id}`
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

      <Navbar setQuery={setQuery} />

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
              {slicedData?.map((i, index) => (
                <tr key={index}>
                  <td> #{index + 1} </td>
                  <td>
                    <Slider {...settings} className="Slide">
                      {i.services?.map((item, index) => (
                        <img
                          src={item.image}
                          alt=""
                          key={index}
                          style={{ width: "150px" }}
                        />
                      ))}
                    </Slider>
                  </td>

                  <td>
                    {i.services?.map((item, index) => (
                      <ul key={index}>
                        <li> {item.service} </li>
                      </ul>
                    ))}
                  </td>
                  <td>
                  {i.services?.map((item, index) => (
                      <ul key={index}>
                        <li> {item.colour} </li>
                      </ul>
                    ))}
                  </td>
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
    </>
  );
};

export default HOC(ConciergService);
