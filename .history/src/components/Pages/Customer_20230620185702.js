/** @format */

import React, { useState, useEffect } from "react";
import HOC from "../HOC";
import { Alert, Badge, Table } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Customer = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://nishant-jain12.vercel.app/api/v1/usercreate/getAllUser"
      );
      setData(data.user.reverse());
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://nishant-jain12.vercel.app/api/v1/usercreate/deleteUserById/${id}`
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
  
      {/* <Navbar /> */}

      <div className="Head">
        <div>
          <h4>Users (Total : {data?.length}) </h4>
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
                    <img src={i.profileImage} alt='' style={{width : '100px'}} />
                  </td>
                  <td>{i.name}</td>
                  <td>{i.phone}</td>
                  <td>{i.address}</td>
                  <td>{i.language}</td>
                  <td>{i.location}</td>
                  <td>{i.email}</td>
                  <td>{i.age}</td>
                  <td>{i.bloodGroup}</td>
                  <td>{i.dateOfBirth}</td>
                  <td>{i.emergencyContactNumber}</td>
                  <td>{i.gender}</td>
                  <td>{i.emergencyContactNumber}</td>
                 
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

export default HOC(Customer);
