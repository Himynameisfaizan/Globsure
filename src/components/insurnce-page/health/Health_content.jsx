import React from "react";
import Icondiv from "../../about-page/Icondiv";
import Accordion from "./Accordion";

const Health_content = () => {
  const accordionData = [
    {
      id: "Q1",
      question: "What documents are required to buy health insurance?",
      answer: `You don't need heavy paperwork! Just keep your KYC documents (Aadhar Card/PAN Card) and basic medical history details handy. In some cases, a medical check-up might be required based on age.`,
    },
    {
      id: "Q2",
      question: "Is the medical check-up mandatory for everyone?",
      answer: `No, not for everyone. Usually, pre-policy medical check-ups are only required for individuals above 45 years of age or those with a history of pre-existing diseases.`,
    },
    {
      id: "Q3",
      question: "Does this policy cover COVID-19 treatment?",
      answer: `Yes, absolutely! All our health insurance plans cover hospitalization expenses related to COVID-19, including treatment and medication costs.`,
    },
    {
      id: "Q4",
      question: "Can I avail cashless treatment at any hospital?",
      answer: `You can avail cashless treatment at any of our 5000+ network hospitals. For non-network hospitals, you can pay the bills and claim reimbursement later.`,
    },
    {
      id: "Q5",
      question: "Can I save tax with this health insurance plan?",
      answer: `Yes, under Section 80D of the Income Tax Act, you can claim tax deductions up to ₹25,000 for yourself/family and up to ₹50,000 for senior citizen parents.`,
    },
  ];
  return (
    <>
      {/* Start header section */}
      <div className="bg-[#0075bd0a] w-full">
        <div
          className="w-full flex"
          style={{ maxWidth: "1250px", margin: "auto" }}
        >
          <div className="w-2/3">
            <h2
              className="text-3xl text-[#002249] font-semibold tracking-wide"
              style={{ padding: "20px 0" }}
            >
              Buy Health Insurance Plans and Policies Online
            </h2>
            <p className="w-5/6 text-justify text-[#00000099]">
              Health is your greatest asset, but preserving it shouldn't come at
              the cost of your financial stability. Medical emergencies are
              unpredictable and the rising cost of healthcare can be
              overwhelming for any family.Globsure International ensures that
              you and your loved ones have access to the best medical care
              without the stress of upfront payments. Our plan offers end-to-end
              protection that covers you from the moment a diagnosis is made
              until you are fully recovered. Whether it is a planned surgery or
              an unexpected emergency, we bridge the gap between expensive
              treatments and affordable care, securing your savings and your
              peace of mind.
            </p>

            <h2
              className="text-xl text-[#002249] font-semibold"
              style={{ padding: "20px 0" }}
            >
              Key Highlights
            </h2>

            <div className="flex flex-wrap gap-4">
              <div
                className="flex items-center bg-white rounded-lg gap-6 w-90 shadow hover:shadow-lg hover:cursor-pointer duration-200"
                style={{ padding: "10px 15px" }}
              >
                <img className="w-12" src="/svg/cash.svg" alt="" />
                <p className="text-[15px]">
                  Cashless Treatment at 5000+ Network Hospitals.
                </p>
              </div>

              <div
                className="flex items-center bg-white rounded-lg gap-6 w-90 shadow hover:shadow-lg hover:cursor-pointer duration-200"
                style={{ padding: "10px 15px" }}
              >
                <img className="w-12" src="/svg/refund.svg" alt="" />
                <p className="text-[15px]">
                  Zero Co-payment & 100% Claim Settlement Ratio.
                </p>
              </div>

              <div
                className="flex items-center bg-white rounded-lg gap-6 w-90 shadow hover:shadow-lg hover:cursor-pointer duration-200"
                style={{ padding: "10px 15px" }}
              >
                <img className="w-10" src="/svg/100.svg" alt="" />
                <p className="text-[15px]">
                  Pre & Post Hospitalization Coverage (60 days).
                </p>
              </div>

              <div
                className="flex items-center bg-white rounded-lg gap-6 w-90 shadow hover:shadow-lg hover:cursor-pointer duration-200"
                style={{ padding: "10px 15px" }}
              >
                <img className="w-10" src="/svg/checkup.svg" alt="" />
                <p className="text-[15px]">Free Annual Health Check-ups.</p>
              </div>

              <div
                className="flex items-center bg-white rounded-lg gap-6 w-90 shadow hover:shadow-lg hover:cursor-pointer duration-200"
                style={{ padding: "10px 15px" }}
              >
                <img className="w-10" src="/svg/tax.svg" alt="" />
                <p className="text-[15px]">Tax Benefits under Section 80D.</p>
              </div>
            </div>
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

      {/* Start secure section */}
      <div
        className="first_container flex"
        style={{ padding: "30px 0", maxWidth: "1250px", margin: "20px auto" }}
      >
        <div className="company_detail w-2/3">
          <h4 className="text-[#000000a6] text-[15px] font-thin">
            WHY SHOULD YOU BUY HEALTH INSURANCE PLAN
          </h4>
          <h2
            className="text-[#002249] text-3xl font-semibold"
            style={{ padding: "5px 0" }}
          >
            Secure your finances and health before it's too late.
          </h2>

          <ul className="w-[85%] text-justify" style={{ marginTop: "10px" }}>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px]"
            >
              <span className="text-[#002249] text-base">
                Rising Medical Inflation:
              </span>{" "}
              Healthcare costs are increasing by 15% every year. A simple
              surgery today can cost lakhs tomorrow. Lock your safety net now.{" "}
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px]"
            >
              <span className="text-[#002249] text-base">
                Lifestyle Diseases:
              </span>{" "}
              Stress and modern lifestyle have made critical illnesses common
              even in young age. Being prepared is the only cure.
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px]"
            >
              <span className="text-[#002249] text-base">
                Protect Your Savings:
              </span>{" "}
              Don't let a hospital bill wipe out your hard-earned savings. Let
              Globsure pay the bills while you keep your savings intact.
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px]"
            >
              <span className="text-[#002249] text-base">
                Quality Treatment:
              </span>{" "}
              Access top private hospitals without worrying about room rents or
              doctor fees. Get the best care, cashless.
            </li>
          </ul>
        </div>

        <div className="img_container w-1/3 relative">
          <img
            className="rounded-lg w-full h-full object-cover"
            src="/image/landing-page/finance2.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Start benefit section */}
      <div
        className="first_container flex items-center gap-4 "
        style={{ padding: "30px 0", maxWidth: "1250px", margin: "auto" }}
      >
        <div className="img_container w-1/3 flex items-center">
          <img
            className="rounded-lg w-full h-110 object-cover object-center"
            src="/image/health1.jpg"
            alt=""
          />
        </div>

        <div className="company_detail w-2/3">
          <h2
            className="text-[#002249] text-3xl font-semibold"
            style={{ padding: "0px 5px" }}
          >
            What are the Key Benefits to Buy a Health Insurance Plan?
          </h2>

          <div className="" style={{ padding: "0 15px" }}>
            <h2
              className="text-[#0073bd] text-lg"
              style={{ padding: "10px 0" }}
            >
              Health Insurance buying checklist
            </h2>
            <div className="flex flex-wrap bg-[#0073bd0a] rounded-lg shadow-lg">
              <div className="w-1/2" style={{ padding: "10px" }}>
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
                    Tax Savings (Section 80D)
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  Save up to ₹75,000* on your taxes every year under Section 80D
                  of the Income Tax Act.
                </p>
              </div>

              <div className="w-1/2" style={{ padding: "10px" }}>
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
                    Cashless Hospitalization
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  Avail cashless treatment at over 5000+ network hospitals. Just
                  show your Globsure health card.
                </p>
              </div>

              <div className="w-1/2" style={{ padding: "10px" }}>
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
                  For every claim-free year, we increase your Sum Insured amount
                  as a bonus, at no extra cost.
                </p>
              </div>

              <div className="w-1/2" style={{ padding: "10px" }}>
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
                    Day Care Treatments
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  We cover advanced surgeries and treatments (like Cataract,
                  Dialysis) that require less than 24 hours of hospitalization.
                </p>
              </div>

              <div className="w-1/2" style={{ padding: "10px" }}>
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
                    Pre & Post Hospitalization
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  We don't just pay hospital bills. We cover medical expenses 30
                  days before admission and 60 days after discharge.
                </p>
              </div>

              <div className="w-1/2" style={{ padding: "10px" }}>
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
                    Lifetime Renewability
                  </h2>
                </div>
                <p
                  className="text-sm w-[85%] text-justify text-[#000000a6]"
                  style={{ paddingLeft: "45px" }}
                >
                  Once you are with us, we stay with you. Renew your policy for
                  a lifetime without any break.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start why need section */}
      <div
        className="origin-section w-full flex justify-between"
        style={{ maxWidth: "1250px", margin: "50px auto" }}
      >
        <div className="right w-1/2 flex flex-col gap-2">
          <h4 className="text-[#002249] text-3xl font-semibold">
            Why You Need Health Insurance Today ?
          </h4>
          <p
            className="text-[15px] text-[#000000a6] text-justify"
            style={{ padding: "10px 0" }}
          >
            Your health is priceless, but healthcare is not. As medical costs
            skyrocket, a single hospitalization can disrupt your financial
            stability and future goals. Buying health insurance today ensures
            that you are prepared for tomorrow's uncertainties. From covering
            critical illnesses to handling daily medical expenses, our plans act
            as a financial shield, allowing you to focus on recovery rather than
            bills. Take the first step towards a worry-free life by locking in
            your protection now.​
          </p>
          <img
            className="rounded-lg"
            src="/image/health3.jpg"
            alt=""
          />
        </div>
        <div
          className="left w-1/2 flex flex-col gap-5 justify-end"
          style={{ paddingLeft: "60px" }}
        >
          <Icondiv
            svg={"/svg/briefcase.svg"}
            title={"Employer Cover Isn't Enough"}
            desc={
              "Corporate insurance is linked to your job. If you switch jobs or retire, you lose coverage instantly. A personal plan stays with you forever."
            }
          />

          <Icondiv
            svg={"/svg/glass.svg"}
            title={"Beat the Waiting Period"}
            desc={
              "Specific diseases have a 2-4 year waiting period. Buying now ensures that when you actually need it later, you are already fully covered."
            }
          />

          <Icondiv
            svg={"/svg/percentage.svg"}
            title={"Lock Lower Premiums"}
            desc={
              "Premiums increase drastically as you age. Buying at a young age lets you lock in comprehensive coverage at a much lower cost."
            }
          />

          <Icondiv
            svg={"/svg/robot.svg"}
            title={"Cover Modern Treatments"}
            desc={
              "Modern healthcare includes robotic surgeries and advanced therapies which are expensive. Standard plans might miss them, but we cover them."
            }
          />

          <Icondiv
            svg={"/svg/heart.svg"}
            title={"Combat Lifestyle Risks"}
            desc={
              "Stress and modern lifestyle have made critical illnesses common even among the youth. Early protection is the best cure."
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
            How To Buy Health Insurance
          </h2>
          <div className="w-full flex justify-around items-center">
            <div className="left w-1/2 flex flex-col gap-15 justify-end">
              <Icondiv
                svg={"/svg/one.svg"}
                title={"Share Details"}
                desc={
                  "Enter basic details like age and city to generate a quote."
                }
              />

              <Icondiv
                svg={"/svg/two.svg"}
                title={"Customize Plan"}
                desc={"Choose your sum insured and add optional benefits."}
              />

              <Icondiv
                svg={"/svg/three.svg"}
                title={"Fill Proposal"}
                desc={"Complete a short health declaration form online."}
              />

              <Icondiv
                svg={"/svg/four.svg"}
                title={"Instant Policy"}
                desc={"Make payment and download your policy immediately."}
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
                  Any Query, Just a Call Away
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

export default Health_content;
