/** @format */

import React, { useState, useEffect } from "react";
import HOC from "./HOC";
import { Table } from "react-bootstrap";
import axios from "axios";

const Orders = () => {
  const [order, setOrder] = useState([]);

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/orderr"
      );
      setOrder(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <div className="Head">
        <div>
          <h4>Orders</h4>
        </div>
      </div>

      <div className="overflowCont">
        <Table style={{ width: "90%"  , margin : 'auto'}}>
          <thead>
            <tr>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {order?.map((i, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {index + 1} </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Orders);
