import React from "react";
import "../../css/footer.css";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-logo">
          <div className="logo">
            <img
              src="src/assets/image/logo/white logo.png"
              alt="logo"
            />
          </div>

          <div className="email">
            <i className="ri-mail-send-line"></i>
            <h3>globsureinsurance@gamil.com</h3>
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
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Our plan</a>
              </li>
              <li>
                <a href="#">Our work</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="insurance">
            <h3>Insurance product</h3>
            <ul>
              <li>
                <a href="#">General insurance</a>
              </li>
              <li>
                <a href="#">Health insurance</a>
              </li>
              <li>
                <a href="#">Life insurance</a>
              </li>
              <li>
                <a href="#">Vehical Insurance</a>
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
              <a href="#"><i className="ri-facebook-fill"></i></a>
              <a href="#"><i className="ri-instagram-line"></i></a> 
              <a href="#"><i className="ri-twitter-x-line"></i></a>
              <a href="#"><i className="ri-linkedin-fill"></i></a> 
            </div>
          </div>
          <div className="newsletter">
            <h3>Great insurance your solutions for life and business</h3>
            <h4>Subscripbe our newsletter</h4>
            <div className="email">
              <input className="bg-white text-black" type="email" required placeholder="Email address" />
              <i className="ri-send-plane-fill"></i>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <i className="ri-copyright-line"></i>
          <h3>All Copyright Reserved 2025 by Globsure.com</h3>
        </div>
      </footer>
    </>
  );
};
