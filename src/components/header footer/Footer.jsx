import React from "react";
import "../../css/footer.css";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-logo">
          <div className="logo">
            <img src="/image/logo/white_logo.png" alt="logo" />
          </div>

          <div className="number">
            <i className="ri-phone-line"></i>
            <h3>+91 78986 5421</h3>
          </div>
        </div>
        <div className="footer-quicklink">
          <div className="explore">
            <h3>Explore</h3>
            <ul>
              <li>
                <NavLink to="/about-us">About us</NavLink>
              </li>
              <li>
                <NavLink to="/claim">How to Claim</NavLink>
              </li>
            
              <li>
                <NavLink to="/contact-us">Contact us</NavLink>
              </li>
            </ul>
          </div>
          <div className="insurance">
            <h3>Insurance product</h3>
            <ul>
              <li>
                <NavLink to="/general_insurance">General insurance</NavLink>
              </li>
              <li>
                <NavLink to="/health_insurance">Health insurance</NavLink>
              </li>
              <li>
                <NavLink to="/vehical_insurance">Vehicle Insurance</NavLink>
              </li>
            </ul>
          </div>
          <div className="address">
            <h3>Contact</h3>
            <h4>
              Domestic city netaji subhash <br />
              palace new delhi 110045
            </h4>
            <h4>
              Mon -Fri 10:00 to 6:00 <br /> Sunday Closed
            </h4>
            <div className="social">
              <a href="#">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#">
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="#">
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>
          <div className="newsletter">
            <h3>Great insurance your solutions for life and business</h3>
            <h4>Subscripbe our newsletter</h4>
            <div className="email">
              <input
                className="bg-white text-black"
                type="email"
                required
                placeholder="Email address"
              />
              <i className="ri-send-plane-fill"></i>
            </div>
          </div>
        </div>
        <div className="footer-copyright flex items-center justify-between">
          <div className="flex items-center">
            <i className="ri-copyright-line"></i>
            <h3>All Copyright Reserved 2025 by Globsure</h3>
          </div>
        <div>
          <h2 className="text-white text-lg tracking-wide">needhelp@company.com</h2>
        </div>
        </div>
      </footer>
    </>
  );
};
