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
      <div className="dash-cont">
        <div className="dash-right">
          <div className="add-cont">          </div>
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