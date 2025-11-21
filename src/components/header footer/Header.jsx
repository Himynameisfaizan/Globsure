import React from "react";
import '../../css/header.css'
import { NavLink, Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
            <Link to="/"><img src="src/assets/image/logo/Globsure_International_Final.png" alt="logo"/></Link>
        </div>
        <div className="menu">
            <ul>
            <li className="text-[#000000a6] hover:text-[#002249] duration-300"><NavLink className={({isActive}) => isActive ? "text-[#002249]" : undefined} to="/">Home</NavLink></li>
            <li className="text-[#000000a6] hover:text-[#002249] duration-300"><NavLink className={({isActive}) => isActive ? "text-[#002249]" : undefined} to="/insurance">Insurance</NavLink></li>
            <li className="text-[#000000a6] hover:text-[#002249] duration-300"><NavLink className={({isActive}) => isActive ? "text-[#002249]" : undefined} to="/about-us">About us</NavLink></li>
            <li className="text-[#000000a6] hover:text-[#002249] duration-300"><NavLink className={({isActive}) => isActive ? "text-[#002249]" : undefined} to="/claim">Claim</NavLink></li>
            <li className="text-[#000000a6] hover:text-[#002249] duration-300"><NavLink className={({isActive}) => isActive ? "text-[#002249]" : undefined} to="/contact-us">Contact us </NavLink></li>
            </ul>
        </div>
        <div className="line"></div>
        <div className="icon">
            <i className="ri-search-eye-line"></i>
            <i className="ri-user-3-line"></i>
        </div>
      </div>
    </>
  );
};
