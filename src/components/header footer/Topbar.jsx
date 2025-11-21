import React from "react";
import "../../css/topbar.css";
const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="first_bar">
          <div className="icon">
            <div className="location">
              <i className="ri-map-pin-fill"></i>
              <p>30 Commercial Road Fratton, Australia</p>
            </div>

            <div className="email">
              <i className="ri-mail-ai-fill"></i>
              <p>needhelp@company.com</p>
            </div>
          </div>
        </div>
        <div className="second_bar">
          <div className="info">
            <div className="nav">
              <a href="">Make a claim</a>
              <a href="">FAQs</a>
              <a href="">About</a>
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
