import React from "react";
import Card from "./Card";

const First_section = () => {
  return (
    <>
      <div
        style={{ padding: "50px 0", maxWidth: "1250px", margin: "auto" }}
        className="first_container flex justify-between "
      >
        <div className="img_container w-[50%] relative">
          <img
            className="rounded-lg w-[85%] h-full object-cover"
            src="src/assets/image/car bg2.jpg"
            alt=""
          />
        </div>
        <div className="company_detail w-[50%]">
          <h4 className="text-[#000000a6] text-[15px] font-thin">
            ABOUT THE GLOBSURE INTERNATIONAL
          </h4>
          <h2 className="text-[#002249] text-4xl font-semibold leading-11">
            Insurance Made Simple, Honest, Helpful
          </h2>
          <p
            style={{ padding: "10px 0" }}
            className="text-[#000000a6] text-[15px] font-thin"
          >
            We are the trusted insurance provider committed to providing peace
            of mind and financial security to individuals, families, and
            businesses. Our mission is to make insurance simple, accessible, and
            reliable for all those we serve. We are dedicated to ensuring
            customer satisfaction by protecting what matters most: your health,
            your vehicle, and your everyday life.
          </p>

          <h4 className="text-[#002249] text-lg font-bold">OUR CORE VALUES</h4>
          <ul>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px] list-disc"
            >
              <span className="text-[#002249] text-base">
                Trust & Integrity:
              </span>{" "}
              We believe in honest communication and ethical practices in every
              interaction.
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px] list-disc"
            >
              <span className="text-[#002249] text-base">Customer Focus:</span>{" "}
              Your needs come first. We listen, understand, and deliver
              solutions tailored to you.
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px] list-disc"
            >
              <span className="text-[#002249] text-base">Simplicity:</span> We
              make insurance easy to understand and hassle-free to manage.
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px] list-disc"
            >
              <span className="text-[#002249] text-base">Innovation:</span> We
              embrace new ideas and technology to improve our services and
              customer experience.
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px] list-disc"
            >
              <span className="text-[#002249] text-base">Community: </span>We
              are committed to supporting and protecting the communities we
              serve.
            </li>
          </ul>
        </div>
      </div>

      <div style={{ maxWidth: "1250px", margin: "auto" }} className="team_section">

        <div className="meet">
          <h2 className="text-[#000000a6] text-[15px]">
            MEET THE TEAM MEMBERS
          </h2>
          <h1 className="text-[#002249] leading-5">
            Get to know the passionate minds behind your protection! Our team is
            a dynamic mix of experienced professionals and enthusiastic problem
            solvers, united by a single purpose: helping you live with
            confidence. Every team member brings unique skills and fresh ideas
            to the table, creating an environment where innovation meets genuine
            care. 
          </h1>
        </div>

        <div className="team-card flex flex-wrap gap-x-28 gap-y-0">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </div>
    </>
  );
};

export default First_section;
