import React from "react";
import "../../css/about_section.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/scrollbar";

// import required modules
import { Autoplay, Scrollbar } from "swiper/modules";
// import required modules
import { EffectCards } from "swiper/modules";
const text = "GLOBSURE INTERNATIONAL INSURANCE ";
const About_section = () => {
  return (
    <>
      <div className="parent-container">
        <div className="about-parent">
          <div className="childs">
            <div className="child1">
              <div className="image">
                <img src="src/assets/image/life bg.jpg" alt="image" />
              </div>

              <div className="btn">
                <div className="icon">
                  <i class="ri-verified-badge-fill"></i>
                </div>
                <h3>
                  We Secure Your Dreams With{" "}
                  <span> Unwavering Commitment.</span>
                </h3>
              </div>
            </div>

            <div className="child2">
              <div className="about-first">
                <h4 className="text-[15px] text-[#000000a6] tracking-widest font-medium p-8">
                  ABOUT GLOBSURE INTERNATIONAL
                </h4>
                <h1 className="text-4xl text-[#002249] font-bold ">
                  Welcome to Globsure International Secure with Globsure
                </h1>
                <h3 className="text-[15px] leading-5.5 font-thin text-[#000000a6]">
                  your trusted partner in insurance. With decades of expertise,
                  our mission is to help people and businesses feel secure,
                  protected, and confident about their future. Founded with a
                  passion for serving communities, Globsure International
                  specializes in both general insurance and health insurance
                  solutions for families, individuals, and organizations.
                </h3>
              </div>
              <div className="about-second">
                <h2 className="text-2xl text-[#002249] font-bold">
                  Key Benefits
                </h2>
                <ul>
                  <li className="text-[#000000a6] font-light list-disc text-[15px] leading-6">
                    <span>Wide Range of Policies:</span> Whether you want to
                    protect your home, vehicle, business, or secure your health,
                    we have the right policy for you.
                  </li>
                  <li className="text-[#000000a6] font-light list-disc text-[15px] leading-6">
                    <span>Expert Team:</span>Our qualified agents guide you at
                    every step, making insurance simple and transparent.
                  </li>
                  <li className="text-[#000000a6] font-light list-disc text-[15px] leading-6">
                    <span>Simple Process:</span>We believe in hassle-free
                    insurance with quick quotes and fast claim settlement.
                  </li>
                  <li className="text-[#000000a6] font-light list-disc text-[15px] leading-6">
                    <span>Trusted by Customers:</span>Our commitment to quality
                    and integrity has made us a preferred choice for thousands
                    of families.
                  </li>
                </ul>
                <div className="button flex justify-between items-center h-[15vh]">
                  <button
                    className="bg-[#002249] hover:bg-[#0073bd] text-white text-[18px] outline-0 border-0 rounded cursor-pointer 
                transition duration-700  ease-in-out"
                  >
                    Explore More
                  </button>

                  <div
                    className="card flex items-center border-t-[#002249] border-t-[5px] border-solid rounded shadow-[0px_0px_4px_#b87979] 
                transition ease-in-out duration-200 flex-col mr-[100px]"
                  >
                    <i className="ri-hand-heart-line text-[30px] text-[#002249]"></i>
                    <span className="text-[15px] text-[#002249]">
                      Trusted By <br />
                      Customer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="child3 mx-w-[1250px] mx-auto flex items-center justify-around h-[50vh] relative">
            <div className="plan">
              <div className="voucher">
                <i class="ri-money-rupee-circle-line"></i>
              </div>
              <div className="content">
                <h3>General Insurance</h3>
                <p>
                  Motor, property, travel, cyber, and more – we cover what
                  matters most to you.
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

        <div className="offering mx-w-[1300px] mx-auto min-h-[60vh]">
          <div className="part-one flex justify-center items-center flex-col h-full">
            <h4 className="text-[#00000083]">What We're Offering</h4>
            <h2 className="text-[35px] text-center w-[50%] leading-10 text-[#002249]">
              Complete Insurance Solutions for Every Family and Business Need
            </h2>
          </div>
          <div className="part-two flex felx-row gap-[25px] w-full h-full">
            <div
              className="part-card h-[200px] w-[250px] transform-3d flex border border-solid border-[#ffc0cb52] bg-white cursor-pointer
          rounded-2xl transition-all duration-1000"
            >
              <div className="front">
                <i className="ri-bus-wifi-line"></i>
                <h3 className="text-xl font-medium">Travel insurance</h3>
                <p className="text-sm leading-4 space-x-0">
                  Enjoy your journeys worry-free with plans that cover medical
                  emergencies, lost baggage, and trip cancellations.
                </p>
              </div>
              <div className="back">
                <i class="ri-bus-wifi-line"></i>
                <h3 className="text-xl font-medium">Travel insurance</h3>
                <p className="text-sm leading-4 space-x-0">
                  Enjoy your journeys worry-free with plans that cover medical
                  emergencies, lost baggage, and trip cancellations.
                </p>
              </div>
            </div>
            <div
              className="part-card h-[200px] w-[250px] transform-3d flex border border-solid border-[#ffc0cb52] bg-white cursor-pointer
          rounded-2xl transition-all duration-1000"
            >
              <div className="front">
                <i class="ri-roadster-line"></i>
                <h3 className="text-xl font-medium">Car insurance</h3>
                <p className="text-sm leading-4 space-x-0">
                  Protect your vehicle from accidents, theft, and damages with
                  our comprehensive car insurance plans.
                </p>
              </div>
              <div className="back">
                <i class="ri-roadster-line"></i>
                <h3 className="text-xl font-medium">Car insurance</h3>
                <p className="text-sm leading-4 space-x-0">
                  Protect your vehicle from accidents, theft, and damages with
                  our comprehensive car insurance plans.
                </p>
              </div>
            </div>
            <div
              className="part-card h-[200px] w-[250px] transform-3d flex border border-solid border-[#ffc0cb52] bg-white cursor-pointer
          rounded-2xl transition-all duration-1000"
            >
              <div className="front">
                <i class="ri-team-line"></i>
                <h3 className="text-xl font-medium">Life insurance</h3>
                <p className="text-sm leading-4 space-x-0">
                  Secure your family’s future by choosing a life insurance
                  policy tailored for long-term peace of mind.
                </p>
              </div>
              <div className="back">
                <i class="ri-team-line"></i>
                <h3 className="text-xl font-medium">Life insurance</h3>
                <p className="text-sm leading-4 space-x-0">
                  Secure your family’s future by choosing a life insurance
                  policy tailored for long-term peace of mind.
                </p>
              </div>
            </div>
            <div
              className="part-card h-[200px] w-[250px] transform-3d flex border border-solid border-[#ffc0cb52] bg-white cursor-pointer
          rounded-2xl transition-all duration-1000"
            >
              <div className="front">
                <i class="ri-heart-pulse-line"></i>
                <h3 className="text-xl font-medium">Health insurance</h3>
                <p className="text-sm leading-4 space-x-0">
                  Get access to the best medical care with our health plans
                  covering hospitalization, critical illnesses, and more.
                </p>
              </div>
              <div className="back">
                <i class="ri-heart-pulse-line"></i>
                <h3 className="text-xl font-medium">Health insurance</h3>
                <p className="text-sm leading-4 space-x-0">
                  Get access to the best medical care with our health plans
                  covering hospitalization, critical illnesses, and more.
                </p>
              </div>
            </div>
            <div
              className="part-card h-[200px] w-[250px] transform-3d flex border border-solid border-[#ffc0cb52] bg-white cursor-pointer
          rounded-2xl transition-all duration-1000"
            >
              <div className="front">
                <i class="ri-briefcase-line"></i>
                <h3 className="text-xl font-medium">Business insurance</h3>
                <p className="text-sm leading-4 space-x-0">
                  Keep your business protected from financial risks, property
                  loss, and legal liabilities.
                </p>
              </div>
              <div className="back">
                <i class="ri-briefcase-line"></i>
                <h3 className="text-xl font-medium">Business insurance</h3>
                <p className="text-sm leading-4 space-x-0">
                  Keep your business protected from financial risks, property
                  loss, and legal liabilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="linking bg-[#002249] flex w-[70%]  h-[20vh] relative rounded-[80px]">
          <div className="photo w-[80%] rounded-[80px] flex items-center justify-start">
            <h3 className="font-black text-[22px] tracking-[0.5px]">
              Compare & get <br /> Your insurance in right way
            </h3>
          </div>
          <div className="button absolute top-1/5 right-1/10">
            <button className="bg-[#0073bd] rounded-4xl text-white hover:bg-[#002249] duration-300 cursor-pointer">
              Get Explore
            </button>
          </div>
        </div>

        <div className="ranking w-full h-[50vh] flex items-center justify-around">
          <div className="rank flex flex-col items-center justify-center">
            <i className="ri-file-list-3-line bg-white rounded-[50%] text-4xl border-6 duration-150 cursor-pointer"></i>
            <h3 className="text-4xl text-white font-extrabold">3.65k </h3>
            <p className="text-lg text-white">Gave insurances</p>
          </div>
          <div className="rank flex flex-col items-center justify-center">
            <i className="ri-team-fill bg-white rounded-[50%] text-4xl border-6 duration-150 cursor-pointer"></i>
            <h3 className="text-4xl text-white font-extrabold">92 + </h3>
            <p className="text-lg text-white">Professional team</p>
          </div>
          <div className="rank flex flex-col items-center justify-center">
            <i className="ri-thumb-up-fill bg-white rounded-[50%] text-4xl border-6 duration-150 cursor-pointer"></i>
            <h3 className="text-4xl text-white font-extrabold">4.91 k </h3>
            <p className="text-lg text-white">Satisfied customer</p>
          </div>
          <div className="rank flex flex-col items-center justify-center">
            <i
              style={{ transform: "rotateY(180deg)" }}
              className="ri-building-2-fill bg-white rounded-[50%] text-4xl border-6 duration-150 cursor-pointer"
            ></i>
            <h3 className="text-4xl text-white font-extrabold">98% </h3>
            <p className="text-lg text-white">Success rates</p>
          </div>
        </div>

        <div className="benefits flex items-center h-screen">
          <div className="child1 relative">
            <div className="image">
              <img src="src/assets/image/car bg2.jpg" alt="benefit" />
            </div>

            <div className="btn1 absolute bottom-2/10 right-16 w-[70%]">
              <i className="ri-verified-badge-fill text-6xl bg-white absolute"></i>
              <h2 className="text-2xl text-white">
                Trusted insurance <br />
                service company
              </h2>
            </div>
          </div>

          <div className="child2">
            <div className="about-first">
              <h4 className="text-[15px] text-[#000000a6] tracking-widest font-medium">
                COMPANY'S BENEFIT
              </h4>
              <h2 className="text-2xl text-[#002249] font-bold">
                Why Choose Globsure
              </h2>
              <h3 className="text-[15px] text- leading-5.5 font-thin text-[#000000a6]">
                We know how important your loved ones and your business are to
                you. That’s why our insurance plans are designed to give you
                complete peace of mind—protecting your family’s future and
                securing your business from unexpected losses. With Globsure,
                you get trusted coverage, quick claims, and personal support
                every step of the way—so you can live and work with confidence.
              </h3>
            </div>
            <div className="about-second">
              <h1 className="text-3xl text-[#002249] font-bold ">
                Reliable Protection for Families and Businesses
              </h1>
              <ul>
                <li className="text-[#000000a6] font-light list-disc text-[15px] leading-6">
                  <span>Wide Range of Policies:</span> Whether you want to
                  protect your home, vehicle, business, or secure your health,
                  we have the right policy for you.
                </li>
                <li className="text-[#000000a6] font-light list-disc text-[15px] leading-6">
                  <span>Expert Team:</span>Our qualified agents guide you at
                  every step, making insurance simple and transparent.
                </li>
                <li className="text-[#000000a6] font-light list-disc text-[15px] leading-6">
                  <span>Simple Process:</span>We believe in hassle-free
                  insurance with quick quotes and fast claim settlement.
                </li>
                <li className="text-[#000000a6] font-light list-disc text-[15px] leading-6">
                  <span>Trusted by Customers:</span>Our commitment to quality
                  and integrity has made us a preferred choice for thousands of
                  families.
                </li>
              </ul>
              <div className="button">
                <button className="bg-[#002249] hover:bg-[#0073bd] text-white text-[18px] outline-0 border-0 rounded cursor-pointer 
                transition duration-700  ease-in-out">Explore More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="member flex flex-col items-center h-[95vh]">
          <div className="part1 flex flex-col items-center">
            <h4 className="text-[#0000007c] leading-0.5">OUR TEAM MEMBERS</h4>
            <h1 className="text-[#002249] text-4xl">Meet our professional team members</h1>
          </div>
          <div className="part2 flex items-center w-full h-[80%] gap-4">
            <div className="info w-[60%]">
              <h1 className="text-[#002249] text-3xl">Experienced & Dedicated Team Working For You</h1>
              <p className="text-[15px] text- leading-5.5 font-thin text-[#000000a6]">
                Our team is the backbone of Globsure International, bringing
                together experienced professionals who truly care about your
                protection. Every member understands the value of reliable
                support and works hard to make your insurance experience smooth
                and worry-free. From guiding you through options to settling
                claims quickly, our experts are dedicated to helping families
                and businesses feel secure every step of the way.
              </p>
              <h3 className="text-2xl text-[#002249] font-bold">Key Points</h3>
              <ul>
                <li className="text-[#000000a6] font-light list-disc text-[15px] leading-7">
                  Industry-certified professionals with years of insurance
                  expertise.
                </li>
                <li className="text-[#000000a6] font-light list-disc text-[15px] leading-7">
                  Friendly and approachable team focused on customer needs.
                </li>
                <li className="text-[#000000a6] font-light list-disc text-[15px] leading-7">
                  Quick support and personalized solutions for every client.
                </li>
                <li className="text-[#000000a6] font-light list-disc text-[15px] leading-7">Commitment to transparency and trustworthy guidance.</li>
                <li className="text-[#000000a6] font-light list-disc text-[15px] leading-7">
                  Continual training to stay updated with latest insurance
                  trends. Description
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
                    <h4 className="text-[15px] text-[#ffffffaf]">CONSULTANT</h4>
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

        <div className="testimonals flex items-center h-[60vh]">
          <div className="part1 flex flex-col justify-center w-3/5 h-full">
            <h4 className="text-[15px] text-[#00000073]">OUR TESTIMONALS</h4>
            <h1 className="text-4xl text-[#002249] font-semibold">
              What they're talking <br />
              about company
            </h1>
            <div className="icon flex items-center">
              <i className="ri-team-fill bg-[#002249] duration-300 hover:bg-[#0073bd] text-4xl"></i>
              <h3 className="text-[#0073bd]"> 
                We’re trusted by more then <br />
                <span className="text-[#002249] font-semibold">3800</span> satisfied & happy customers.
              </h3>
            </div>
          </div>
          <div className="part2">
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="testimonal-container"
            >
              <SwiperSlide className="testimonal-slider">
                <div className="clip-path"></div>
                <div className="testimonal-content">
                  <div className="para">
                    <div className="star">
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illum vitae ipsam amet quam dolor labore sint repellat
                      similique optio eum!
                    </p>
                  </div>
                  <div className="detail">
                    <div className="img">
                      <img src="src/assets/image/man.avif" alt="" />
                    </div>
                    <div className="info">
                      <h2>Dinesh Patel</h2>
                      <p>Manager</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="testimonal-slider">
                <div className="clip-path"></div>
                <div className="testimonal-content">
                  <div className="para">
                    <div className="star">
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illum vitae ipsam amet quam dolor labore sint repellat
                      similique optio eum!
                    </p>
                  </div>
                  <div className="detail">
                    <div className="img">
                      <img src="src/assets/image/man.avif" alt="" />
                    </div>
                    <div className="info">
                      <h2>Rahul Pandey</h2>
                      <p>Manager</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="testimonal-slider">
                <div className="clip-path"></div>
                <div className="testimonal-content">
                  <div className="para">
                    <div className="star">
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illum vitae ipsam amet quam dolor labore sint repellat
                      similique optio eum!
                    </p>
                  </div>
                  <div className="detail">
                    <div className="img">
                      <img src="src/assets/image/man.avif" alt="" />
                    </div>
                    <div className="info">
                      <h2>Hitesh Kumar</h2>
                      <p>Manager</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="testimonal-slider">
                <div className="clip-path"></div>
                <div className="testimonal-content">
                  <div className="para">
                    <div className="star">
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illum vitae ipsam amet quam dolor labore sint repellat
                      similique optio eum!
                    </p>
                  </div>
                  <div className="detail">
                    <div className="img">
                      <img src="src/assets/image/man.avif" alt="" />
                    </div>
                    <div className="info">
                      <h2>Manish Sharma</h2>
                      <p>Manager</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="contact">
          <div className="svg">
            <div className="contact_detail">
              <div className="part1">
                <div className="info">
                  <h4 className="text-[#00000065] text-[15px]">FREE QUOTE NOW</h4>
                  <h2 className="text-[#002249] text-[40px] leading-10 font-semibold">
                    Get a insurance details <br /> to contact us
                  </h2>
                </div>
                <div className="form flex w-full">
                  <div className="icons flex flex-col w-3/10">
                    <div className="icon">
                      <i className="ri-home-7-fill bg-[#002249] rounded-[50%]"></i>
                      <h3>Home</h3>
                    </div>
                    <div className="icon">
                      <i className="ri-roadster-fill bg-[#002249] rounded-[50%]"></i>
                      <h3>Vehical</h3>
                    </div>
                    <div className="icon">
                      <i className="ri-heart-pulse-fill bg-[#002249] rounded-[50%]"></i>
                      <h3>Life</h3>
                    </div>
                    <div className="icon">
                      <i className="ri-briefcase-4-fill bg-[#002249] rounded-[50%]"></i>
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
                    <span
                      key={i}
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
          <div className="blog-first w-full h-1/5 text-center">
            <h4 className="text-[15px] text-[#00000094] ">OUR BLOG</h4>
            <h2 className="text-4xl text-[#002249]">Latest news & articles from the blog</h2>
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
      </div>
    </>
  );
};

export default About_section;
