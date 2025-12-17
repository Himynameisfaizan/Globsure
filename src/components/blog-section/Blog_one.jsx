import React from "react";
import Landing_page from "../contact-page/Landing_page";
import Blog_contain from "./Blog_contain";

const Blog_one = () => {
  return (
    <>
      <Landing_page
        bg_image="/image/health2.jpg"
        landing_title={"Health-insurance-essential"}
      />

      <Blog_contain
      image={'/image/health_bg.jpg'}
        date="14 DEC 2025"
        admin="admin"
        title={" Why Health Insurance is Essential in 2025"}
        desc={`We live in an era where medical science has advanced significantly,
          but so has the cost of treatment. In 2025, relying solely on your
          savings to cover a medical emergency is a financial risk you simply
          cannot afford to take. Medical inflation is rising at double-digit
          rates in India, meaning a surgery that cost ₹1 Lakh a few years ago
          might cost ₹2 Lakhs today. Health insurance is no longer just a
          tax-saving tool; it is a fundamental necessity for every family. The
          biggest benefit is financial protection. A single hospitalization can
          wipe out years of hard-earned savings. With a comprehensive health
          insurance plan, your insurer takes care of the bills, allowing you to
          focus on recovery rather than worrying about finances. Moreover,
          modern lifestyle diseases like diabetes, hypertension, and heart
          issues are affecting younger people more than ever. Buying insurance
          early ensures you get coverage when you are healthy, avoiding waiting
          periods for pre-existing diseases later. 
            
         Key Takeaway: Don’t wait for
          an illness to strike. Secure your health and your wallet today. A
          small premium paid now can save you lakhs in the future.`}
      />
    </>
  );
};

export default Blog_one;
