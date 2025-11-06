import React from "react";
import '../css/header.css'
export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
            <img src="src/assets/image/Globsure_International_Final.png" alt="logo"/>
        </div>
        <div className="menu">
            <ul>
             <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Our plans</a></li>
            <li><a href="#">Our works</a></li>
            <li><a href="#">Contact us </a></li>
            </ul>
        </div>
        <div className="line"></div>
        <div className="icon">
            <i class="ri-search-eye-line"></i>
            <i class="ri-user-3-line"></i>
        </div>
      </div>
    </>
  );
};
