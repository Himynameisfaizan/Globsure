import React, { useState } from "react";
import Icondiv from "../../about-page/Icondiv";
import Accordion from "../health/Accordion";
import "../health/responsive.css";

const Vehicle_content = () => {
  const accordionData = [
    {
      id: "Q1",
      question: "What is Zero Depreciation Cover?",
      answer: `Standard policies deduct the depreciation value of replaced parts (plastic, rubber, metal) during a claim. A 'Zero Depreciation' add-on ensures you get the full claim amount without any such deductions, saving you a lot of money.`,
    },
    {
      id: "Q2",
      question: "What is IDV in vehicle insurance?",
      answer: `IDV stands for 'Insured Declared Value'. It is the current market value of your vehicle. In case of theft or total loss, this is the maximum amount the insurance company will pay you.`,
    },
    {
      id: "Q3",
      question: "Is vehicle insurance mandatory in India?",
      answer: `Yes, under the Motor Vehicles Act, having at least a 'Third-Party Liability' insurance policy is mandatory for all vehicles driving on Indian roads to avoid heavy traffic fines.`,
    },
    {
      id: "Q4",
      question: "What happens to my No Claim Bonus (NCB) if I claim?",
      answer: `NCB is a discount reward for not making a claim during the policy year. If you make a claim, your NCB usually becomes zero for the next renewal. That's why for small damages, people often avoid claiming to save their NCB.`,
    },
    {
      id: "Q5",
      question: "How do I avail cashless repair?",
      answer: `To avail cashless repair, take your vehicle to any of our 3000+ network garages. The garage will coordinate directly with us for the payment, and you only have to pay for compulsory deductibles (if any).`,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "", // 'Doubts' ko message variable mein store kar rahe hain
  });

  const [status, setStatus] = useState({ loading: false, msg: "", type: "" });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: "", type: "" });

    try {
      // 👇 APNA LOCALHOST URL YAHAN CHECK KAR LENA
      const response = await fetch(
        "http://localhost/phpMailer/globsure-api/index.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, type: "quote" }), // 👈 TYPE "QUOTE" BHEJA
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setStatus({
          loading: false,
          msg: "Request Sent! We'll call you shortly.",
          type: "success",
        });
        setFormData({ name: "", phone: "", message: "" }); // Clear form
      } else {
        setStatus({ loading: false, msg: result.message, type: "error" });
      }
    } catch (error) {
      console.error(error);
      setStatus({ loading: false, msg: "Connection Error.", type: "error" });
    }
  };

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
              style={{ padding: "20px 0 10px 0" }}
            >
              Drive with Confidence Complete Protection for Your Vehicle.
            </h2>
            <p className="w-5/6 text-justify text-[#00000099]">
              Owning a vehicle gives you the freedom to travel, but the road
              ahead is full of uncertainties. From minor scratches in heavy
              traffic to major accidental damages, unforeseen repair costs can
              burn a deep hole in your pocket. Additionally, driving without a
              valid insurance policy is a serious offense under the Motor
              Vehicles Act, attracting heavy fines and legal trouble.{" "}
              <span className="text-black">Globsure Vehicle Insurance</span>{" "}
              acts as your ultimate safety net. We offer comprehensive
              protection that covers damages to your vehicle caused by
              accidents, fire, theft, or natural calamities, along with
              mandatory third-party liability cover. Drive with absolute
              confidence, knowing that we are always riding shotgun to handle
              the risks.
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
                <img className="w-12" src="/svg/car.svg" alt="" />
                <p className="text-[15px]">
                  Covers damages from accidents, fire, and natural disasters.
                </p>
              </div>

              <div
                className="icon flex items-center bg-white rounded-lg gap-6 w-90 shadow hover:shadow-lg hover:cursor-pointer duration-200"
                style={{ padding: "10px 15px" }}
              >
                <img className="w-12" src="/svg/refund.svg" alt="" />
                <p className="text-[15px]">
                  Avoid hefty traffic fines with a valid third-party liability
                  policy.
                </p>
              </div>

              <div
                className="icon flex items-center bg-white rounded-lg gap-6 w-90 shadow hover:shadow-lg hover:cursor-pointer duration-200"
                style={{ padding: "10px 15px" }}
              >
                <img className="w-10" src="/svg/cash.svg" alt="" />
                <p className="text-[15px]">
                  Cashless claims at 3000+ network garages across the country.
                </p>
              </div>

              <div
                className="icon flex items-center bg-white rounded-lg gap-6 w-90 shadow hover:shadow-lg hover:cursor-pointer duration-200"
                style={{ padding: "10px 15px" }}
              >
                <img className="w-10" src="/svg/100.svg" alt="" />
                <p className="text-[15px]">
                  Get up to 50% discount on renewal for claim-free years..
                </p>
              </div>
            </div>
          </div>
          <div
            className="second-section w-1/3 flex flex-col justify-center"
            style={{ padding: "20px 0" }}
          >
            <div className="form-section bg-white h-[90%] rounded-xl shadow-lg">
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

              <div style={{ padding: "30px 30px", marginBottom: "40px" }}>
                <form
                  className="form flex flex-col gap-6"
                  onSubmit={handleSubmit}
                  action=""
                >
                  <input
                    className="border border-[#00000036] w-full rounded-lg"
                    style={{ padding: "15px" }}
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    className="border border-[#00000036] w-full rounded-lg"
                    style={{ padding: "15px" }}
                    type="email"
                    placeholder="Enter enter email address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <input
                    className="border border-[#00000036] w-full rounded-lg"
                    style={{ padding: "15px" }}
                    type="number"
                    placeholder="Enter phone no."
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <textarea
                    rows={4}
                    className="border border-[#00000036] w-full rounded-lg"
                    placeholder="Write your doubts.."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ padding: "10px" }}
                  ></textarea>

                  {status.msg && (
                    <p
                      className={`text-center text-sm ${
                        status.type === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {status.msg}
                    </p>
                  )}

                  <input
                    className="btn bg-[#002249] rounded-lg text-white cursor-pointer hover:bg-[#0073bd] duration-300"
                    style={{ padding: "20px" }}
                    type="submit"
                    value={
                      status.loading
                        ? "sending..."
                        : "Our team will connect you in minutes"
                    }
                  />
                </form>
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
            WHY RISK YOUR SAVINGS ON THE ROAD?
          </h4>
          <h2
            className="text-[#002249] text-3xl font-semibold"
            style={{ padding: "5px 0" }}
          >
            Secure Your Finances Before the Unexpected Happens
          </h2>

          <ul className="w-[85%] text-justify" style={{ marginTop: "10px" }}>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px]"
            >
              <span className="text-[#002249] text-base">
                Avoid Hefty Traffic Fines
              </span>{" "}
              Driving without insurance is illegal. Save yourself from traffic
              challans starting from ₹2,000 for non-compliance.{" "}
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px]"
            >
              <span className="text-[#002249] text-base">
                Beat Rising Repair Costs
              </span>{" "}
              Spare parts and labor costs are skyrocketing. We cover the heavy
              repair bills so you don't have to pay from your pocket.
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px]"
            >
              <span className="text-[#002249] text-base">
                Protection Against Total Loss
              </span>{" "}
              In case of theft or damage beyond repair, we reimburse the current
              market value (IDV) of your vehicle.
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px]"
            >
              <span className="text-[#002249] text-base">
                Third-Party Liability Shield
              </span>{" "}
              If your vehicle damages someone else's property, the legal
              compensation can be massive. We handle those payouts for you.
            </li>
          </ul>
        </div>

        <div className="img_container w-1/3 relative">
          <img
            className="rounded-lg w-full h-full object-cover"
            src="/image/landing-page/insurance.jpg"
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
            src="/image/car_bg2.jpg"
            alt=""
          />
        </div>

        <div className="company_detail w-2/3">
          <h2
            className="text-[#002249] text-3xl font-semibold"
            style={{ padding: "0px 5px" }}
          >
            Key Benefits of Globsure Vehicle Insurance
          </h2>

          <div className="icon-container" style={{ padding: "0 15px" }}>
            <h2
              className="text-[#0073bd] text-lg"
              style={{ padding: "10px 0" }}
            >
              Everything you need for a smooth drive.
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
                    Cashless Garages Network
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  Get your vehicle repaired at over 3000+ network garages across
                  the country without paying cash upfront.
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
                    Zero Depreciation Cover
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  Get full claim value without any deduction for depreciation on
                  parts like plastic, fiber, and rubber.
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
                    24x7 Roadside Assistance
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  Stuck with a flat tyre or dead battery? We provide
                  round-the-clock breakdown support and towing services.
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
                    No Claim Bonus (NCB)
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  Save big on renewals! Get up to 50% discount on your premium
                  for every claim-free year.
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
                    Superfast Claim Settlement"
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  Experience a hassle-free digital claim process. Just upload
                  photos of the damage and get quick approvals.
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
                    Personal Accident Cover
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  We provide mandatory personal accident coverage of ₹15 Lakhs
                  for the owner-driver in case of unfortunate events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start why need section */}
      <div
        className="origin-section w-full flex justify-between items-center"
        style={{ maxWidth: "1250px", margin: "50px auto" }}
      >
        <div className="right w-1/2 flex flex-col gap-2">
          <h4 className="text-[#002249] text-3xl font-semibold">
            Why You Need Vehical Insurance Today ?
          </h4>
          <p
            className="text-[15px] text-[#000000a6] text-justify"
            style={{ padding: "10px 0" }}
          >
            Owning a vehicle brings convenience and freedom, but Indian roads
            are full of uncertainties. Whether it is a chaotic traffic jam, a
            sudden distracted driver, or an unexpected natural calamity like a
            flood, your vehicle is constantly exposed to risks. A single moment
            of bad luck can lead to damages worth thousands or even lakhs,
            draining the savings you have built for your future goals. Moreover,
            vehicle insurance isn't just a choice—it is a legal necessity.
            Driving without it can lead to heavy fines and legal complications.
            Globsure Vehicle Insurance acts as your financial seatbelt.
          </p>
          <img
            className="rounded-lg h-80 w-full object-cover"
            src="/image/landing-page/insurance2.jpg"
            alt=""
          />
        </div>
        <div
          className="left w-1/2 flex flex-col gap-5 justify-end"
          style={{ paddingLeft: "60px" }}
        >
          <Icondiv
            svg={"/svg/car_crash.svg"}
            title={"Rising Road Accidents"}
            desc={
              "Traffic is unpredictable. Even a minor collision can lead to expensive denting and painting costs. We cover it all."
            }
          />

          <Icondiv
            svg={"/svg/warning.svg"}
            title={"Natural Calamities"}
            desc={
              "Heavy rains, floods, or falling trees can severely damage your vehicle. Insurance covers these unpredictable natural damages."
            }
          />

          <Icondiv
            svg={"/svg/percentage.svg"}
            title={"Mandatory by Law"}
            desc={
              "It is illegal to drive without valid insurance in India. Stay compliant and avoid heavy traffic challans."
            }
          />

          <Icondiv
            svg={"/svg/sheild.svg"}
            title={"Car Theft Risk"}
            desc={
              "Vehicle thefts are common in cities. If your car gets stolen, we pay you the market value (IDV) to minimize your loss."
            }
          />

          <Icondiv
            svg={"/svg/hammer.svg"}
            title={"Third-Party Liability"}
            desc={
              "If your car accidentally damages someone else's property, the legal claims can be huge. We handle those payouts for you."
            }
          />
        </div>
      </div>

      {/* Start share details section */}
      <div className="bg-[#0075bd0a]">
        <div
          className="share-section"
          style={{ maxWidth: "1250px", margin: "50px auto" }}
        >
          <h1
            className="text-center text-[#002249] text-3xl font-bold"
            style={{ padding: "20px 0" }}
          >
            How To Buy Vehical Insurance
          </h1>
          <div className="share-container w-full flex justify-around items-center">
            <div className="share-first left w-1/2 flex flex-col gap-15 justify-end">
              <Icondiv
                svg={"/svg/one.svg"}
                title={"Enter Vehical Details"}
                desc={
                  "Just enter your Car/Bike registration number (e.g., DL-01-AB-1234) or select the make and model manually."
                }
              />

              <Icondiv
                svg={"/svg/two.svg"}
                title={"Customize Your IDV"}
                desc={
                  "Check your vehicle's current market value (IDV). You can adjust it to get the right coverage balance."
                }
              />

              <Icondiv
                svg={"/svg/three.svg"}
                title={"Select Add-ons"}
                desc={
                  "Enhance your plan by adding 'Zero Depreciation', 'Engine Protect', or 'Roadside Assistance' covers."
                }
              />

              <Icondiv
                svg={"/svg/four.svg"}
                title={"Instant Policy"}
                desc={
                  "Pay premium online securely and get your policy document delivered instantly to your inbox."
                }
              />
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
                  Any Query, Just a Call Away
                </h2>
                <h3
                  className="text-center text-[#000000a6] border-b border-[#00000036]"
                  style={{ padding: "5px 0 10px 0" }}
                >
                  We’re Here to Help You 24/7
                </h3>

                <div style={{ padding: "30px 30px", marginBottom: "40px" }}>
                  <form
                    className="form flex flex-col gap-6"
                    onSubmit={handleSubmit}
                    action=""
                  >
                    <input
                      className="border border-[#00000036] w-full rounded-lg"
                      style={{ padding: "15px" }}
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                    <input
                      className="border border-[#00000036] w-full rounded-lg"
                      style={{ padding: "15px" }}
                      type="email"
                      placeholder="Enter enter email address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                    <input
                      className="border border-[#00000036] w-full rounded-lg"
                      style={{ padding: "15px" }}
                      type="number"
                      placeholder="Enter phone no."
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />

                    <textarea
                      rows={4}
                      className="border border-[#00000036] w-full rounded-lg"
                      placeholder="Write your doubts.."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{ padding: "10px" }}
                    ></textarea>

                    {status.msg && (
                      <p
                        className={`text-center text-sm ${
                          status.type === "success"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {status.msg}
                      </p>
                    )}

                    <input
                      className="btn bg-[#002249] rounded-lg text-white cursor-pointer hover:bg-[#0073bd] duration-300"
                      style={{ padding: "20px" }}
                      type="submit"
                      value={
                        status.loading
                          ? "sending..."
                          : "Our team will connect you in minutes"
                      }
                    />
                  </form>
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

export default Vehicle_content;
