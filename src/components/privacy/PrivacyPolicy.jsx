import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen" style={{ paddingBottom: "80px" }}>
      {/* Header Section */}
      <div 
        className="bg-[#002249] text-white text-center"
        style={{ padding: "60px 20px 80px 20px" }} // Bottom padding zyada di hai taaki card overlap ho sake
      >
        <h1 className="font-bold" style={{ fontSize: "clamp(24px, 5vw, 42px)", marginBottom: "15px" }}>
          Privacy Policy
        </h1>
        <p className="text-gray-300 mx-auto text-left" style={{ maxWidth: "600px", lineHeight: "1.6" }}>
          At Globsure International, we are committed to protecting your privacy and ensuring the security of your personal and financial information.
        </p>
      </div>

      {/* Main Content Card */}
      <div className="container mx-auto" style={{ padding: "0 20px", marginTop: "-50px" }}>
        <div 
          className="bg-white rounded-lg shadow-xl border-t-4 border-[#0073bd]"
          style={{ padding: "40px 25px" }} // Safe padding for mobile and desktop
        >
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b" style={{ marginBottom: "30px", paddingBottom: "20px" }}>
             <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Legal Document</p>
                <p className="text-xs text-gray-400" style={{ marginTop: "5px" }}>Last Updated: December 29, 2025</p>
             </div>
             <div style={{ marginTop: "15px" }}>
                <button 
                    onClick={() => window.print()} 
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition flex items-center"
                    style={{ padding: "8px 16px", borderRadius: "4px", gap: "8px" }}
                >
                    <i className="ri-printer-line"></i> Print Policy
                </button>
             </div>
          </div>

          <div className="text-gray-700 leading-relaxed">
            
            {/* Section 1 */}
            <section style={{ marginBottom: "35px" }}>
              <h2 className="text-2xl font-bold text-[#002249] flex items-center" style={{ marginBottom: "15px", gap: "10px" }}>
                <span className="bg-blue-100 text-[#0073bd] flex items-center justify-center rounded-full text-sm" style={{ width: "32px", height: "32px" }}>1</span> 
                Introduction
              </h2>
              <p style={{ marginBottom: "15px" }}>
                Globsure International ("we", "our", or "us") operates the website <strong>www.globsureinternational.com</strong>. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.
              </p>
            </section>

            {/* Section 2 */}
            <section style={{ marginBottom: "35px" }}>
              <h2 className="text-2xl font-bold text-[#002249] flex items-center" style={{ marginBottom: "15px", gap: "10px" }}>
                <span className="bg-blue-100 text-[#0073bd] flex items-center justify-center rounded-full text-sm" style={{ width: "32px", height: "32px" }}>2</span> 
                Information Collection
              </h2>
              <p style={{ marginBottom: "10px" }}>We collect several different types of information:</p>
              <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                <li style={{ marginBottom: "8px" }}><strong>Personal Data:</strong> Name, Email, Phone number, Address, State, ZIP code.</li>
                <li style={{ marginBottom: "8px" }}><strong>Sensitive Personal Data:</strong> Health history, vehicle details, and KYC documents necessary for insurance.</li>
                <li style={{ marginBottom: "8px" }}><strong>Usage Data:</strong> IP address, browser type, and visit duration.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section style={{ marginBottom: "35px" }}>
              <h2 className="text-2xl font-bold text-[#002249] flex items-center" style={{ marginBottom: "15px", gap: "10px" }}>
                <span className="bg-blue-100 text-[#0073bd] flex items-center justify-center rounded-full text-sm" style={{ width: "32px", height: "32px" }}>3</span> 
                Use of Data
              </h2>
              <p style={{ marginBottom: "15px" }}>Globsure International uses the collected data for:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "20px" }}>
                <div className="bg-gray-50 rounded border-l-4 border-[#0073bd]" style={{ padding: "20px" }}>
                    <h4 className="font-bold text-[#002249]">Policy Issuance</h4>
                    <p className="text-sm" style={{ marginTop: "5px" }}>To process your application and issue policies.</p>
                </div>
                <div className="bg-gray-50 rounded border-l-4 border-[#0073bd]" style={{ padding: "20px" }}>
                    <h4 className="font-bold text-[#002249]">Claims Processing</h4>
                    <p className="text-sm" style={{ marginTop: "5px" }}>To verify and settle claims efficiently.</p>
                </div>
                <div className="bg-gray-50 rounded border-l-4 border-[#0073bd]" style={{ padding: "20px" }}>
                    <h4 className="font-bold text-[#002249]">Support</h4>
                    <p className="text-sm" style={{ marginTop: "5px" }}>To assist with renewals and queries.</p>
                </div>
                <div className="bg-gray-50 rounded border-l-4 border-[#0073bd]" style={{ padding: "20px" }}>
                    <h4 className="font-bold text-[#002249]">Updates</h4>
                    <p className="text-sm" style={{ marginTop: "5px" }}>To notify about policy changes.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section style={{ marginBottom: "35px" }}>
              <h2 className="text-2xl font-bold text-[#002249] flex items-center" style={{ marginBottom: "15px", gap: "10px" }}>
                <span className="bg-blue-100 text-[#0073bd] flex items-center justify-center rounded-full text-sm" style={{ width: "32px", height: "32px" }}>4</span> 
                Data Security
              </h2>
              <p>
                We use industry-standard encryption to protect your data. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            {/* Section 5 Contact */}
            <section>
              <h2 className="text-2xl font-bold text-[#002249] flex items-center" style={{ marginBottom: "15px", gap: "10px" }}>
                <span className="bg-blue-100 text-[#0073bd] flex items-center justify-center rounded-full text-sm" style={{ width: "32px", height: "32px" }}>5</span> 
                Contact Us
              </h2>
              <div className="bg-blue-50 rounded-lg" style={{ padding: "25px" }}>
                <h3 className="text-xl font-bold text-[#002249]">Globsure International</h3>
                <p className="text-gray-700" style={{ marginTop: "10px" }}><strong>Address:</strong> Office No. 1, 3rd Floor, Bhanushali Avenue, Gandhidham – Kutch, 370201</p>
                <p className="text-gray-700 text-xs" style={{ marginTop: "5px" }}><strong>Email:</strong> globsureinternational@gmail.com</p>
                <p className="text-gray-700" style={{ marginTop: "5px" }}><strong>Phone:</strong> +91 9274741151</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;