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
      icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
      name: "Users",
      link: "/customer",
      icon: <i className="fa-solid fa-user"></i>,
    },
    {
      name: "Staff",
      link: "/staff",
      icon: <i className="fa-sharp fa-solid fa-users"></i>,
    },
    {
      name: "Subscriptions",
      link: "/subs",
      icon: <i className="fa-solid fa-money-bill"></i>,
    },
    {
      name: "Team Sentiments",
      link: "/sentiments",
      icon: <i className="fa-brands fa-teamspeak"></i>,
    },
    {
      name: "Transaction",
      link: "/payment",
      icon: <i className="fa-solid fa-money-bill"></i>,
    },
    {
      name: "Contact us",
      link: "/contact",
      icon: <i className="fa-solid fa-address-book"></i>,
    },
    {
      name: "Callbacks",
      link: "/order",
      icon: <i className="fa-solid fa-cart-shopping"></i>,
    },
    {
      name: "Emergency Service",
      link: "/emergency-service",
      icon: <i className="fa-solid fa-globe"></i>,
    },
    {
      name: "Sub-Service",
      link: "/sub-service",
      icon: <i className="fa-brands fa-slack"></i>,
    },
    {
      name: "Service",
      link: "/service",
      icon: <i className="fa-solid fa-bookmark"></i>,
    },

    {
      name: "Terms  and Condition",
      link: "/terms",
      icon: <i className="fa-brands fa-discord"></i>,
    },
    {
      name: "Privacy Policy",
      link: "/privacy",
      icon: <i className="fa-solid fa-lock"></i>,
    },
    {
      name: "Notification",
      link: "/notification",
      icon: <i className="fa-solid fa-envelope"></i>,
    },
    {
      name: "Banner",
      link: "/banner",
      icon: <i className="fa-solid fa-image"></i>,
    },
    {
      name: "Concierg Services",
      link: "/concierg-service",
      icon: <i className="fa-brands fa-usps"></i>,
    },
    {
      name: "Blogs",
      link: "/add",
      icon: <i className="fa-solid fa-image"></i>,
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
                <p>
                  {" "}
                  {i.icon} {i.name}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
