/** @format */

import { useState , useEffect } from "react";
import axios from 'axios'
import img from "../Images/c-37.png.png";
import img2 from "../Images/c-38.png.png";
import img3 from "../Images/c-39.png.png";
import img4 from "../Images/c-40.png.png";
import HOC from "./HOC";

const AddScreen = () => {
  const [ data , setData ] = useState([])

  const getBlogs = async () => {
    try {
      const { data } = await axios.get("https://sqd1nkfeu1.execute-api.ap-south-1.amazonaws.com/development/api/v1/blog");
      setData(data)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBlogs()
  },[])

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
        </div>
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