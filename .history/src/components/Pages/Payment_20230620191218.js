/** @format */

import React, { useState, useEffect } from "react";
import HOC from "../HOC";
import { Table } from "react-bootstrap";
import axios from "axios";
import Navbar from "../navbar";

const Payment = () => {
  const [data, setData] = useState([]);

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
        "https://nishant-jain12.vercel.app/api/v1/paymnt/GetAllPayments"
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
    <Navbar setQuery={setQuery} />
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
            {slicedData?.map((i, index) => (
              <tr key={index}>
                <td> #{index + 1} </td>
                <td> {i.subscriptionId} </td>
                <td> {i.userId} </td>
                <td> {i.status} </td>
                <td> {i.amount_paid} </td>
                <td> {i.date?.slice(0, 10)} </td>
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
