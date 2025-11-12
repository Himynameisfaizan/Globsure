import React from "react";
import "../../css/about_section.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import "swiper/css/effect-cards";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";
// import required modules
import { EffectCards } from "swiper/modules";
const text = "GLOBSURE INTERNATIONAL INSURANCE ";
const About_section = () => {
  return (
    <>
      <div className="about-parent">
        <div className="childs">
          <div className="child1">
            <div className="image">
              <img src="src/assets/image/life bg.jpg" alt="image" />
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
              <h2>Key Benefits</h2>
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

      <div className="linking">
        <div className="photo">
          <h3>
            Compare & get <br /> Your insurance in right way
          </h3>
        </div>
        <div className="button">
          <button>Get Explore</button>
        </div>
      </div>

      <div className="ranking">
        <div className="rank">
          <i class="ri-file-list-3-line"></i>
          <h3>3.65k </h3>
          <p>Gave insurances</p>
        </div>
        <div className="rank">
          <i class="ri-team-fill"></i>
          <h3>92 + </h3>
          <p>Professional team</p>
        </div>
        <div className="rank">
          <i class="ri-thumb-up-fill"></i>
          <h3>4.91 k </h3>
          <p>Satisfied customer</p>
        </div>
        <div className="rank">
          <i
            style={{ transform: "rotateY(180deg)" }}
            class="ri-building-2-fill"
          ></i>
          <h3>98% </h3>
          <p>Success rates</p>
        </div>
      </div>

      <div className="benefits">
        <div className="child1">
          <div className="image">
            <img src="src/assets/image/life bg.jpg" alt="" />
          </div>

          <div className="btn1">
            <i class="ri-verified-badge-fill"></i>
            <h2>
              Trusted insurance <br />
              service company
            </h2>
          </div>
        </div>

        <div className="child2">
          <div className="about-first">
            <h4>COMPANY'S BENEFIT</h4>
            <h2>Why Choose Globsure</h2>
            <h3>
              We know how important your loved ones and your business are to
              you. That’s why our insurance plans are designed to give you
              complete peace of mind—protecting your family’s future and
              securing your business from unexpected losses. With Globsure, you
              get trusted coverage, quick claims, and personal support every
              step of the way—so you can live and work with confidence.
            </h3>
          </div>
          <div className="about-second">
            <h1>Reliable Protection for Families and Businesses</h1>
            <ul>
              <li>
                <span>Wide Range of Policies:</span> Whether you want to protect
                your home, vehicle, business, or secure your health, we have the
                right policy for you.
              </li>
              <li>
                <span>Expert Team:</span>Our qualified agents guide you at every
                step, making insurance simple and transparent.
              </li>
              <li>
                <span>Simple Process:</span>We believe in hassle-free insurance
                with quick quotes and fast claim settlement.
              </li>
              <li>
                <span>Trusted by Customers:</span>Our commitment to quality and
                integrity has made us a preferred choice for thousands of
                families.
              </li>
            </ul>
            <div className="button">
              <button>Explore More</button>
            </div>
          </div>
          <div className="about-third"></div>
        </div>
      </div>

      <div className="member" >
        <div className="part1">
          <h4>OUR TEAM MEMBER</h4>
          <h1>Meet our professional team members</h1>
        </div>
        <div className="part2">
          <div className="info">
            <h1>Experienced & Dedicated Team Working For You</h1>
            <p>
              Our team is the backbone of Globsure International, bringing
              together experienced professionals who truly care about your
              protection. Every member understands the value of reliable support
              and works hard to make your insurance experience smooth and
              worry-free. From guiding you through options to settling claims
              quickly, our experts are dedicated to helping families and
              businesses feel secure every step of the way.
            </p>
            <h3>Key Points</h3>
            <ul>
              <li>
                Industry-certified professionals with years of insurance
                expertise.
              </li>
              <li>Friendly and approachable team focused on customer needs.</li>
              <li>
                Quick support and personalized solutions for every client.
              </li>
              <li>Commitment to transparency and trustworthy guidance.</li>
              <li>
                Continual training to stay updated with latest insurance trends.
                Description
              </li>
            </ul>
          </div>
          <div className="detail">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper second"
            >
              <SwiperSlide className="slide">
                <img src="src/assets/image/man.avif" alt="" />
                <div className="detail">
                  <h4>CONSULTANT</h4>
                  <h2>Dinesh patel</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="src/assets/image/man.avif" alt="" />
                <div className="detail">
                  <h4>CONSULTANT</h4>
                  <h2>Dinesh patel</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <img src="src/assets/image/man.avif" alt="" />
                <div className="detail">
                  <h4>CONSULTANT</h4>
                  <h2>Dinesh patel</h2>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="testimonals">
        <div className="part1">
          <h4>OUR TESTIMONALS</h4>
          <h1>
            What they're talking <br />
            about company
          </h1>
          <div className="icon">
            <i class="ri-team-fill"></i>
            <h3>
              We’re trusted by more then <br />
              <span>3800</span> satisfied & happy customers.
            </h3>
          </div>
        </div>
        <div className="part2">
          <Swiper
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            slidesPerView={2}
            navigation={true}
            modules={[Parallax]}
            className="mySwiper paraller"
          >
            <div
              slot="container-start"
              className="parallax-bg"
              data-swiper-parallax="-23%"
            ></div>

            <div className="carding">
              <SwiperSlide className="card-section">
                <div className="star" data-swiper-parallax="-200">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                </div>
                <div className="desc" data-swiper-parallax="-200">
                  <p>
                    Globsure ne mere car aur health insurance claims ko bahut
                    fast aur hassle-free banaya. Team bahut supportive hai!
                  </p>
                </div>
                <div className="image" data-swiper-parallax="-200">
                  <img src="src/assets/image/logo/logo.jpg" alt="logo" />
                  <h3>
                    Rahul S. <span>-From Delhi</span>
                  </h3>
                </div>
              </SwiperSlide>

              <SwiperSlide className="card-section">
                <div className="star" data-swiper-parallax="-200">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                </div>
                <div className="desc" data-swiper-parallax="-200">
                  <p>
                    Maine apni family ke liye health insurance liya Globsure se.
                    Transparent policies aur quick response ne mujhe impress
                    kiya
                  </p>
                </div>
                <div className="image" data-swiper-parallax="-200">
                  <img src="src/assets/image/logo/logo.jpg" alt="logo" />
                  <h3>
                    Priya M. <span>-From Banglor</span>
                  </h3>
                </div>
              </SwiperSlide>

              <SwiperSlide className="card-section">
                <div className="star" data-swiper-parallax="-200">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                </div>
                <div className="desc" data-swiper-parallax="-200">
                  <p>
                    Business insurance ke liye Globsure ko choose kiya kyunki
                    unka personalized approach aur customer service unmatched
                    hai.
                  </p>
                </div>
                <div className="image" data-swiper-parallax="-200">
                  <img src="src/assets/image/logo/logo.jpg" alt="logo" />
                  <h3>
                    Amit K. <span>-From Mumbai</span>
                  </h3>
                </div>
              </SwiperSlide>

              <SwiperSlide className="card-section">
                <div className="star" data-swiper-parallax="-200">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                </div>
                <div className="desc" data-swiper-parallax="-200">
                  <p>
                    Globsure International ki services par mujhe puri tarah
                    bharosa hai. Unhone meri insurance needs ko bahut achhi
                    tarah samjha
                  </p>
                </div>
                <div className="image" data-swiper-parallax="-200">
                  <img src="src/assets/image/logo/logo.jpg" alt="logo" />
                  <h3>
                    Sneha R. <span>-From Karnataka</span>
                  </h3>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>

      <div className="contact">
        <div className="svg">
          <div className="contact_detail">
            <div className="part1">
              <div className="info">
                <img src="src/assets/image/logo/logo2.png" alt="" />
                <h4>FREE QUOTE NOW</h4>
                <h2>
                  Get a insurance details <br /> to contact us
                </h2>
              </div>
              <div className="form">
                <div className="icons">
                  <div className="icon">
                    <i class="ri-home-7-fill"></i>
                    <h3>Home</h3>
                  </div>
                  <div className="icon">
                    <i class="ri-roadster-fill"></i>
                    <h3>Vehical</h3>
                  </div>
                  <div className="icon">
                    <i class="ri-heart-pulse-fill"></i>
                    <h3>Life</h3>
                  </div>
                  <div className="icon">
                    <i class="ri-briefcase-4-fill"></i>
                    <h3>Business</h3>
                  </div>
                </div>
                <div className="share">
                  <input
                    className="input"
                    type="text"
                    required
                    placeholder="Full name"
                  />
                  <br />
                  <input
                    className="input"
                    type="email"
                    required
                    placeholder="Email address"
                  />
                  <br />
                  <select className="input">
                    <option>Select insurance type</option>
                    <option>Health insurance</option>
                    <option>General insurance</option>
                    <option>Life insurance </option>
                    <option>Medical insurance</option>
                  </select>
                  <br />
                  <input
                    className="submit"
                    type="submit"
                    value={"Get Quoute"}
                  />
                </div>
              </div>
            </div>
            <div className="part2">
              <div className="circle">
                {Array.from(text).map((char, i) => (
                  <span key={i}
                    style={{
                      display: "inline-block",
                      transform: `rotate(-${i * 11}deg)`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
              <i class="ri-parent-fill"></i>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#eaeaf3"
              d="M0,288L60,282.7C120,277,240,267,360,224C480,181,600,107,720,96C840,85,960,139,1080,154.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="blog-section">
        <div className="blog-first">
          <h4>OUR BLOG</h4>
          <h2>Latest news & articles from the blog</h2>
        </div>
        <div className="blog-second">
          <Swiper
           
            slidesPerView={3}
            modules={[Scrollbar]}
            className="mySwiper blogs"
          >


            <SwiperSlide className="blogger">
              <div className="img">
                <img src="src/assets/image/man.avif" alt="image blog" />
              </div>
              <div className="blog-detail">
                <div className="date">
                  <span>7 NOV 2025</span>
                </div>
                <div className="info">
                  <div className="info-one">
                    <div className="info-icon">
                      <i class="ri-user-line"></i>
                      <p>By user</p>
                    </div>
                    <div className="info-icon">
                      <i class="ri-question-answer-line"></i>
                      <p>0 Comments</p>
                    </div>
                  </div>
                  <div className="info-two">
                    <h2>Protect Your Future with Smart Insurance Choices</h2>
                  </div>
                  <div className="info-three">
                    <h4>Read More</h4>
                    <i class="ri-arrow-right-long-fill"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="blogger">
              <div className="img">
                <img src="src/assets/image/man.avif" alt="image blog" />
              </div>
              <div className="blog-detail">
                <div className="date">
                  <span>7 NOV 2025</span>
                </div>
                <div className="info">
                  <div className="info-one">
                    <div className="info-icon">
                      <i class="ri-user-line"></i>
                      <p>By user</p>
                    </div>
                    <div className="info-icon">
                      <i class="ri-question-answer-line"></i>
                      <p>0 Comments</p>
                    </div>
                  </div>
                  <div className="info-two">
                    <h2>Protect Your Future with Smart Insurance Choices</h2>
                  </div>
                  <div className="info-three">
                    <h4>Read More</h4>
                    <i class="ri-arrow-right-long-fill"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="blogger">
              <div className="img">
                <img src="src/assets/image/man.avif" alt="image blog" />
              </div>
              <div className="blog-detail">
                <div className="date">
                  <span>7 NOV 2025</span>
                </div>
                <div className="info">
                  <div className="info-one">
                    <div className="info-icon">
                      <i class="ri-user-line"></i>
                      <p>By user</p>
                    </div>
                    <div className="info-icon">
                      <i class="ri-question-answer-line"></i>
                      <p>0 Comments</p>
                    </div>
                  </div>
                  <div className="info-two">
                    <h2>Protect Your Future with Smart Insurance Choices</h2>
                  </div>
                  <div className="info-three">
                    <h4>Read More</h4>
                    <i class="ri-arrow-right-long-fill"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="blogger">
              <div className="img">
                <img src="src/assets/image/man.avif" alt="image blog" />
              </div>
              <div className="blog-detail">
                <div className="date">
                  <span>7 NOV 2025</span>
                </div>
                <div className="info">
                  <div className="info-one">
                    <div className="info-icon">
                      <i class="ri-user-line"></i>
                      <p>By user</p>
                    </div>
                    <div className="info-icon">
                      <i class="ri-question-answer-line"></i>
                      <p>0 Comments</p>
                    </div>
                  </div>
                  <div className="info-two">
                    <h2>Protect Your Future with Smart Insurance Choices</h2>
                  </div>
                  <div className="info-three">
                    <h4>Read More</h4>
                    <i class="ri-arrow-right-long-fill"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="blogger">
              <div className="img">
                <img src="src/assets/image/man.avif" alt="image blog" />
              </div>
              <div className="blog-detail">
                <div className="date">
                  <span>7 NOV 2025</span>
                </div>
                <div className="info">
                  <div className="info-one">
                    <div className="info-icon">
                      <i class="ri-user-line"></i>
                      <p>By user</p>
                    </div>
                    <div className="info-icon">
                      <i class="ri-question-answer-line"></i>
                      <p>0 Comments</p>
                    </div>
                  </div>
                  <div className="info-two">
                    <h2>Protect Your Future with Smart Insurance Choices</h2>
                  </div>
                  <div className="info-three">
                    <h4>Read More</h4>
                    <i class="ri-arrow-right-long-fill"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default About_section;
