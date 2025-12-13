import React from "react";
import Icondiv from "../../about-page/Icondiv";
import Accordion from "../health/Accordion";
import '../health/responsive.css'

const General_content = () => {
  const accordionData = [
    {
      id: "Q1",
      question: "What does a Standard General Insurance policy cover?",
      answer: `General Insurance is a broad term that covers your non-life assets. At Globsure, our plans primarily protect your Home (structure & contents), International Travel (medical & baggage), and expensive gadgets against theft, fire, and natural calamities.`,
    },
    {
      id: "Q2",
      question: "Is Travel Insurance mandatory for going abroad?",
      answer: `It depends on the country. For Schengen countries (Europe) and a few others, it is mandatory for visa approval. Even where it's not mandatory, it is highly recommended to cover expensive medical treatments and flight mishaps abroad.`,
    },
    {
      id: "Q3",
      question: "Does Home Insurance cover theft of jewelry and cash?",
      answer: `Yes, our Home Insurance policy covers burglary and theft of valuable contents like jewelry, cash, and electronics, provided you have opted for the 'Content Cover' add-on.`,
    },
    {
      id: "Q4",
      question: "How do I claim insurance in case of theft?",
      answer: `In case of theft, you must immediately file an FIR with the local police. Then, intimate us via our app or helpline within 24 hours. We will require the FIR copy and proof of ownership for the stolen items to process the claim.`,
    },
    {
      id: "Q5",
      question: "What is Third-Party Liability cover?",
      answer: `This covers you financially if you accidentally cause damage to someone else's property or if a person gets injured within your insured premises. It handles the legal fees and compensation costs.`,
    },
  ];
  return (
    <>
      {/* Start header section */}
      <div className="bg-[#0075bd0a] w-full">
        <div
          className="header-section w-full flex"
          style={{ maxWidth: "1250px", margin: "auto" }}
        >
          <div className="first-section w-2/3">
            <h2
              className="text-3xl text-[#002249] font-semibold tracking-wide"
              style={{ padding: "20px 10px 10px 0 " }}
            >
              Secure Your Hard Earned Assets with Globsure’s General Insurance.
            </h2>
            <p className="w-5/6 text-justify text-[#00000099]">
              Building a secure and comfortable life takes years of hard work,
              dedication, and financial discipline. You invest your life's
              savings into buying a dream home, purchasing expensive gadgets, or
              planning international vacations for your family. However, life’s
              uncertainties—like a sudden fire, a burglary, a natural calamity,
              or a travel mishap—do not come with a warning. At Globsure
              International, we understand that your assets are more than just
              'things'; they represent your achievements. Our comprehensive
              General Insurance plans are designed to act as a solid financial
              fortress around your possessions. Whether it is reconstructing
              your home after damage, compensating for lost baggage during a
              trip, or covering legal liabilities, we step in to handle the
              financial blow so that your savings and lifestyle remain
              completely unaffected.
            </p>

            <h2
              className="text-xl text-[#002249] font-semibold"
              style={{ padding: "20px 0" }}
            >
              Key Highlights
            </h2>

            <div className="icons-container flex flex-wrap gap-4">
              <div
                className="icon flex items-center bg-white rounded-lg gap-6 w-90 shadow hover:shadow-lg hover:cursor-pointer duration-200"
                style={{ padding: "10px 15px" }}
              >
                <img className="w-12" src="/svg/home.svg" alt="" />
                <p className="text-[15px]">Complete Home & Content Cover.</p>
              </div>

              <div
                className="icon flex items-center bg-white rounded-lg gap-6 w-90 shadow hover:shadow-lg hover:cursor-pointer duration-200"
                style={{ padding: "10px 15px" }}
              >
                <img className="w-9" src="/svg/world.svg" alt="" />
                <p className="text-[15px]">International Travel Protection.</p>
              </div>

              <div
                className="icon flex items-center bg-white rounded-lg gap-6 w-90 shadow hover:shadow-lg hover:cursor-pointer duration-200"
                style={{ padding: "10px 15px" }}
              >
                <img className="w-10" src="/svg/check.svg" alt="" />
                <p className="text-[15px]">Protection against Theft & Fire.</p>
              </div>

              <div
                className="icon flex items-center bg-white rounded-lg gap-6 w-90 shadow hover:shadow-lg hover:cursor-pointer duration-200"
                style={{ padding: "10px 15px" }}
              >
                <img className="w-10" src="/svg/warning.svg" alt="" />
                <p className="text-[15px]">Natural Calamity Coverage.</p>
              </div>

              <div
                className="icon flex items-center bg-white rounded-lg gap-6 w-90 shadow hover:shadow-lg hover:cursor-pointer duration-200"
                style={{ padding: "10px 15px" }}
              >
                <img
                  className="w-10"
                  src="/svg/target-svgrepo-com.svg"
                  alt=""
                />
                <p className="text-[15px]">
                  Protection against legal claims arising from accidental
                  damages to others' property.
                </p>
              </div>
            </div>
          </div>
          <div
            className="second-section w-1/3 flex flex-col justify-center"
            style={{ padding: "20px 0" }}
          >
            <div className="form-section bg-white h-[95%] rounded-xl shadow-lg">
              <h2
                className="text-center text-xl text-[#002249] font-bold"
                style={{ paddingTop: "20px" }}
              >
                Expert Support, Just a Call Away
              </h2>
              <h3
                className="text-center text-[#000000a6] border-b border-[#00000036]"
                style={{ padding: "5px 0 10px 0" }}
              >
                We’re Here to Help You 24/7
              </h3>

              <div
                className="form flex flex-col gap-6"
                style={{ padding: "30px 30px", marginBottom: "40px" }}
              >
                <input
                  className="border border-[#00000036] w-full rounded-lg"
                  style={{ padding: "15px" }}
                  type="text"
                  placeholder="Enter Name"
                  required
                />

                <input
                  className="border border-[#00000036] w-full rounded-lg"
                  style={{ padding: "15px" }}
                  type="number"
                  placeholder="Enter Phone no."
                  required
                />

                <textarea
                  rows={4}
                  className="border border-[#00000036] w-full rounded-lg"
                  placeholder="Write your doubts.."
                  required
                  style={{ padding: "10px" }}
                ></textarea>

                <input
                  className="btn bg-[#002249] rounded-lg text-white cursor-pointer hover:bg-[#0073bd] duration-300"
                  style={{ padding: "20px" }}
                  type="submit"
                  value="Our team will connect you in minutes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start secure section */}
      <div
        className="first_container flex"
        style={{ padding: "30px 0", maxWidth: "1250px", margin: "20px auto" }}
      >
        <div className="company_detail w-2/3">
          <h4 className="text-[#000000a6] text-[15px] font-thin">
            WHY IGNORING GENERAL INSURANCE CAN BE A COSTLY MISTAKE?
          </h4>
          <h2
            className="text-[#002249] text-3xl font-semibold"
            style={{ padding: "5px 0" }}
          >
            Secure Your Finances and Assets Before It's Too Late
          </h2>

          <ul className="w-[85%] text-justify" style={{ marginTop: "10px" }}>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px]"
            >
              <span className="text-[#002249] text-base">
                Shield Against Natural Disasters
              </span>{" "}
              Climate change has made weather unpredictable. Whether it is a
              sudden urban flood, an earthquake, or a cyclone, the physical
              damage to your property can run into lakhs or even crores.
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px]"
            >
              <span className="text-[#002249] text-base">
                Secure Your International Travel
              </span>{" "}
              Traveling abroad is exciting, but medical emergencies in countries
              like the USA or Europe can be financially devastating due to high
              currency exchange rates. A simple hospitalization can cost more
              than your entire trip budget.
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px]"
            >
              <span className="text-[#002249] text-base">
                Safeguard Against Theft & Fire
              </span>{" "}
              Your home contains valuable assets like jewelry, expensive
              electronics, and furniture that you have accumulated over years of
              hard work.
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px]"
            >
              <span className="text-[#002249] text-base">
                Cover Third-Party Legal Risks
              </span>{" "}
              Accidents happen when least expected. If a guest gets injured at
              your home, or if your property accidentally causes damage to a
              neighbor's house, you could be legally liable to pay huge
              compensations.
            </li>
          </ul>
        </div>

        <div className="img_container w-1/3 relative">
          <img
            className="rounded-lg w-full h-full object-cover"
            src="/image/landing-page/finance.png"
            alt=""
          />
        </div>
      </div>

      {/* Start benefit section */}
      <div
        className="benefit_first_container flex gap-4 "
        style={{ padding: "30px 0", maxWidth: "1250px", margin: "auto" }}
      >
        <div className="benefit_img_container w-1/3 flex items-center">
          <img
            className="rounded-lg w-full h-full object-cover"
            src="/image/general_home.jpg"
            alt=""
          />
        </div>

        <div className="company_detail w-2/3">
          <h2
            className="text-[#002249] text-3xl font-semibold"
            style={{ padding: "0px 5px" }}
          >
            What Are the Key Benefits of Globsure General Insurance?
          </h2>

          <div className="icon-container" style={{ padding: "0 15px" }}>
            <h2
              className="text-[#0073bd] text-lg"
              style={{ padding: "10px 0" }}
            >
              General Insurance buying checklist
            </h2>
            <div className="icons-section flex flex-wrap bg-[#0073bd0a] rounded-lg shadow-lg">
              <div className="icons w-1/2" style={{ padding: "10px" }}>
                <div className="icon flex">
                  <img
                    className="w-8 bg-white rounded-lg shadow"
                    style={{ padding: "5px" }}
                    src="/svg/check.svg"
                    alt=""
                  />
                  <h2
                    className="text-[#002249] text-lg"
                    style={{ paddingLeft: "10px" }}
                  >
                    Complete Home Shield
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  We cover both the building structure and your valuable
                  contents like electronics & furniture against fire, storms,
                  and floods.
                </p>
              </div>

              <div className="icons w-1/2" style={{ padding: "10px" }}>
                <div className="icon flex">
                  <img
                    className="w-8 bg-white rounded-lg shadow"
                    style={{ padding: "5px" }}
                    src="/svg/check.svg"
                    alt=""
                  />
                  <h2
                    className="text-[#002249] text-lg"
                    style={{ paddingLeft: "10px" }}
                  >
                    Worldwide Travel Security
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  Travel stress-free with comprehensive coverage for medical
                  emergencies, flight delays, and lost baggage across the globe.
                </p>
              </div>

              <div className="icons w-1/2" style={{ padding: "10px" }}>
                <div className="icon flex">
                  <img
                    className="w-8 bg-white rounded-lg shadow"
                    style={{ padding: "5px" }}
                    src="/svg/check.svg"
                    alt=""
                  />
                  <h2
                    className="text-[#002249] text-lg"
                    style={{ paddingLeft: "10px" }}
                  >
                    Theft & Burglary Cover
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  Get compensated for the market value of your precious jewelry,
                  gadgets, and cash in case of an unfortunate house break-in.
                </p>
              </div>

              <div className="icons w-1/2" style={{ padding: "10px" }}>
                <div className="icon flex">
                  <img
                    className="w-8 bg-white rounded-lg shadow"
                    style={{ padding: "5px" }}
                    src="/svg/check.svg"
                    alt=""
                  />
                  <h2
                    className="text-[#002249] text-lg"
                    style={{ paddingLeft: "10px" }}
                  >
                    Personal Liability Protection
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  We cover the legal fees and compensation costs if a third
                  party accidentally gets injured while on your property.
                </p>
              </div>

              <div className="icons w-1/2" style={{ padding: "10px" }}>
                <div className="icon flex">
                  <img
                    className="w-8 bg-white rounded-lg shadow"
                    style={{ padding: "5px" }}
                    src="/svg/check.svg"
                    alt=""
                  />
                  <h2
                    className="text-[#002249] text-lg"
                    style={{ paddingLeft: "10px" }}
                  >
                    Quick Claim Settlement
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  Experience a smooth, digital claim process. Upload photos of
                  the damage and get quick approvals for genuine claims.
                </p>
              </div>

              <div className="icons w-1/2" style={{ padding: "10px" }}>
                <div className="icon flex">
                  <img
                    className="w-8 bg-white rounded-lg shadow"
                    style={{ padding: "5px" }}
                    src="/svg/check.svg"
                    alt=""
                  />
                  <h2
                    className="text-[#002249] text-lg"
                    style={{ paddingLeft: "10px" }}
                  >
                    Affordable Add-ons
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  Customize your plan with specific add-ons like Portable
                  Electronics Cover or Adventure Sports to fit your budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start why need section */}
      <div
        className="origin-section w-full flex items-center justify-between"
        style={{ maxWidth: "1250px", margin: "50px auto" }}
      >
        <div className="right w-1/2 flex flex-col gap-2">
          <h4 className="text-[#002249] text-3xl font-semibold">
            Why You Need General Insurance Today ?
          </h4>
          <p
            className="text-[15px] text-[#000000a6] text-justify"
            style={{ padding: "10px 0" }}
          >
            Your assets are the result of years of hard work and financial
            discipline. Whether it's your dream home, expensive gadgets, or a
            planned international vacation, life's unpredictability can turn
            these into financial liabilities in seconds. Ignoring insurance
            often leads to regret when a mishap occurs. Globsure General
            Insurance acts as your financial fortress, ensuring that a sudden
            fire, theft, or travel emergency doesn't wipe out the savings you’ve
            built for your future. Don't leave your most valuable possessions to
            chance secure them today.
          </p>
          <img
            className="rounded-lg h-80 w-full object-cover"
            src="/image/home1.jpg"
            alt=""
          />
        </div>
        <div
          className="left w-1/2 flex flex-col gap-5 justify-end"
          style={{ paddingLeft: "60px" }}
        >
          <Icondiv
            svg={"/svg/home.svg"}
            title={"Rising Natural Risks"}
            desc={
              "Floods and storms are unpredictable. Protect your home’s structure from costly damages before it's too late."
            }
          />

          <Icondiv
            svg={"/svg/plane.svg"}
            title={"Expensive Medical Costs Abroad"}
            desc={
              "Healthcare in foreign countries is expensive. We cover your hospital bills and lost baggage while you travel."
            }
          />

          <Icondiv
            svg={"/svg/sheild.svg"}
            title={"Theft Protection"}
            desc={
              "Don't let a burglary drain your savings. We reimburse the market value of your stolen jewelry and electronics."
            }
          />

          <Icondiv
            svg={"/svg/family.svg"}
            title={"Legal Liability Cover"}
            desc={
              "Accidents happen. We pay the legal fees and compensation if a third party gets injured on your property."
            }
          />

          <Icondiv
            svg={"/svg/cash.svg"}
            title={"Small Cost, Big Protection"}
            desc={
              "Insuring your home or travel costs less than a family dinner, but saves you from losses worth lakhs."
            }
          />
        </div>
      </div>

      {/* Start share details section */}
      <div className="bg-[#0075bd0a]">
        <div
          className="origin-section"
          style={{ maxWidth: "1250px", margin: "50px auto" }}
        >
          <h2
            className="text-center text-[#002249] text-3xl font-bold"
            style={{ padding: "20px 0" }}
          >
            How To Buy General Insurance
          </h2>
          <div className="w-full flex justify-around items-center">
            <div className="left w-1/2 flex flex-col gap-15 justify-end">
              <Icondiv
                svg={"/svg/one.svg"}
                title={"Enter Details"}
                desc={
                  "Select your insurance type (Home, Travel, or Shop) and enter basic details like property value or travel dates."
                }
              />

              <Icondiv
                svg={"/svg/two.svg"}
                title={"Customize Coverage"}
                desc={"Choose the correct Sum Insured (coverage amount) and add extra protection like 'Jewelry Cover' or 'Gadget Cover"}
              />

              <Icondiv
                svg={"/svg/three.svg"}
                title={"Review Quote"}
                desc={"Check the premium breakdown. Our transparent quotes ensure you know exactly what you are paying for."}
              />

              <Icondiv
                svg={"/svg/four.svg"}
                title={"Instant Policy"}
                desc={"Make a secure online payment and download your policy document instantly to your email."}
              />
            </div>
            <div
              className="w-1/3 flex flex-col justify-center"
              style={{ padding: "20px 0" }}
            >
              <div className="bg-white h-[95%] rounded-xl shadow-lg">
                <h2
                  className="text-center text-xl text-[#002249] font-bold"
                  style={{ paddingTop: "20px" }}
                >
                 Protect your home & travel in minutes.
                </h2>
                <h3
                  className="text-center text-[#000000a6] border-b border-[#00000036]"
                  style={{ padding: "5px 0 10px 0" }}
                >
                  We’re Here to Help You 24/7
                </h3>

                <div
                  className="form flex flex-col gap-6"
                  style={{ padding: "30px 30px", marginBottom: "40px" }}
                >
                  <input
                    className="border border-[#00000036] w-full rounded-lg"
                    style={{ padding: "15px" }}
                    type="text"
                    placeholder="Enter Name"
                    required
                  />

                  <input
                    className="border border-[#00000036] w-full rounded-lg"
                    style={{ padding: "15px" }}
                    type="number"
                    placeholder="Enter Phone no."
                    required
                  />

                  <textarea
                    rows={4}
                    className="border border-[#00000036] w-full rounded-lg"
                    placeholder="Write your doubts.."
                    required
                    style={{ padding: "10px" }}
                  ></textarea>

                  <input
                    className="bg-[#002249] rounded-lg text-white cursor-pointer hover:bg-[#0073bd] duration-300"
                    style={{ padding: "20px" }}
                    type="submit"
                    value="Our team will connect you in minutes"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start share accordion section */}
      <div className="accordion max-w-[1000px]" style={{ margin: "auto" }}>
        <h2
          className="text-[#002249] text-3xl font-bold text-center"
          style={{ padding: "10px 0" }}
        >
          Frequently Asked Questions
        </h2>
        <Accordion faq={accordionData} />
      </div>
    </>
  );
};

export default General_content;
