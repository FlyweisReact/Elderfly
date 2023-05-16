import React, {useState} from "react";
import Sidebar from "./sidebar";
import img from "../Images/c-7.png";
import img2 from "../Images/c-8.png";
import img3 from "../Images/c-9.png";
import img4 from "../Images/c-10.png";
import img5 from "../Images/c-11.png";
import img6 from "../Images/c-12.png";
import img7 from "../Images/c-13.png";
import Navbar from './navbar';
import {useNavigate} from "react-router-dom";

import img8 from "../Images/c-2.png";
import img9 from "../Images/c-3.png";
import img10 from "../Images/c-4.png";
import img11 from "../Images/c-5.png";
import img12 from "../Images/c-6.png";


const DashBoard = () => {
  const [show, setShow] = useState(false);
  const handleClick = ()=>{
    setShow(prev=>!prev);
  }
  const navigate = useNavigate();

  function MobileBar(){
    return (
      <>
      <div className="side-cont2">
          <button onClick={handleClick}>Close</button>
          <div className="side-cont-sub">
            <div className="lst-item">
              <div className="lst-item-1" onClick={()=>navigate("/dashboard")}>
                <img src={img9} alt="" />
                <p>Dash Board</p>
              </div>
            </div>
            <div className="lst-itemp">
              <div className="lst-item-1" onClick={()=>navigate("/subs")}>
                <img src={img10} alt="" />
                <p>Subscription</p>
              </div>
            </div>
            <div className="lst-itemp">
              <div className="lst-item-1" onClick={()=>navigate("/staff")}>
                <img src={img11} alt="" />
                <p>Staff</p>
              </div>
            </div>
            <div className="lst-itemp">
              <div className="lst-item-1" onClick={()=>navigate("/review")}>
                <img src={img12} alt="" />
                <p>Review</p>
              </div>
            </div>
          </div>
      </div>
      </>
    )
  }

  console.log(show);
  return (
    <>
      {
        show? <MobileBar /> : ""
      }
      <div className="dash-cont">
        <div className="dash-left">
          <Sidebar />
        </div>
        <i className="fa fa-bars barsIcon" onClick={handleClick}></i> 
        <div className="dash-right">
            <Navbar />
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

export default DashBoard;
