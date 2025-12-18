import React, { useState, useEffect } from "react";
import "../../css/header.css";
// import './responsive.css'
import { NavLink, Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // 1. IsLoggedIn ko 'State' bana diya taaki UI update ho sake
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 2. Component load hone par check karo ki user login hai ya nahi
  useEffect(() => {
    const userStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(userStatus);
  }, []);

  const handleLogout = () => {
    // Storage clear karo
    localStorage.removeItem('isLoggedIn'); 
    
    // 3. State update karo (Isse page bina refresh kiye update ho jayega)
    setIsLoggedIn(false); 
    
    // Alert hata diya hai (User request)
    
    // Login page par bhej do
    navigate('/login-user');
  };

  return (
    <>
      <div className="header relative">
        <div className="logo">
          <Link to="/">
            <img
              src="/image/logo/logoo.png"
              alt="logo"
            />
            {/* <h2 className="text-[8px] font-thin text-[#002249]" style={{paddingLeft:'10px'}}>
              GEICO INSURANCE BROKERS PRIVATE LIMITED
            </h2> */}
          </Link>
        </div>
        
        {/* DESKTOP MENU */}
        <div className="menu">
          <ul>
            <li className="text-[#000000a6] hover:text-[#002249] duration-300 text-lg">
              <NavLink className={({ isActive }) => isActive ? "text-[#002249]" : undefined } to="/">
                Home
              </NavLink>
            </li>

            <li className="group relative insurance text-[#000000a6] hover:text-[#002249] duration-300 text-lg cursor-pointer">
              <div className="main flex items-center">
                Insurance <i className="ri-arrow-drop-down-line text-xl"></i>
              </div>
              <div className="dropdown absolute top-full left-0 bg-white shadow-lg rounded p-2 hidden group-hover:block w-48 z-20">
                <NavLink className="block p-2 hover:bg-gray-100 text-sm" to="/general_insurance">General Insurance</NavLink>
                <NavLink className="block p-2 hover:bg-gray-100 text-sm" to="/health_insurance">Health Insurance</NavLink>
                <NavLink className="block p-2 hover:bg-gray-100 text-sm" to="/vehicle_insurance">Vehicle Insurance</NavLink>
              </div>
            </li>

            <li className="text-[#000000a6] hover:text-[#002249] duration-300 text-lg">
              <NavLink className={({ isActive }) => isActive ? "text-[#002249]" : undefined } to="/about-us">
                About us
              </NavLink>
            </li>
            <li className="text-[#000000a6] hover:text-[#002249] duration-300 text-lg">
              <NavLink className={({ isActive }) => isActive ? "text-[#002249]" : undefined } to="/claim">
                Claim
              </NavLink>
            </li>
            <li className="text-[#000000a6] hover:text-[#002249] duration-300 text-lg">
              <NavLink className={({ isActive }) => isActive ? "text-[#002249]" : undefined } to="/contact-us">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* HAMBURGER ICON */}
        <div className="hamburger" onClick={()=> setIsOpen(!isOpen)}>
          <div className="menu-icon hidden relative">
            <i className={`ri-menu-line absolute transition-all ease-in-out duration-200 ${isOpen ? 'opacity-0 rotate-90 scale-0 ' : 'opacity-100 rotate-0 scale-100'} `}></i>
            <i className={`ri-close-large-line transition-all ease-in-out duration-200 ${isOpen ? 'opacity-100 rotate-0 scale-100 ' : 'opacity-0 -rotate-90 scale-0'}`}></i>
          </div>
        </div>

        <div className="line"></div>

        <div className="login">
          {isLoggedIn ? (
            <button onClick={handleLogout} title="Logout">
              {/* Maine icon change karke Logout wala kar diya hai taaki clear dikhe, aap chaho to user-3-line wapas laga lena */}
              <i className="text-2xl text-red-600 hover:text-red-800 cursor-pointer ri-logout-circle-r-line"></i>
            </button>
          ) : (
            // Agar Login nahi hai to LOGIN link dikhao
            <NavLink to="/login-user">
              <i className="text-2xl text-[#000000a6] ri-user-3-line"></i>
            </NavLink>
          )}
        </div>
      </div>

      {/* --- MOBILE MENU LIST --- */}
      <div className={`menu-container hidden scale-0 absolute top-15 right-10 w-40 rounded bg-[#00000046] backdrop-blur-sm shadow-lg border border-[#00000017] z-10 list-none transition-all ease-in-out duration-200 origin-top-right ${isOpen ? 'scale-100' : 'scale-0'} `}>
        <NavLink className="" to="/"><li className="rounded-t text-[12px] text-white hover:bg-[#ffffff70] hover:text-[#002249] duration-200" style={{padding:"10px"}}>Home</li></NavLink>
        <NavLink className="" to="/about-us"><li className="text-[12px] text-white hover:bg-[#ffffff70] hover:text-[#002249] duration-200" style={{padding:"10px"}}>About Us </li></NavLink>
        <NavLink className="" to="/health_insurance"><li className="text-[12px] text-white hover:bg-[#ffffff70] hover:text-[#002249] duration-200" style={{padding:"10px"}}>Health Insurance</li></NavLink>
        <NavLink className="" to="/vehicle_insurance"><li className="text-[12px] text-white hover:bg-[#ffffff70] hover:text-[#002249] duration-200" style={{padding:"10px"}}>Vehicle Insurance</li></NavLink>
        <NavLink className="" to="/general_insurance"><li className="text-[12px] text-white hover:bg-[#ffffff70] hover:text-[#002249] duration-200" style={{padding:"10px"}}>General Insurance</li></NavLink>
        <NavLink className="" to="/claim"><li className="text-[12px] text-white hover:bg-[#ffffff70] hover:text-[#002249] duration-200" style={{padding:"10px"}}>How to file claim</li></NavLink>
        <NavLink className="" to="/contact-us"><li className="rounded-b text-[12px] text-white hover:bg-[#ffffff70] hover:text-[#002249] duration-200" style={{padding:"10px"}}>Contact Us</li></NavLink>
        
        {/* Mobile Menu Logout Logic */}
        {isLoggedIn ? (
             <li onClick={handleLogout} className="rounded-b text-[12px] text-red-200 hover:bg-red-500 hover:text-white duration-200 cursor-pointer" style={{padding:"10px"}}>Logout</li>
        ) : (
             <NavLink className="" to="/login-user"><li className="rounded-b text-[12px] text-white hover:bg-[#ffffff70] hover:text-[#002249] duration-200" style={{padding:"10px"}}>Login</li></NavLink>
        )}
      </div>
    </>
  );
};