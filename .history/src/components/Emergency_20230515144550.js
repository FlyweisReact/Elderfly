import React, { useState, useEffect } from "react";
import HOC from "./HOC";
import { Table } from "react-bootstrap";
import axios from "axios";

const Emergency = () => {
    const [data, setData] = useState([]);

    const FetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/emergency"
        );
        setData(data.data);
      } catch (e) {
        console.log(e);
      }
    };
  
    useEffect(() => {
      FetchData();
    }, []);
  
    return (
      <>
        <div className="Head">
          <div>
            <h4>Orders</h4>
          </div>
        </div>
  
        <div className="overflowCont">
          <Table style={{ width: "90%", margin: "auto" }}>
            <thead>
              <tr>
                <td>Number</td>
                <td>Service Id</td>
                <td> User Id </td>
                <td> Call </td>
                <td> Status </td>
                <td> Date </td>
                <td> Time </td>
                <td>Created Date </td>
                <td>Staff Id </td>
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
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  };

export default HOC(Emergency)