import React from "react";
import "../../css/header.css";
import { NavLink, Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img
              src="/image/logo/Globsure_International_Final.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li className="text-[#000000a6] hover:text-[#002249] duration-300 text-lg">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#002249]" : undefined
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="insurance text-[#000000a6] hover:text-[#002249] duration-300 text-lg">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#002249]" : undefined
                }
                to="/health_insurance"
              >
                <div className="main flex items-center">
                  Insurance <i className="ri-arrow-drop-down-line text-xl"></i>
                </div>

                <div className="dropdown">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-[#002249]" : undefined
                    }
                    to="/general_insurance"
                  >
                    General Insurance
                  </NavLink>

                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-[#002249]" : undefined
                    }
                    to="/health_insurance"
                  >
                    Health Insurance
                  </NavLink>

                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-[#002249]" : undefined
                    }
                    to="/vehicle_insurance"
                  >
                    Vehicle Insurance
                  </NavLink>
                </div>
              </NavLink>
            </li>
            <li className="text-[#000000a6] hover:text-[#002249] duration-300 text-lg">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#002249]" : undefined
                }
                to="/about-us"
              >
                About us
              </NavLink>
            </li>
            <li className="text-[#000000a6] hover:text-[#002249] duration-300 text-lg">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#002249]" : undefined
                }
                to="/claim"
              >
                Claim
              </NavLink>
            </li>
            <li className="text-[#000000a6] hover:text-[#002249] duration-300 text-lg">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#002249]" : undefined
                }
                to="/contact-us"
              >
                Contact us{" "}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="menu-icon hidden"><i className="ri-menu-line"></i></div>
        <div className="line"></div>
        <div className="icon">
          <i className="ri-search-eye-line"></i>
          <i className="ri-user-3-line"></i>
        </div>
      </div>
    </>
  );
};
