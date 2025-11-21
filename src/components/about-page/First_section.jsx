import React from "react";
import Card from "./Card";
import Icondiv from "./Icondiv";

const First_section = () => {
  return (
    <>
      <div className="first_container flex justify-between" style={{ padding: "50px 0", maxWidth: "1250px", margin: "auto" }}>
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
      
      <div className="origin-section w-full flex" style={{maxWidth:"1250px", margin:'auto'}}>
        <div className="right w-1/2 flex flex-col gap-2">
          <h4 className="text-[#002249] text-3xl font-semibold">OUR ORIGIN</h4>
          <p className="text-[15px] text-[#000000a6] text-justify" style={{padding:'10px 0'}}>With the vision to simplify and improve the way people experience insurance, our company started as a small but highly committed and caring team. Our growth over the years is a direct result of listening to our customers' needs, adapting to new challenges, and offering dependable protection through each stage of life.​</p>
          <img className="rounded-lg" src="src/assets/image/landing-page/aboutbg1.jpg" alt="" />
        </div>
        <div className="left w-1/2 flex flex-col gap-5 justify-end">
          <Icondiv svg={'src/assets/svg/startup-rocket-svgrepo-com.svg'} title={'Our mision'} desc={'Our mission is to provide practical insurance solutions that safeguard your future while making each interaction friendly, clear, and supportive. Every day, we work to help individuals and families achieve peace of mind in the knowledge that expert help is always close by.'}/>

          <Icondiv svg={'src/assets/svg/idea-svgrepo-com.svg'} title={'Our vision'} desc={'We are committed to leading in honest and innovative insurance services at all times, while bringing timely solutions, transparent advice, and responsive support. Our vision is that of a world where everyone feels secure and confident, free from the concern of carrying any unexpected financial burdens.'} />

          <Icondiv svg={'src/assets/svg/achivement-mission-sport-svgrepo-com.svg'} title={'Our achivement'} desc={'We are proud of the trust built with thousands of satisfied customers. Our achievements include industry recognition for quality service, a steady growth in clients, and successful partnerships in our community. Every milestone reflects our dedication and the genuine relationships we have created along the way.'} />
  
        </div>
      </div>

      <div className="team_section" style={{ maxWidth: "1250px", margin: "50px auto" }} >

        <div className="meet">
          <h2 className="text-[#000000a6] text-[15px] text-center">
            GLOBSURE INTERNATIONAL SECURE WITH GLOBSURE
          </h2>
          <h1 className="text-[#002249] text-5xl font-semibold text-center leading-14" style={{padding:'10px 0'}}>
          Meet the Leaders and  <br /> Talent Behind Our Brand
          </h1>
        </div>

        <div className="team-card flex flex-wrap gap-10">
            <Card teamName={'Yashika muchal'} teamPosition={'Co - founder'} image={'src/assets/image/man.avif'}/>
            <Card teamName={'Hitesh Pathak'} teamPosition={'Director'} image={'src/assets/image/office-team/office.avif'}/>
            <Card teamName={'Ishika Deewan'} teamPosition={'Finance Manager'} image={'src/assets/image/office-team/office4.jpg'}/>
            <Card teamName={'Rahul Kumar'} teamPosition={'Human Resource'} image={'src/assets/image/office-team/office2.jpg'}/>
        </div>
      </div>


    </>
  );
};

export default First_section;
