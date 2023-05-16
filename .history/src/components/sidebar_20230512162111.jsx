import React from "react";
import {useNavigate} from "react-router-dom";
import img from "../Images/c-2.png";
import img2 from "../Images/Vector.png";
import img3 from "../Images/c-4.png";
import img4 from "../Images/c-5.png";
import img5 from "../Images/c-6.png";

const Sidebar = () => {
  const navigate = useNavigate();

  const sideBar  = [
    {
      name : 'Dashboard' , 
      link : '/dashboard',
      img : img2
    },
    {
      name : 'Subscriptions' , 
      link : '/subs',
      img : img3
    },
    {
      name : 'Staff' , 
      link : '/staff',
      img : img4
    },
    {
      name : 'Review' , 
      link : '/review',
      img : img5
    },
  ]

  return (
    <>
      <div className="side-cont">
        <img src={img} alt="" />
        <div className="side-list">
        {
          sideBar.map((i , index) => (
            <div className="lst-itemp" onClick={()=>navigate("/dashboard")}>
            <div className="lst-item-1">
              <img src={img2} alt="" />
              <p>Dashboard</p>
            </div>
          </div>
          ))
        }
          <div className="lst-itemp" onClick={()=>navigate("/dashboard")}>
            <div className="lst-item-1">
              <img src={img2} alt="" />
              <p>Dashboard</p>
            </div>
          </div>
          <div className="lst-itemp" onClick={()=>navigate("/subs")}>
            <div className="lst-item-1">
              <img src={img3} alt="" />
              <p>Subscriptions</p>
            </div>
          </div>
          <div className="lst-itemp" onClick={()=>navigate("/staff")}>
            <div className="lst-item-1">
              <img src={img4} alt="" />
              <p>Staff</p>
            </div>
          </div>
          <div className="lst-itemp" onClick={()=>navigate("/review")}>
            <div className="lst-item-1">
              <img src={img5} alt="" />
              <p>Review</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
