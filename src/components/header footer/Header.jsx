import React from "react";
import '../../css/header.css'
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
            <Link to="/"><img src="src/assets/image/logo/Globsure_International_Final.png" alt="logo"/></Link>
        </div>
        <div className="menu">
            <ul>
             <li><Link to="/">Home</Link></li>
            <li><Link to="/insurance">Insurance</Link></li>
            <li><Link to="/about-us">About us</Link></li>
            <li><Link to="/claim">Claim</Link></li>
            <li><Link to="/contact-us">Contact us </Link></li>
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
