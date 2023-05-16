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
      icon : <i class="fa-light fa-grid-2"></i>
    },
    {
      name: "Users",
      link: "/customer",
      icon : <i className="fa-solid fa-user"></i>
    },
    {
      name: "Subscriptions",
      link: "/subs",
    },
    {
      name: "Staff",
      link: "/staff",
    },
    {
      name: "Review",
      link: "/review",
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
      name: "Team Sentiments",
      link: "/sentiments",
    },
    {
      name: "Transaction",
      link: "/payment",
    },
    {
      name: "Contact us",
      link: "/contact",
    },
    {
      name: "Terms and Condition",
      link: "/terms",
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