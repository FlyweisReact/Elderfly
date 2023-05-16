import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";
import img from "../Images/c-15.png";
import img2 from "../Images/c-22.png";
import img9 from "../Images/c-3.png";
import img10 from "../Images/c-4.png";
import img11 from "../Images/c-5.png";
import img12 from "../Images/c-6.png";

const Staff = () => {
  const navigate = useNavigate();
  const [addStaff, setAddStaff] = useState(false);
  const handleClick = () => {
    setAddStaff((prev) => !prev);
  };

  const [show, setShow] = useState(false);
  const handleClick2 = () => {
    setShow((prev) => !prev);
  };

  function MobileBar() {
    return (
      <>
        <div className="side-cont2">
          <button onClick={handleClick2}>Close</button>
          <div className="side-cont-sub">
            <div className="lst-item">
              <div
                className="lst-item-1"
                onClick={() => navigate("/dashboard")}
              >
                <img src={img9} alt="" />
                <p>Dash Board</p>
              </div>
            </div>
            <div className="lst-itemp">
              <div className="lst-item-1" onClick={() => navigate("/subs")}>
                <img src={img10} alt="" />
                <p>Subscription</p>
              </div>
            </div>
            <div className="lst-itemp">
              <div className="lst-item-1" onClick={() => navigate("/staff")}>
                <img src={img11} alt="" />
                <p>Staff</p>
              </div>
            </div>
            <div className="lst-itemp">
              <div className="lst-item-1" onClick={() => navigate("/review")}>
                <img src={img12} alt="" />
                <p>Review</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {show ? <MobileBar /> : ""}
      <div className="dash-cont">
        <div className="dash-left">
          <Sidebar />
        </div>
        <i className="fa fa-bars barsIcon" onClick={handleClick2}></i>
        <div className="dash-right">
          <Navbar />
          <div className="staff-top-cont">
            <div className="staff-top-cont-l">
              <h3>Add Staff</h3>
            </div>
            <div className="staff-top-cont-r">
              <p>open documentation </p>
              <button onClick={handleClick}>Setup Details</button>
              <img onClick={() => navigate("/remove-staff")} src={img} alt="" />
            </div>
          </div>
          <div className="staff-mid-cont">
            <div className="staff-box">
              <h6>Sales Representative</h6>
              <p>
                Lorem Ipsum is a dummy text which is used to check and deploy
                various elements in the static and dynamic website webud.
              </p>
            </div>
            <div className="staff-box">
              <h6>IT Staff</h6>
              <p>
                Lorem Ipsum is a dummy text which is used to check and deploy
                various elements in the static and dynamic website webud.
              </p>
            </div>
            <div className="staff-box">
              <h6>General Services</h6>
              <p>
                Lorem Ipsum is a dummy text which is used to check and deploy
                various elements in the static and dynamic website webud.
              </p>
            </div>
            <div className="staff-box">
              <h6>Driver</h6>
              <p>
                Lorem Ipsum is a dummy text which is used to check and deploy
                various elements in the static and dynamic website webud.
              </p>
            </div>
            <div className="staff-box">
              <h6>Supervisor</h6>
              <p>
                Lorem Ipsum is a dummy text which is used to check and deploy
                various elements in the static and dynamic website webud.
              </p>
            </div>
            <div className="staff-box">
              <h6>Security</h6>
              <p>
                Lorem Ipsum is a dummy text which is used to check and deploy
                various elements in the static and dynamic website webud.
              </p>
            </div>
          </div>
          {addStaff ? (
            <div className="add-staff-cont">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                fermentum leo vel risus fermentum, sit amet rutrum massa
                commodo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                fermentum leo vel risus fermentum, sit amet rutrum massa
                commodo.
              </p>
              <form className="add-staff-form">
                <div className="form-cont-1">
                  <div className="add-form-it">
                    <label>Name</label>
                    <input type="text" placeholder="Nishant Jain" />
                  </div>
                  <div className="add-form-it">
                    <label>Address</label>
                    <input type="text" placeholder="Nishant Jain" />
                  </div>
                </div>
                <div className="form-cont-2">
                  <div className="form-cont-2-l">
                    <img src={img2} alt="" />
                  </div>
                  <div className="form-cont-2-r">
                    <div className="form-cont-2-r1">
                      <div className="form-cont-2-it2">
                        <label>Birthday</label>
                        <input type="text" />
                      </div>
                      <div className="form-cont-2-it2">
                        <label>Gender</label>
                        <input type="text" />
                      </div>
                      <div className="form-cont-2-it2">
                        <label>Email</label>
                        <input type="text" />
                      </div>
                      <div className="form-cont-2-it2">
                        <label>Nationality</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="form-cont-2-r1">
                      <div className="form-cont-3-it">
                        <label>Language</label>
                        <select>
                          <option value="">Select Language</option>
                          <option vlaue="delhi">Delhi</option>
                          <option vlaue="delhi">Mumbai</option>
                          <option vlaue="delhi">Bangalore</option>
                          <option vlaue="delhi">Chennai</option>
                        </select>
                      </div>
                      <div className="form-cont-3-it">
                        <label>Phone Number</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="form-cont-2-r1">
                      <div className="form-cont-4-it">
                        <label>Employee Id</label>
                        <input type="text" />
                      </div>
                      <div className="form-cont-4-it">
                        <label>Employee Id</label>
                        <input type="text" />
                      </div>
                      <div className="form-cont-4-it">
                        <label>Employee Id</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="form-cont-2-r1">
                      <div className="form-cont-5-it">
                        <label>Email</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="form-cont-2-r1">
                      <div className="form-cont-6-it1"></div>
                      <div className="form-cont-6-it">
                        <button>Save Information</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Staff;
