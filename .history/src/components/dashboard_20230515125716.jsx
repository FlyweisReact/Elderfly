import React from "react";
import img4 from "../Images/c-10.png";
import img5 from "../Images/c-11.png";
import img6 from "../Images/c-12.png";
import img7 from "../Images/c-13.png";
import {useNavigate} from "react-router-dom";
import HOC from "./HOC";
  import axios from 'axios'

const DashBoard = () => {
  const navigate = useNavigate();

  const getBlogs = async () => {
    try {
      const { data } =await axios.get()
    }catch(e) { 
      console.log(e)
    }
  }

  return (
    <>
      <div className="dash-cont">
        <div className="dash-right">
          <div className="dash-right-mid">
            <div className="mid-box" onClick={()=>navigate("/add")}>
              <div className="box-left">
                <h4>Total Blogs</h4>
                <div className="box-div">150</div>
                <img src={img5} alt="" />
              </div>
              <div className="box-right">
                <img src={img4} alt="" />
              </div>
            </div>
            <div className="mid-box" onClick={()=>navigate("/add")}>
              <div className="box-left">
                <h4>Total Blogs</h4>
                <div className="box-div">150</div>
                <img src={img5} alt="" />
              </div>
              <div className="box-right">
                <img src={img4} alt="" />
              </div>
            </div>
            <div className="mid-box" onClick={()=>navigate("/add")}>
              <div className="box-left">
                <h4>Total Blogs</h4>
                <div className="box-div">150</div>
                <img src={img5} alt="" />
              </div>
              <div className="box-right">
                <img src={img4} alt="" />
              </div>
            </div>
            <div className="mid-box" onClick={()=>navigate("/add")}>
              <div className="box-left">
                <h4>Total Blogs</h4>
                <div className="box-div">150</div>
                <img src={img5} alt="" />
              </div>
              <div className="box-right">
                <img src={img4} alt="" />
              </div>
            </div>
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
