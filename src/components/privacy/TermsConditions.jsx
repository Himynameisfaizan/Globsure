import React, { useEffect } from "react";

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen" style={{ paddingBottom: "80px" }}>
      {/* Header Section */}
      <div 
        className="bg-[#002249] text-white text-center"
        style={{ padding: "60px 20px 80px 20px" }}
      >
        <h1 className="font-bold" style={{ fontSize: "clamp(24px, 5vw, 42px)", marginBottom: "15px" }}>
          Terms & Conditions
        </h1>
        <p className="text-gray-300 mx-auto text-left" style={{ maxWidth: "600px", lineHeight: "1.6" }}>
          Please read these terms and conditions carefully before using the services of Globsure International.
        </p>
      </div>

      {/* Main Content Card */}
      <div className="container mx-auto" style={{ padding: "0 20px", marginTop: "-50px" }}>
        <div 
          className="bg-white rounded-lg shadow-xl border-t-4 border-[#0073bd]"
          style={{ padding: "40px 25px" }}
        >
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b" style={{ marginBottom: "30px", paddingBottom: "20px" }}>
             <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Terms of Service</p>
                <p className="text-xs text-gray-400" style={{ marginTop: "5px" }}>Effective Date: January 1, 2025</p>
             </div>
          </div>

          <div className="text-gray-700 leading-relaxed">
            
            <section style={{ marginBottom: "30px" }}>
              <h2 className="text-xl md:text-2xl font-bold text-[#002249]" style={{ marginBottom: "12px" }}>1. Agreement to Terms</h2>
              <p>
                These Terms and Conditions constitute a legally binding agreement made between you and <strong>Globsure International</strong>. By accessing our Site, you agree to be bound by these terms.
              </p>
            </section>

            <section style={{ marginBottom: "30px" }}>
              <h2 className="text-xl md:text-2xl font-bold text-[#002249]" style={{ marginBottom: "12px" }}>2. Service Description</h2>
              <p>
                Globsure International acts as an authorized facilitator for insurance products. We provide quotes and assist in claims, but the final insurance contract is between you and the respective Insurance Company.
              </p>
            </section>

            <section style={{ marginBottom: "30px" }}>
              <h2 className="text-xl md:text-2xl font-bold text-[#002249]" style={{ marginBottom: "12px" }}>3. User Representations</h2>
              <p style={{ marginBottom: "8px" }}>By using the Site, you agree that:</p>
              <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                <li style={{ marginBottom: "8px" }}>All information you submit is accurate and truthful.</li>
                <li style={{ marginBottom: "8px" }}>You will not use the Site for any illegal purpose.</li>
                <li style={{ marginBottom: "8px" }}>False information regarding health/vehicle status may lead to claim rejection.</li>
              </ul>
            </section>

            <section style={{ marginBottom: "30px" }}>
              <h2 className="text-xl md:text-2xl font-bold text-[#002249]" style={{ marginBottom: "12px" }}>4. Payments and Refunds</h2>
              <p style={{ marginBottom: "10px" }}>
                <strong>Payments:</strong> All premiums must be paid directly through the secure payment gateways. We do not store your card details.
              </p>
              <p>
                <strong>Refunds:</strong> Refunds for cancelled policies are subject to the terms of the specific insurance provider. Service fees are non-refundable.
              </p>
            </section>

            <section style={{ marginBottom: "30px" }}>
              <h2 className="text-xl md:text-2xl font-bold text-[#002249]" style={{ marginBottom: "12px" }}>5. Limitation of Liability</h2>
              <p>
                We are not liable for any direct, indirect, or consequential damages arising from your use of the site or inability to use the services.
              </p>
            </section>

            <section style={{ marginBottom: "30px" }}>
              <h2 className="text-xl md:text-2xl font-bold text-[#002249]" style={{ marginBottom: "12px" }}>6. Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of <strong>Gandhidham, Gujarat</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-[#002249]" style={{ marginBottom: "12px" }}>7. Grievance Redressal</h2>
              <p style={{ marginBottom: "15px" }}>
                For complaints, please contact our Grievance Officer:
              </p>
              <div className="border border-gray-200 rounded bg-gray-50" style={{ padding: "20px" }}>
                <p><strong>Name:</strong> Grievance Officer</p>
                <p><strong>Company:</strong> Globsure International</p>
                <p className="text-xs"><strong>Email:</strong> globsureinternational@gmail.com</p>
                <p><strong>Address:</strong> Office No. 1, 3rd Floor, Bhanushali Avenue, Gandhidham – Kutch, 370201</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;