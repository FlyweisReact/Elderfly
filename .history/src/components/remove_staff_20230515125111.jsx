/** @format */

import React, { useEffect, useState } from "react";

import img from "../Images/c-16.png";
import axios from "axios";
import { toast } from "react-toastify";
import HOC from "./HOC";

const RemoveStaff = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/staff"
      );
      setData(data.staff);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/staff/${id}`
      );
      console.log(data);
      fetchData();
      toast.success("Staff Deleted");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>

<div className="Head">
        <div>
          <h4>Plan & Pricing</h4>
          <p>
            Simple Pricing, No hidden fees, Advance feature for your business
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
          >
            + Create New
          </button>
        </div>
      </div>
      <div className="dash-cont">
        <div className="dash-right">
          <div className="remove-staff-top">
            <h4>Remove Staff</h4>
          </div>

          <div className="staff-mid-cont">
            {data?.map((i, index) => (
              <div className="remove-staff-box" key={index}>
                <img src={img} alt="" />
                <h4> {i.name} </h4>

                <button onClick={() => deleteHandler(i._id)}>Remove</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(RemoveStaff);
