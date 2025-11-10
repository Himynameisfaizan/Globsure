import React from "react";
import "../../css/about_section.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

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
            <img src="src/assets/image/car.jpg" alt="" />
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
            <img src="src/assets/image/logo/logo2.png" alt="logo" />
            <h4>COMPANY'S BENEFIT</h4>
            <h1>Reliable Protection for Families and Businesses</h1>
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
            <h2>Why Choose Globsure?</h2>
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

      <div className="member">
        <div className="part1">
          <img src="src/assets/image/logo/logo2.png" alt="logo" />
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
          <img src="src/assets/image/logo/logo.jpg" alt="logo" />
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
    </>
  );
};

export default About_section;
