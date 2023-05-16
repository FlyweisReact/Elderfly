/** @format */

import axios from "axios";
import { Alert } from "bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../Images/c-1.png";
import img2 from "../Images/c-2.png";

const Main = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ ErrorMessage , setErrorMessage ] = useState(false)

  const Login = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("AdminToken", data.accessToken);
      toast.success("Login Successfully");
      navigate("/dashboard");
    } catch (e) {
      setErrorMessage(true)
      console.log(e);
    }
  };

  return (
    <>
      <div className="main-cont">
        <div className="main-cont-left">
          <img src={img2} alt="" />
        </div>

        <div className="main-cont-right">
          <div className="main-cont-right-1">
          <Alert>Invalid Credent</Alert>
            <img src={img} alt="" />
            <form className="form-main" onSubmit={Login}>
              <input
                className="ip"
                type="text"
                placeholder="Admin Id"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="ip"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p onClick={() => navigate("/for-pass")}>forget password?</p>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
