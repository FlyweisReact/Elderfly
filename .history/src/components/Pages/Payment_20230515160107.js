/** @format */

import React, { useState, useEffect } from "react";
import HOC from "../HOC";
import { Table } from "react-bootstrap";
import axios from "axios";

const Payment = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/paymnt/GetAllPayments"
      );
      setData(data.details);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>

      <div className="Head">
        <div>
          <h4>Transaction (Total : {data?.length}) </h4>
        </div>
      </div>

      <div className="overflowCont">
        <Table className="NewTable">
          <thead>
            <tr>
              <td>Number</td>
              <td>Subscription Id</td>
              <td> User Id </td>
              <td> Status </td>
              <td>Amount Paid</td>
              <td>Date</td>
              <td>Payment Method</td>
              <td>Order Status</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> #{index + 1} </td>
                <td> {i.subscriptionId}  </td> 
                <td> {i.userId}  </td> 
                <td> {i.status}  </td> 
                <td> {i.amount_paid}  </td> 
                <td> {i.date?.slice(0,10)}  </td> 
                <td> {i.paymentMethod} </td>
                <td> {i.orderStatus} </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};


export default HOC(Payment);
