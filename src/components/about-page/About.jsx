import React from "react";
import Landing_page from "../contact-page/Landing_page";
import landing_img from "../../assets/image/landing-page/aboutbg.jpg"
import First_section from "./First_section";

const About = () => {
  return (
    <>
      <Landing_page bg_image={landing_img} landing_title={"About Us"} />
      <First_section />
    </>
  );
};

export default About;
