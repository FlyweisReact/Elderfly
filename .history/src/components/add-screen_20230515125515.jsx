import React, {useState} from 'react';
import Sidebar from "./sidebar";
import Navbar from "./navbar";

import img from "../Images/c-37.png.png";
import img2 from "../Images/c-38.png.png";
import img3 from "../Images/c-39.png.png";
import img4 from "../Images/c-40.png.png";

import {useNavigate} from "react-router-dom";

import img8 from "../Images/c-2.png";
import img9 from "../Images/c-3.png";
import img10 from "../Images/c-4.png";
import img11 from "../Images/c-5.png";
import img12 from "../Images/c-6.png";
import HOC from './HOC';


const AddScreen = ()=>{

    const [show, setShow] = useState(false);
    const handleClick = ()=>{
      setShow(prev=>!prev);
    }
    const navigate = useNavigate();
  

    function MobileBar(){
        return (
          <>
          <div className="side-cont2">
              <button onClick={handleClick}>Close</button>
              <div className="side-cont-sub">
                <div className="lst-item">
                  <div className="lst-item-1" onClick={()=>navigate("/dashboard")}>
                    <img src={img9} alt="" />
                    <p>Dash Board</p>
                  </div>
                </div>
                <div className="lst-itemp">
                  <div className="lst-item-1" onClick={()=>navigate("/subs")}>
                    <img src={img10} alt="" />
                    <p>Subscription</p>
                  </div>
                </div>
                <div className="lst-itemp">
                  <div className="lst-item-1" onClick={()=>navigate("/staff")}>
                    <img src={img11} alt="" />
                    <p>Staff</p>
                  </div>
                </div>
                <div className="lst-itemp">
                  <div className="lst-item-1" onClick={()=>navigate("/review")}>
                    <img src={img12} alt="" />
                    <p>Review</p>
                  </div>
                </div>
              </div>
          </div>
          </>
        )
      }
    

    return (
        <>
       
        <div className="dash-cont">
        
             <div className="dash-right">
             
                <div className="add-cont">
                    <img src={img2} alt='' />
                    <img src={img} alt='' />
                    <img src={img3 } alt='' />
                </div>
                <div className="add-cont2">
                    <img src={img4} alt='' />
                    <div className="add-cont2-btns">
                        <button className="bt1">Cancel</button>
                        <button className="bt2">Upload</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HOC(AddScreen);