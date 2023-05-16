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
        <h4>Remove Staff</h4>
      </div>
          <div className="Three-Cont">
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
