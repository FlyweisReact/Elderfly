import React, {useState} from 'react';
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import {useNavigate} from "react-router-dom";

import img8 from "../Images/c-2.png";
import img9 from "../Images/c-3.png";
import img10 from "../Images/c-4.png";
import img11 from "../Images/c-5.png";
import img12 from "../Images/c-6.png";


import img from "../Images/c-14.png";

const Subs = ()=>{

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
    
    return (
        <>
             {
                show? <MobileBar className="mobilSideShow" /> : ""
            }
            <div className="dash-cont">
                <div className="dash-left">
                    <Sidebar />
                </div>
                <i className="fa fa-bars barsIcon" onClick={handleClick}></i> 
                <div className="dash-right">
                    <Navbar />
                    <div className="sub-top">
                        <div className="sub-top-l">
                            <h4>Plan & Pricing</h4>
                            <p>Simple Pricing, No hidden fees, Advance feature for your business</p>
                        </div>
                        <div className="sub-top-r">
                            <button>+ Create New</button>
                        </div>
                    </div>
                    <div className="sub-mod">
                        <img src={img} alt="" />
                    </div>
                    <div className="faltu-box">
                        <div className="subes-box">
                            <div className="sub-box-item">
                                <div className="sub-box-item-top">
                                    <h4>Join For Free</h4>
                                </div>
                                <div className="sub-box-item-mid">
                                    <ul>
                                        <li>Lorem Ipsum is a dummy text</li>
                                        <li>Lorem Ipsum is a dummy text</li>
                                        <li>Lorem Ipsum is a dummy text</li>
                                        <li>Lorem Ipsum is a dummy text</li>
                                    </ul>
                                </div>
                                <div className="sub-box-item-below">
                                    <button>Edit </button>
                                    <button>Remove </button>
                                </div>
                            </div>
                        </div>
                        <div className="subes-box">
                            <div className="sub-box-item">
                                <div className="sub-box-item-top">
                                    <h4>Silver</h4>
                                </div>
                                <div className="sub-box-item-mid">
                                    <ul>
                                        <li>Lorem Ipsum is a dummy text</li>
                                        <li>Lorem Ipsum is a dummy text</li>
                                        <li>Lorem Ipsum is a dummy text</li>
                                        <li>Lorem Ipsum is a dummy text</li>
                                    </ul>
                                </div>
                                <div className="sub-box-item-below">
                                    <button>Edit </button>
                                    <button>Remove </button>
                                </div>
                            </div>
                        </div>
                        <div className="subes-box">
                            <div className="sub-box-item">
                                <div className="sub-box-item-top">
                                    <h4>Silver</h4>
                                </div>
                                <div className="sub-box-item-mid">
                                    <ul>
                                        <li>Lorem Ipsum is a dummy text</li>
                                        <li>Lorem Ipsum is a dummy text</li>
                                        <li>Lorem Ipsum is a dummy text</li>
                                        <li>Lorem Ipsum is a dummy text</li>
                                    </ul>
                                </div>
                                <div className="sub-box-item-below">
                                    <button>Edit </button>
                                    <button>Remove </button>
                                </div>
                            </div>
                        </div>
                        <div className="subes-box">
                            <div className="sub-box-item">
                                <div className="sub-box-item-top">
                                    <h4>Gold</h4>
                                </div>
                                <div className="sub-box-item-mid">
                                    <ul>
                                        <li>Lorem Ipsum is a dummy text</li>
                                        <li>Lorem Ipsum is a dummy text</li>
                                        <li>Lorem Ipsum is a dummy text</li>
                                        <li>Lorem Ipsum is a dummy text</li>
                                    </ul>
                                </div>
                                <div className="sub-box-item-below">
                                    <button>Edit </button>
                                    <button>Remove </button>
                                </div>
                            </div>
                        </div>
                        <div className="subes-box">
                            <div className="sub-box-item">
                                <div className="sub-box-item-top">
                                    <h4>Platinum</h4>
                                </div>
                                <div className="sub-box-item-mid">
                                    <ul>
                                        <li>Lorem Ipsum is a dummy text</li>
                                        <li>Lorem Ipsum is a dummy text</li>
                                        <li>Lorem Ipsum is a dummy text</li>
                                        <li>Lorem Ipsum is a dummy text</li>
                                    </ul>
                                </div>
                                <div className="sub-box-item-below">
                                    <button>Edit </button>
                                    <button>Remove </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subs;