import React, { useState } from "react";
import "../../css/footer.css";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ loading: false, msg: "", type: "" });

  // 2. Submit Handler
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: "", type: "" });

    try {
      const response = await fetch(
        "https://globsureinternational.com/globsure-api/mail.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            type: "newsletter",
          }),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setStatus({
          loading: false,
          msg: "Subscribed Successfully!",
          type: "success",
        });
        setEmail("");
        setTimeout(
          () => setStatus({ loading: false, msg: "", type: "" }),
          3000
        );
      } else {
        setStatus({
          loading: false,
          msg: "Subscription failed.",
          type: "error",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({ loading: false, msg: "Error.", type: "error" });
    }
  };

  return (
    <>
      {/* Footer Main Container */}
      <footer
        className="text-white w-full"
        style={{ backgroundColor: "#002249" }}
      >
        {/* Top Section: Links & Info */}
        <div
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          // Padding aur Gap ko inline diya hai taaki responsive mein issue na aaye
          style={{ padding: "40px 20px", gap: "40px" }}
        >
          {/* Column 1: Logo & Description */}
          <div className="footer-col flex flex-col items-start text-left">
            <div
              className="logo"
              style={{ marginBottom: "25px", marginTop: "-10px" }}
            >
              <NavLink to="/">
                {/* Logo size increased */}
                <img
                  src="/image/logo/white_logo.png"
                  alt="Globsure Logo"
                  style={{
                    maxWidth: "180px",
                    height: "auto",
                    display: "block",
                  }}
                />
              </NavLink>
            </div>
            {/* Meaningful Description for Globsure */}
            <p
              className="text-gray-300 text-sm"
              style={{
                marginBottom: "25px",
                lineHeight: "1.8",
                maxWidth: "300px",
              }}
            >
              Secure your future with{" "}
              <span className="text-[#0073bd]">Globsure International</span>. We
              provide comprehensive insurance solutions tailored to your needs
              from health and vehicles to business protection.
            </p>

            {/* Social Icons - Left Aligned */}
            <div className="social flex items-center" style={{ gap: "15px" }}>
              <a href="#" className="hover:text-[#0073bd] transition-colors">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="hover:text-[#0073bd] transition-colors">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="hover:text-[#0073bd] transition-colors">
                <i className="ri-twitter-x-line text-xl"></i>
              </a>
              <a href="#" className="hover:text-[#0073bd] transition-colors">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col flex flex-col items-start text-left">
            <h3
              className="font-bold text-xl text-white block"
              style={{
                marginBottom: "25px",
                borderBottom: "2px solid #0073bd",
                paddingBottom: "5px",
                display: "inline-block",
              }}
            >
              Quick Links
            </h3>
            <ul
              className="flex flex-col items-start"
              style={{ gap: "15px", padding: 0 }}
            >
              <li>
                <NavLink
                  to="/about-us"
                  className="text-gray-300 hover:text-[#0073bd] transition-colors hover:pl-2 duration-300"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/claim"
                  className="text-gray-300 hover:text-[#0073bd] transition-colors hover:pl-2 duration-300"
                >
                  How to Claim
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className="text-gray-300 hover:text-[#0073bd] transition-colors hover:pl-2 duration-300"
                >
                  Contact Support
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/privacy"
                  className="text-gray-300 hover:text-[#0073bd] transition-colors hover:pl-2 duration-300"
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/terms-condition"
                  className="text-gray-300 hover:text-[#0073bd] transition-colors hover:pl-2 duration-300"
                >
                 Terms & Conditions
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Insurance Products */}
          <div className="footer-col flex flex-col items-start text-left">
            <h3
              className="font-bold text-xl text-white block"
              style={{
                marginBottom: "25px",
                borderBottom: "2px solid #0073bd",
                paddingBottom: "5px",
                display: "inline-block",
              }}
            >
              Our Products
            </h3>
            <ul
              className="flex flex-col items-start"
              style={{ gap: "15px", padding: 0 }}
            >
              <li>
                <NavLink
                  to="/general_insurance"
                  className="text-gray-300 hover:text-[#0073bd] transition-colors hover:pl-2 duration-300"
                >
                  General Insurance
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/health_insurance"
                  className="text-gray-300 hover:text-[#0073bd] transition-colors hover:pl-2 duration-300"
                >
                  Health Insurance
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/vehicle_insurance"
                  className="text-gray-300 hover:text-[#0073bd] transition-colors hover:pl-2 duration-300"
                >
                  Vehicle Insurance
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col flex flex-col items-start text-left">
            <h3
              className="font-bold text-xl text-white block"
              style={{
                marginBottom: "25px",
                borderBottom: "2px solid #0073bd",
                paddingBottom: "5px",
                display: "inline-block",
              }}
            >
              Get in Touch
            </h3>

            <div
              className="flex items-start"
              style={{ marginBottom: "20px", gap: "15px" }}
            >
              <div
                className="bg-[#0073bd] rounded-full flex items-center justify-center"
                style={{ width: "35px", height: "35px", padding: "8px 10px" }}
              >
                <i className="ri-map-pin-line text-white text-sm"></i>
              </div>
              <div>
                <h5 className="font-bold text-white mb-1">Head Office</h5>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Office No. 1, 3rd Floor, Bhanushali Avenue,
                  <br />
                  Gandhidham – Kutch, 370201
                </p>
              </div>
            </div>

            <div
              className="flex items-start"
              style={{ marginBottom: "20px", gap: "15px" }}
            >
              <div
                className="bg-[#0073bd] p-2 rounded-full flex items-center justify-center"
                style={{ width: "35px", height: "35px" }}
              >
                <i className="ri-mail-send-line text-white text-sm"></i>
              </div>
              <div>
                <h5 className="font-bold text-white mb-1">Email Us</h5>
                <a
                  href="mailto:globsureinternational@gmail.com"
                  className="text-gray-300 hover:text-white text-xs w-fit"
                >
                  globsureinternational@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start" style={{ gap: "15px" }}>
              <div
                className="bg-[#0073bd] p-2 rounded-full flex items-center justify-center"
                style={{ width: "35px", height: "35px" }}
              >
                <i className="ri-phone-line text-white text-sm"></i>
              </div>
              <div>
                <h5 className="font-bold text-white mb-1">Call Us</h5>
                <h3 className="text-lg text-white"><a href="tel:9274741151">+91 9274741151</a></h3>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Bar */}
        <div
          className="newsletter-bar w-full rounded-md"
          style={{ backgroundColor: "#0073bd", padding: "20px 20px" }}
        >
          <div
            className="container mx-auto flex flex-col lg:flex-row items-center justify-between"
            style={{ gap: "30px" }}
          >
            {/* Left Text */}
            <div
              className="flex items-center w-full lg:w-auto justify-center lg:justify-start"
              style={{ gap: "20px" }}
            >
              <div
                className="bg-white text-[#0073bd] rounded-full items-center justify-center hidden md:flex"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="ri-mail-open-line text-xl"></i>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold">Subscribe to Newsletter</h3>
                <p className="text-sm text-blue-100 mt-1">
                  Stay updated with the latest insurance news.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-auto">
              <form
                className="email flex flex-col sm:flex-row items-center w-full"
                onSubmit={handleNewsletterSubmit}
                style={{ gap: "10px" }}
              >
                <input
                  className="bg-white text-black outline-none w-full sm:w-80"
                  style={{
                    padding: "10px 15px",
                    borderRadius: "50px",
                    border: "none",
                  }}
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={status.loading}
                  className="bg-[#002249] text-white font-bold hover:bg-black transition-all cursor-pointer w-full sm:w-auto"
                  style={{
                    padding: "10px 25px",
                    borderRadius: "50px",
                    border: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {status.loading ? "Sending..." : "Subscribe Now"}
                </button>
              </form>
              {status.msg && (
                <p
                  className={`mt-2 text-center lg:text-right text-sm ${
                    status.type === "success" ? "text-white" : "text-red-200"
                  }`}
                >
                  {status.msg}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className="footer-copyright"
          style={{
            backgroundColor: "#001a38",
            padding: "15px 20px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            className="container mx-auto flex flex-col md:flex-row items-center justify-between"
            style={{ gap: "15px" }}
          >
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-[#0073bd]">
                Globsure International
              </span>
              . All Rights Reserved.
            </p>

            <div className="text-sm text-gray-400 flex items-center gap-4">
              <NavLink to="/privacy" className="hover:text-white transition-colors">
                Privacy
              </NavLink>
              <NavLink to="terms-condition" className="hover:text-white transition-colors">
                Terms
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
