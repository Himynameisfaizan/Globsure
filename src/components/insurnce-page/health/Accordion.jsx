import React, { useState } from "react";
import './responsive.css'
const Accordion = ({ faq }) => {
  const [activeTab, setActiveTab] = useState(null); 

  const toggleTab = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-5" style={{margin:'40px 0'}}>
      {faq.map((data) => {
        const isActive = activeTab === data.id;

        return (
          <div
            key={data.id}
            className="accordion-section bg-[#0073bd20] border border-[#00224925] w-full rounded-lg flex flex-col gap-4" 
            style={{ padding: "15px" }}  >

            <div 
              className="flex justify-between cursor-pointer items-center mb-2" 
              onClick={() => toggleTab(data.id)}
            >
              <h2 className="h2 text-[#002249] text-lg font-medium">{data.id}.   {data.question}</h2>
              
              <i 
                className={`text-xl ri-arrow-down-s-fill transition-transform duration-300 ${isActive ? "rotate-180" : "rotate-0"}`}
              ></i>
            </div>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden flex gap-2">
              <i className="text-[#0073bd] ri-arrow-right-long-line"></i>  <p className="para text-[#000000a6] text-base pt-2">
                  {data.answer}
                </p>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Accordion;