/** @format */

import axios from "axios";
import { Alert, Spinner } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../Images/c-1.png";
import img2 from "../Images/c-2.png";

const Main = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const Login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/auth/login",
        {
          username: email,
          password,
        }
      );
      localStorage.setItem("AdminToken", data.accessToken);
      localStorage.setItem("AdminName", data.user.username);
      toast.success(`Welcome ${localStorage.getItem(")}`);
      navigate("/dashboard");
      setLoading(false);
    } catch (e) {
      setErrorMessage(true);
      console.log(e);
      setLoading(false);
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
            <img src={img} alt="" />
            <form className="form-main" onSubmit={Login}>
              {ErrorMessage ? (
                <Alert variant="danger">Invalid Credentials</Alert>
              ) : (
                ""
              )}
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
              <button type="submit">
                {loading ? (
                  <Spinner
                    animation="border"
                    role="status"
                    style={{ display: "block", margin: "auto" }}
                  >
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
