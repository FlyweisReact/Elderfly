/** @format */

import React, { useEffect, useState } from "react";
import img4 from "../Images/c-10.png";
import img5 from "../Images/c-11.png";
import img6 from "../Images/c-12.png";
import img7 from "../Images/c-13.png";
import { useNavigate } from "react-router-dom";
import HOC from "./HOC";
import axios from "axios";

const DashBoard = () => {
  const navigate = useNavigate();
  const [ blogCount , setBlogCount ] = useState("")
  const [ staffCount , setStaffCount ] = useState("")
  
  const getBlogs = async () => {
    try {
      const { data } = await axios.get("https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/blog");
      setBlogCount(data.length)
    } catch (e) {
      console.log(e);
    }
  };

  
  const getStaff = async () => {
    try {
      const { data } = await axios.get("https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/subcriptions");
      setStaffCount(data.length)
    } catch (e) {
      console.log(e);
    }
  };



  useEffect(() => {
    getBlogs()
    getStaff()
  },[])

  const DashBoard = [
    {
      name : "Total  Blogs" ,
      count : {blogCount} , 
      link : "/add"
    }
  ]


  return (
    <>
      <div className="dash-cont">
        <div className="dash-right">
          <div className="dash-right-mid">
          {
            DashBoard.map((i , index) => (
              <div className="mid-box" onClick={() => navigate(i.link)} >
              <div className="box-left">
                <h4> {i.name} </h4>
                <div className="box-div">{i.count}</div>
                <img src={img5} alt="" />
              </div>
              <div className="box-right">
                <img src={img4} alt="" />
              </div>
            </div>
            ))
          }
   
          </div>
          <div className="dash-below-right">
            <div className="below-left">
              <div className="below-box">
                <img src={img6} alt="" />
              </div>
            </div>
            <div className="below-right">
              <div className="below-box2">
                <div className="inter-box">
                  <div className="head-cont">
                    <div className="head-l">
                      <h4>
                        Total Employees <spam>375</spam>
                      </h4>
                    </div>
                    <div className="head-r">
                      <h4>Male</h4>
                      <h4>Female</h4>
                    </div>
                  </div>
                  <div className="inter-box2">
                    <div className="boxi">
                      <img src={img7} alt="" />
                      <p>Kavya </p>
                    </div>
                    <div className="boxi">
                      <img src={img7} alt="" />
                      <p>Kavya </p>
                    </div>
                    <div className="boxi">
                      <img src={img7} alt="" />
                      <p>Kavya </p>
                    </div>
                    <div className="boxi">
                      <img src={img7} alt="" />
                      <p>Kavya </p>
                    </div>
                    <div className="boxi">
                      <img src={img7} alt="" />
                      <p>Kavya </p>
                    </div>
                    <div className="boxi">
                      <img src={img7} alt="" />
                      <p>Kavya </p>
                    </div>
                    <div className="boxi">
                      <img src={img7} alt="" />
                      <p>Kavya </p>
                    </div>
                    <div className="boxi">
                      <img src={img7} alt="" />
                      <p>Kavya </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(DashBoard);
