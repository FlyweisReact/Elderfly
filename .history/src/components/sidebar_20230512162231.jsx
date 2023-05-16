/** @format */

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img from "../Images/c-2.png";
import img2 from "../Images/Vector.png";
import img3 from "../Images/c-4.png";
import img4 from "../Images/c-5.png";
import img5 from "../Images/c-6.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation()

  const sideBar = [
    {
      name: "Dashboard",
      link: "/dashboard",
      img: img2,
    },
    {
      name: "Subscriptions",
      link: "/subs",
      img: img3,
    },
    {
      name: "Staff",
      link: "/staff",
      img: img4,
    },
    {
      name: "Review",
      link: "/review",
      img: img5,
    },
  ];

  return (
    <>
      <div className="side-cont">
        <img src={img} alt="" />
        <div className="side-list">
          {sideBar.map((i, index) => (
            <div
              className={`lst-itemp ${} `}
              onClick={() => navigate(i.link)}
              key={index}
            >
              <div className="lst-item-1">
                <img src={i.img} alt="" />
                <p>{i.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
