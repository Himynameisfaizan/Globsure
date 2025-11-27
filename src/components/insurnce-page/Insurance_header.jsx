import React from "react";

const Insurance_header = () => {
  return (
    <>
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

      <div className="first_container flex" style={{ padding: "30px 0", maxWidth: "1250px", margin: "auto" }} >

         <div className="company_detail w-2/3">
          <h4 className="text-[#000000a6] text-[15px] font-thin">
            WHY SHOULD YOU BUY HEALTH INSURANCE PLAN
          </h4>
          <h2 className="text-[#002249] text-3xl font-semibold" style={{ padding: "5px 0" }} >
            Secure your finances and health before it's too late.
          </h2>

          <ul className="w-[90%] text-justify">
            <li style={{ padding: "5px 0" }} className="text-[#000000a6] text-[15px]" >
              <span className="text-[#002249] text-base">Rising Medical Inflation:</span>{" "}
             Healthcare costs are increasing by 15% every year. A simple surgery today can cost lakhs tomorrow. Lock your safety net now.{" "}
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px]"
            >
              <span className="text-[#002249] text-base">Lifestyle Diseases:</span>{" "}
              Stress and modern lifestyle have made critical illnesses common even in young age. Being prepared is the only cure.
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px]"
            >
              <span className="text-[#002249] text-base">Protect Your Savings:</span>{" "}
             Don't let a hospital bill wipe out your hard-earned savings. Let Globsure pay the bills while you keep your savings intact.
            </li>
            <li
              style={{ padding: "5px 0" }}
              className="text-[#000000a6] text-[15px]"
            >
              <span className="text-[#002249] text-base">Quality Treatment:</span> Access top private hospitals without worrying about room rents or doctor fees. Get the best care, cashless.
            </li>
          </ul>
        </div>

        <div className="img_container w-1/3 relative">
          <img
            className="rounded-lg w-[85%] h-full object-cover"
            src="/image/life.avif"
            alt=""
          />
        </div>
     
      </div>
    </>
  );
};

export default Insurance_header;
