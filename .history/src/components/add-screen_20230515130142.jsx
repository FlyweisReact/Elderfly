/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import img from "../Images/c-37.png.png";
import img2 from "../Images/c-38.png.png";
import img3 from "../Images/c-39.png.png";
import img4 from "../Images/c-40.png.png";
import HOC from "./HOC";

const AddScreen = () => {
  const [data, setData] = useState([]);

  const getBlogs = async () => {
    try {
      const { data } = await axios.get(
        "https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/blog"
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div className="Head">
          <h4>Blogs</h4>
      </div>

      <div className="Three-Cont">
      {data?.map((i, index) => (
              <div className="subes-box" key={index}>
                <div className="sub-box-item">
                  <div className="sub-box-item-top">
                    <h4> {i.planName} </h4>
                  </div>
                  <div className="sub-box-item-mid">
                    <p className="head">Rs. {i.amountPerMonth}</p>
                    <p className="subhead">Per Month</p>
                    <ul>
                      <li> Start Date : {i.startDate} </li>
                      <li> End Date : {i.endDate} </li>
                      <li> Content : {i.data} </li>
                    </ul>
                  </div>
                  <div className="sub-box-item-below">
                    <button
                      onClick={() => {
                        setId(i._id);
                        setEdit(true);
                        setModalShow(true);
                      }}
                    >
                      Edit{" "}
                    </button>
                    <button onClick={() => deleteSubscription(i._id)}>
                      Remove{" "}
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
      <div className="dash-cont">
        <div className="dash-right">
          <div className="add-cont">
            <img src={img2} alt="" />
            <img src={img} alt="" />
            <img src={img3} alt="" />
          </div>
          <div className="add-cont2">
            <img src={img4} alt="" />
            <div className="add-cont2-btns">
              <button className="bt1">Cancel</button>
              <button className="bt2">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(AddScreen);
