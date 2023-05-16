/** @format */

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img from "../Images/c-2.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sideBar = [
    
    {
      name: "Dashboard",
      link: "/dashboard",
      icon : <i className="fa-solid fa-qrcode"></i>
    },
    {
      name: "Users",
      link: "/customer",
      icon : <i className="fa-solid fa-user"></i>
    },{
      name: "Staff",
      link: "/staff",
      icon : <i className="fa-sharp fa-solid fa-users"></i>
    },
    {
      name: "Subscriptions",
      link: "/subs",
      icon : <i className="fa-solid fa-money-bill"></i>
    },
    {
      name: "Team Sentiments",
      link: "/sentiments",
      icon : <i className="fa-brands fa-teamspeak"></i>
    },
    {
      name: "Transaction",
      link: "/payment",
      icon : <i className="fa-solid fa-money-bill"></i>
    },
    {
      name: "Contact us",
      link: "/contact",
      icon : <i className="fa-solid fa-address-book"></i>
    },
    {
      name: "Order",
      link: "/order",
    },
    {
      name: "Emergency Service",
      link: "/emergency-service",
    },
    {
      name: "Sub-Service",
      link: "/sub-service",
    },
    {
      name: "Service",
      link: "/service",
    },
   
 
  
    {
      name: "Terms  and Condition",
      link: "/terms",
      icon : <i className="fa-brands fa-discord"></i>
    },
    {
      name: "Privacy Policy",
      link: "/privacy",
      
    },
    {
      name: "Notification",
      link: "/notification",
    },
    {
      name: "Banner",
      link: "/banner",
    },
    {
      name: "Concierg Services",
      link: "/concierg-service",
    },
    {
      name: "Blogs",
      link: "/add",
    },
  ];

  return (
    <>
      <div className="side-cont">
        <img src={img} alt="" />
        <div className="side-list">
          {sideBar.map((i, index) => (
            <div
              className={
                i.link === location.pathname
                  ? "lst-itemp activeSide"
                  : "lst-itemp"
              }
              onClick={() => navigate(i.link)}
              key={index}
            >
              <div className="lst-item-1">
                <p> {i.icon} {i.name}   </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;