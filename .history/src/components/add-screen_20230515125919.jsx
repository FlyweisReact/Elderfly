/** @format */

import { useState } from "react";
import img from "../Images/c-37.png.png";
import img2 from "../Images/c-38.png.png";
import img3 from "../Images/c-39.png.png";
import img4 from "../Images/c-40.png.png";
import HOC from "./HOC";

const AddScreen = () => {
  const [ data , setData ] = useState([])


  return (
    <>
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