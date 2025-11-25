import React from "react";
import ClaimGuidelines from "./ClaimGuidelines";

const Content_part = () => {
  return (
    <>

      <div className="first_container flex" style={{ padding: "50px 0", maxWidth: "1250px", margin: "auto" }} >
        <div className="img_container w-[50%] relative">
          <img
            className="rounded-lg w-[85%] h-full object-cover"
            src="/image/landing-page/claimbg.jpg"
            alt=""
          />
        </div>
        <div className="company_detail w-[50%]">
          <h4 className="text-[#000000a6] text-[15px] font-thin">
            SIMPLE & FAST CLAIM PROCES
          </h4>
          <h2 className="text-[#002249] text-2xl" style={{padding:'5px 0'}}>
            We are here to support you when you need us the most. Follow these 4
            easy steps to settle your claim.
          </h2>

          <h4 className="text-[#0073bd] text-lg font-bold" style={{letterSpacing: "1px" }} >STEPS:</h4>
          <ul>
            <li style={{ padding: "5px 0" }} className="text-[#000000a6] text-[15px] list-disc" ><span className="text-[#002249] text-base">Intimation:</span>{" "}Immediately inform our support team via call or email within 24hours of the incident. </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px] list-disc"
            >
              <span className="text-[#002249] text-base">Documentation:</span>{" "}
              Fill out the claim form and gather the required documents listed
              in our guidelines.
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px] list-disc"
            >
              <span className="text-[#002249] text-base">Verification:</span>{" "}
              Our surveyor or TPA (Third Party Administrator) will verify the
              documents and assess the damage/hospitalization.
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px] list-disc"
            >
              <span className="text-[#002249] text-base">Settlement:</span> Once
              approved, the claim amount will be transferred directly to your
              account or the network hospital.
            </li>
          </ul>
        </div>
      </div>

      <ClaimGuidelines />
    </>
  );
};

export default Content_part;
