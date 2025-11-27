import React from "react";
import Guidlines from "./Guidlines";

const Content_part = () => {
  const ClaimGuidlines = [
    {
      id: "1",
      svg: "/svg/car.svg",
      svgTitle: "Vehicle Insurance",
      content: {
        guidLinesTitle: "Documents for Vehicle Claim",
        point1: "Copy of Driving License and RC.",
        point2: "FIR Copy (in case of theft/major accident)..",
        point3: "Photos of the damaged vehicle.",
        point4: "Original Repair Invoice.",
      },
    },

    {
      id: "2",
      svg: "/svg/health.svg",
      svgTitle: "Health Insurance",
      content: {
        guidLinesTitle: "Documents for Health Claim",
        point1: "Discharge Summary from the Hospital.",
        point2: "Original Hospital Bills and Prescriptions.",
        point3: "Valid ID Proof and Policy Document.",
        point4: "Diagnostic Reports (Blood test, X-ray, etc).",
      },
    },

    {
      id: "3",
      svg: "/svg/general.svg",
      svgTitle: "General Insurance",
      content: {
        guidLinesTitle: "Documents for General Claim",
        point1: "Proof of ownership of damaged items.",
        point2: "Fire Brigade Report (if applicable).",
        point3: "Repair estimates from authorized vendor.",
        point4: "List of stolen or damaged goods.",
      },
    },
  ];
  return (
    <>
      <div
        className="first_container flex"
        style={{ padding: "50px 0", maxWidth: "1250px", margin: "auto" }}
      >
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
          <h2
            className="text-[#002249] text-3xl font-semibold"
            style={{ padding: "5px 0" }}
          >
            We are here to support you when you need us the most. Follow these 4
            easy steps to settle your claim.
          </h2>

          <h4
            className="text-[#0073bd] text-lg font-bold"
            style={{ letterSpacing: "1px" }}
          >
            STEPS:
          </h4>
          <ul>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px] list-disc"
            >
              <span className="text-[#002249] text-base">Intimation:</span>{" "}
              Immediately inform our support team via call or email within
              24hours of the incident.{" "}
            </li>
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

      <div
        className="guidlines"
        style={{ maxWidth: "1250px", margin: "20px auto" }}
      >
        <h2 className="text-[#000000a6] text-center">
          CLAIM GUIDLINES BY CATEGORY
        </h2>
        <h1
          className="text-[#002249] text-3xl text-center font-semibold m-[50px]"
          style={{ padding: "5px 0" }}
        >
          Select your insurance type to see specific
          <br /> document requirements.
        </h1>
        <Guidlines ClaimData={ClaimGuidlines} />
      </div>

      <div className="" style={{ maxWidth: "1250px", margin: "auto" }}>
        <h2 className="text-[#000000a6] text-center">Download Claim Forms</h2>
        <h2
          className="text-[#002249] text-3xl font-semibold w-155 text-center"
          style={{ margin: "auto", padding: "5px 0" }}
        >
          Download the relevant claim form, fill it out physically, and mail it
          to our registered office or upload it via email
        </h2>

        <div
          className="flex items-center justify-around"
          style={{ margin: "30px 0" }}
        >
          <div className="w-1/3">
            <h2
              className="bg-[#0073bd26] text-lg text-[#002249]"
              style={{ padding: "20px" }}
            >
              Claims Insurance
            </h2>
            <h2
              className="bg-[#0073bd16] text-[#000000a6] border-t border-b border-[#00224962] flex items-center gap-10"
              style={{ padding: "10px 20px" }}
            >
              Vehical Insurance{" "}
              <img className="w-15" src="/svg/car.svg" alt="" />
            </h2>
            <h2
              className="bg-[#0073bd16] text-[#000000a6] border-b border-[#00224962] flex items-center gap-10"
              style={{ padding: "10px 20px" }}
            >
              Health Insurance{" "}
              <img className="w-15" src="/svg/health.svg" alt="" />
            </h2>
            <h2
              className="bg-[#0073bd16] text-[#000000a6] border-b border-[#00224962] flex items-center gap-10"
              style={{ padding: "10px 20px" }}
            >
              General Insurance{" "}
              <img className="w-15" src="/svg/general.svg" alt="" />
            </h2>
          </div>
          <div className="w-2/3">
            <h2
              className="bg-[#0073bd26] text-lg text-[#002249] border-l border-[#00224962] text-center"
              style={{ padding: "20px" }}
            >
              Download Form
            </h2>
            <h2
              className="bg-[#0073bd16] text-[#000000a6] border-l border-t border-b border-[#00224962] flex items-center justify-center gap-5"
              style={{ padding: "20px" }}
            >
              {" "}
              <a href="#">
                <img
                  className="w-10"
                  src="/svg/pdf.svg"
                  alt="vehical insurance form"
                />
              </a>{" "}
            </h2>
            <h2
              className="bg-[#0073bd16] text-[#000000a6] border-l border-b border-[#00224962] flex items-center justify-center gap-5"
              style={{ padding: "20px" }}
            >
              {" "}
              <a href="#">
                <img
                  className="w-10"
                  src="/svg/pdf.svg"
                  alt="Health insurance form"
                />
              </a>
            </h2>
            <h2
              className="bg-[#0073bd16] text-[#000000a6] border-l border-b border-[#00224962] flex items-center justify-center gap-5"
              style={{ padding: "20px" }}
            >
              {" "}
              <a href="#">
                <img
                  className="w-10"
                  src="/svg/pdf.svg"
                  alt="general insurance form"
                />
              </a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content_part;
