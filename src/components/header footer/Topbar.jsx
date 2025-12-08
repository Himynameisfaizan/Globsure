import React from "react";
import "../../css/topbar.css";
import './responsive.css'
import { NavLink } from "react-router-dom";
const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="first_bar">
          <div className="icon">
           <div className="email">
              <i className="ri-mail-ai-fill"></i>
              <p> globsureinternational@gmail.com</p>
            </div>
            <div className="location">
              <i className="ri-map-pin-fill"></i>
              <p>3rd Floor, Bhanushali Avenue, Kutch, Gujarat – 370201</p>
            </div>
           
          </div>
        </div>
        <div className="second_bar">
          <div className="info">
            <div className="nav">
              <NavLink to="/claim">How a claim</NavLink>
              <NavLink to="">FAQs</NavLink>
              <NavLink to="/about-us">About</NavLink>
            </div>
            <div className="socail">
              <i className="ri-twitter-x-fill"></i>
              <i className="ri-facebook-fill"></i>
              <i className="ri-pinterest-fill"></i>
              <i className="ri-instagram-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
