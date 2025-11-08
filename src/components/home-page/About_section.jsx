import React from "react";
import "../../css/about_section.css";

const About_section = () => {
  return (
    <>
      <div className="about-parent">
        <div className="childs">
          <div className="child1">
            <div className="image">
              <img src="src/assets/image/life1.avif" alt="" />
            </div>

            <div className="btn">
              <h1>30</h1>
              <h2>
                Years <br />
                of experience
              </h2>
            </div>
          </div>

          <div className="child2">
            <div className="about-first">
              <img src="src/assets/image/logo/logo2.png" alt="logo" />
              <h4>ABOUT GLOBSURE INTERNATIONAL</h4>
              <h1>Welcome to Globsure International Secure with Globsure</h1>
              <h3>
                your trusted partner in insurance. With decades of expertise,
                our mission is to help people and businesses feel secure,
                protected, and confident about their future. Founded with a
                passion for serving communities, Globsure International
                specializes in both general insurance and health insurance
                solutions for families, individuals, and organizations.
              </h3>
            </div>
            <div className="about-second">
              <h2>Why Choose Globsure?</h2>
              <ul>
                <li>
                  <span>Wide Range of Policies:</span> Whether you want to
                  protect your home, vehicle, business, or secure your health,
                  we have the right policy for you.
                </li>
                <li>
                  <span>Expert Team:</span>Our qualified agents guide you at
                  every step, making insurance simple and transparent.
                </li>
                <li>
                  <span>Simple Process:</span>We believe in hassle-free
                  insurance with quick quotes and fast claim settlement.
                </li>
                <li>
                  <span>Trusted by Customers:</span>Our commitment to quality
                  and integrity has made us a preferred choice for thousands of
                  families.
                </li>
              </ul>
              <div className="button">
                <button>Explore More</button>
                <div className="card">
                  <i class="ri-hand-heart-line"></i>
                  <span>
                    Trusted By <br />
                    Customer
                  </span>
                </div>
              </div>
            </div>
            <div className="about-third"></div>
          </div>
        </div>

        <div className="child3">
          <div className="plan">
            <div className="voucher">
              <i class="ri-money-rupee-circle-line"></i>
            </div>
            <div className="content">
              <h3>General Insurance</h3>
              <p>
                Motor, property, travel, cyber, and more – we cover what matters
                most to you.
              </p>
            </div>
          </div>
          <div className="plan">
            <div className="voucher">
              <i class="ri-heart-pulse-line"></i>
            </div>
            <div className="content">
              <h3>Health Insurance</h3>
              <p>
                Comprehensive health plans for individuals and families to
                ensure best medical care when you need it.
              </p>
            </div>
          </div>
          <div className="plan">
            <div className="voucher">
              <i class="ri-roadster-line"></i>
            </div>
            <div className="content">
              <h3>Travel insurance</h3>
              <p>
                Coverage for medical emergencies, trip cancellations, and
                baggage loss during travel for complete protection.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="offering">
        <div className="part-one">
          <img src="src/assets/image/logo/logo.jpg" alt="" />
          <h4>What We're Offering</h4>
          <h2>
            Complete Insurance Solutions for Every Family and Business Need
          </h2>
        </div>
        <div className="part-two">
          <div className="part-card">
            <div className="front">
              <i class="ri-bus-wifi-line"></i>
              <h3>Travel insurance</h3>
              <p>
                Enjoy your journeys worry-free with plans that cover medical
                emergencies, lost baggage, and trip cancellations.
              </p>
            </div>
            <div className="back">
              <i class="ri-bus-wifi-line"></i>
              <h3>Travel insurance</h3>
              <p>
                Enjoy your journeys worry-free with plans that cover medical
                emergencies, lost baggage, and trip cancellations.
              </p>
            </div>
          </div>
          <div className="part-card">
            <div className="front">
              <i class="ri-roadster-line"></i>
              <h3>Car insurance</h3>
              <p>
                Protect your vehicle from accidents, theft, and damages with our
                comprehensive car insurance plans.
              </p>
            </div>
            <div className="back">
              <i class="ri-roadster-line"></i>
              <h3>Car insurance</h3>
              <p>
                Protect your vehicle from accidents, theft, and damages with our
                comprehensive car insurance plans.
              </p>
            </div>
          </div>
          <div className="part-card">
            <div className="front">
              <i class="ri-team-line"></i>
              <h3>Life insurance</h3>
              <p>
                Secure your family’s future by choosing a life insurance policy
                tailored for long-term peace of mind.
              </p>
            </div>
            <div className="back">
              <i class="ri-team-line"></i>
              <h3>Life insurance</h3>
              <p>
                Secure your family’s future by choosing a life insurance policy
                tailored for long-term peace of mind.
              </p>
            </div>
          </div>
          <div className="part-card">
            <div className="front">
              <i class="ri-heart-pulse-line"></i>
              <h3>Health insurance</h3>
              <p>
                Get access to the best medical care with our health plans
                covering hospitalization, critical illnesses, and more.
              </p>
            </div>
            <div className="back">
              <i class="ri-heart-pulse-line"></i>
              <h3>Health insurance</h3>
              <p>
                Get access to the best medical care with our health plans
                covering hospitalization, critical illnesses, and more.
              </p>
            </div>
          </div>
          <div className="part-card">
            <div className="front">
              <i class="ri-briefcase-line"></i>
              <h3>Business insurance</h3>
              <p>
                Keep your business protected from financial risks, property
                loss, and legal liabilities.
              </p>
            </div>
            <div className="back">
              <i class="ri-briefcase-line"></i>
              <h3>Business insurance</h3>
              <p>
                Keep your business protected from financial risks, property
                loss, and legal liabilities.
              </p>
            </div>
          </div>
        </div>
        <div className="part-three"></div>
      </div>
    </>
  );
};

export default About_section;
