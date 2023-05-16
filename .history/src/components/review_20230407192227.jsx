import React, { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import MobileBar from "./mobile-bar";

import img from "../Images/c-23.png";
import img2 from "../Images/c-24.png";
import img3 from "../Images/c-25.png";
import img4 from "../Images/c-26.png";
import img5 from "../Images/c-27.png";
import img6 from "../Images/c-28.png";
import img7 from "../Images/c-29.png";
import img8 from "../Images/c-30.png";
import img9 from "../Images/c-31.png";
import img10 from "../Images/c-32.png";
import img11 from "../Images/c-33.png";
import img12 from "../Images/c-34.png";
import img13 from "../Images/c-35.png";
import img14 from "../Images/c-36.png";
import {useNavigate} from "react-router-dom";

import img15 from "../Images/c-2.png";
import img16 from "../Images/c-3.png";
import img17 from "../Images/c-4.png";
import img18 from "../Images/c-5.png";
import img19 from "../Images/c-6.png";


const Review = () => {

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
                  <img src={img16} alt="" />
                  <p>Dash Board</p>
                </div>
              </div>
              <div className="lst-itemp">
                <div className="lst-item-1" onClick={()=>navigate("/subs")}>
                  <img src={img17} alt="" />
                  <p>Subscription</p>
                </div>
              </div>
              <div className="lst-itemp">
                <div className="lst-item-1" onClick={()=>navigate("/staff")}>
                  <img src={img18} alt="" />
                  <p>Staff</p>
                </div>
              </div>
              <div className="lst-itemp">
                <div className="lst-item-1" onClick={()=>navigate("/review")}>
                  <img src={img19} alt="" />
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
                show? <MobileBar /> : ""
            }
      <div className="dash-cont">
        <div className="dash-left">
          <Sidebar />
        </div>
        <i className="fa fa-bars barsIcon" onClick={handleClick}></i>
        <div className="dash-right">
          <Navbar />
          <div className="review-top-cont">
            <div className="review-top-l">
              <div className="review-top-l-cont">
                <img src={img} alt="" />
                <h6>Karan Jain</h6>
                <p>Manager</p>
              </div>
              <div className="review-top-l-cont">
                <img src={img2} alt="" />
                <h6>Karan Jain</h6>
                <p>Manager</p>
              </div>
              <div className="review-top-l-cont">
                <img src={img3} alt="" />
                <h6>Karan Jain</h6>
                <p>Manager</p>
              </div>
            </div>
            <div className="review-top-r">
              <div className="review-top-r-cont">
                <div className="review-top-r-cont-2">
                  <div className="review-top-r-head">
                    <h6>Average Team Sentiment</h6>
                  </div>
                  <div className="review-cont2-it">
                    <img src={img6} alt="" />
                    <h6>Nailing it</h6>
                    <p>50%</p>
                  </div>

                  <div className="review-cont2-it">
                    <img src={img5} alt="" />
                    <h6>Nailing it</h6>
                    <p>50%</p>
                  </div>

                  <div className="review-cont2-it">
                    <img src={img7} alt="" />
                    <h6>Nailing it</h6>
                    <p>50%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-mid-cont">
              <div className="review-mid-l">
                <h6>Staff Review and Feedback</h6>
                <div className="review-mid-l-2">
                  <div className="review-mid-l-it">
                    <div className="review-mid-l-it-left">
                      <img src={img8} alt="" />
                    </div>
                    <div className="review-mid-l-it-right">
                      <h6>Karan Jain</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam fermentum{" "}
                      </p>
                    </div>
                  </div>
                  <img className="line-img" src={img4} alt="" />
                  <div className="review-mid-l-it">
                    <div className="review-mid-l-it-left">
                      <img src={img9} alt="" />
                    </div>
                    <div className="review-mid-l-it-right">
                      <h6>Karan Jain</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam fermentum{" "}
                      </p>
                    </div>
                  </div>
                  <img className="line-img" src={img4} alt="" />
                  <div className="review-mid-l-it">
                    <div className="review-mid-l-it-left">
                      <img src={img10} alt="" />
                    </div>
                    <div className="review-mid-l-it-right">
                      <h6>Karan Jain</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam fermentum{" "}
                      </p>
                    </div>
                  </div>
                  <img className="line-img" src={img4} alt="" />
                  <div className="review-mid-l-it">
                    <div className="review-mid-l-it-left">
                      <img src={img11} alt="" />
                    </div>
                    <div className="review-mid-l-it-right">
                      <h6>Karan Jain</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam fermentum{" "}
                      </p>
                    </div>
                  </div>
                  <img className="line-img" src={img4} alt="" />
                </div>
              </div>
              <div className="review-mid-r">
                <h6>Recent Questions</h6>
                <div className="review-mid-r-cont">
                  <div className="review-mid-r-cont-it">
                    <img src={img12} alt="" />
                    <p>Lorem ipsum is a dummy text</p>
                  </div>
                  <div
                    className="review-mid-r-cont-it"
                    style={{ backgroundColor: "#6A55F3" }}
                  >
                    <img src={img13} alt="" />
                    <p>Lorem ipsum is a dummy text</p>
                  </div>
                  <div
                    className="review-mid-r-cont-it"
                    style={{ backgroundColor: "#1F1F1F" }}
                  >
                    <img src={img14} alt="" />
                    <p>Lorem ipsum is a dummy text</p>
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

export default Review;
