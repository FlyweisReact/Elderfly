/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";
import img from "../Images/c-15.png";
import img2 from "../Images/c-22.png";
import img9 from "../Images/c-3.png";
import img10 from "../Images/c-4.png";
import img11 from "../Images/c-5.png";
import img12 from "../Images/c-6.png";
import axios from "axios";
import { toast } from "react-toastify";

const Staff = () => {
  const navigate = useNavigate();
  const [addStaff, setAddStaff] = useState(false);

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

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [officialEmail, setOfficialEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [language, setLanguage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Department, setDepartment] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/staff"
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const AddStaff = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/staff",
        {
          name,
          address,
          birthday,
          gender,
          officialEmail,
          nationality,
          language,
          phoneNumber,
          Department,
          workLocation,
          emailAddress,
          password,
          confirmPassword,
        }
      );
      console.log(data);
      fetchData();
      toast.success("Staff Added");
    } catch (e) {
      console.log(e);
    }
  };

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
              <a href="#some">
                <button onClick={() => setAddStaff(!addStaff)}>
                  Setup Details
                </button>
              </a>
              <img onClick={() => navigate("/remove-staff")} src={img} alt="" />
            </div>
          </div>

          <div className="staff-mid-cont">
            {data?.staff?.map((i, index) => (
              <div className="staff-box" key={index}>
                <h6> {i.name} </h6>
                <p> Address : {i.address} </p>
                <p> birthday : {i.birthday} </p>
                <p> gender : {i.gender} </p>
                <p> officialEmail : {i.officialEmail} </p>
                <p> nationality : {i.nationality} </p>
                <p> language : {i.language} </p>
                <p> phoneNumber : {i.phoneNumber} </p>
                <p> Department : {i.Department} </p>
                <p> workLocation : {i.workLocation} </p>
                <p> emailAddress : {i.emailAddress} </p>
              </div>
            ))}
          </div>

          {addStaff ? (
            <div className="add-staff-cont" id="some">
              <form className="add-staff-form" onSubmit={AddStaff}>
                <div className="form-cont-1">
                  <div className="add-form-it">
                    <label>Name / Surname</label>
                    <input
                      type="text"
                      placeholder=""
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="add-form-it">
                    <label>Address</label>
                    <input type="text" placeholder="" 
                      onChange={(e) => setAddress(e.target.value)} />
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
                        <input type="date"  
                      onChange={(e) => setBirthday(e.target.value)}/>
                      </div>
                      <div className="form-cont-2-it2">
                        <label>Gender</label>
                        <input type="text" 
                      onChange={(e) => setGender(e.target.value)} />
                      </div>
                      <div className="form-cont-2-it2">
                        <label>Email</label>
                        <input type="text"  
                      onChange={(e) => setName(e.target.value)}/>
                      </div>
                      <div className="form-cont-2-it2">
                        <label>Nationality</label>
                        <input type="text" 
                      onChange={(e) => setName(e.target.value)} />
                      </div>
                    </div>

                    <div className="form-cont-2-r1">
                      <div className="form-cont-3-it">
                        <label>Language</label>
                        <select 
                      onChange={(e) => setName(e.target.value)}>
                          <option value="">Select Language</option>
                          <option vlaue="delhi">Delhi</option>
                          <option vlaue="delhi">Mumbai</option>
                          <option vlaue="delhi">Bangalore</option>
                          <option vlaue="delhi">Chennai</option>
                        </select>
                      </div>
                      <div className="form-cont-3-it">
                        <label>Phone Number</label>
                        <input type="text" 
                      onChange={(e) => setName(e.target.value)} />
                      </div>
                    </div>
                    <div className="form-cont-2-r1">
                      <div className="form-cont-4-it">
                        <label>Employee Id</label>
                        <input type="text"  
                      onChange={(e) => setName(e.target.value)}/>
                      </div>
                      <div className="form-cont-4-it">
                        <label>Employee Id</label>
                        <input type="text"  
                      onChange={(e) => setName(e.target.value)}/>
                      </div>
                      <div className="form-cont-4-it">
                        <label>Employee Id</label>
                        <input type="text" 
                      onChange={(e) => setName(e.target.value)} />
                      </div>
                    </div>
                    <div className="form-cont-2-r1">
                      <div className="form-cont-5-it">
                        <label>Email</label>
                        <input type="text" 
                      onChange={(e) => setName(e.target.value)} />
                      </div>
                    </div>
                    <div className="form-cont-2-r1">
                      <div className="form-cont-6-it1"></div>
                      <div className="form-cont-6-it">
                        <button type='submit'>Save Information</button>
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
