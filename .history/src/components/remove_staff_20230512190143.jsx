/** @format */

import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import img from "../Images/c-16.png";
import axios from "axios";

const RemoveStaff = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try{
        const { data } = await axios.get("https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/staff")
        setData(data.staff)
    }catch(e) { 
        console.log(e)
    }
  };

  useEffect(() => {
    fetchData()
  },[])


  const deleteHandler = async (id) => {
    try {

    }catch(e) { 
        console.log(E)
    }
  }
  return (
    <>
      <div className="dash-cont">
        <div className="dash-left">
          <Sidebar />
        </div>
        <div className="dash-right">
          <Navbar />
          <div className="remove-staff-top">
            <h4>Remove Staff</h4>
          </div>

          <div className="staff-mid-cont">
          {data?.map((i , index) => (
            <div className="remove-staff-box" key={index}>
              <img src={img} alt="" />
              <h4> {i.name} </h4>
          
              <button>Remove</button>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RemoveStaff;
