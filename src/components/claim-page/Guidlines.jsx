import React, { useState } from "react";
import "./style/guidline.css";
import './style/responsive.css';

const Guidlines = ({ ClaimData }) => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <>
      <div>
        <div
          className="guidline-container flex items-center justify-evenly"
          style={{ marginTop: "40px" }}
        >
          {ClaimData.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="icon border-2 border-[#0073bda6] hover:bg-blue-100 hover:border-[#0073bd] hover:scale-102 duration-200 cursor-pointer bg-blue-50 rounded-lg flex flex-col items-center w-1/5"
                style={{ padding: "5px" }}
              >
                <img
                  className="w-25"
                  src={item.svg}
                  alt="car insurance guidlines"
                />
                <h1 className="text-xl text-[#002249]">{item.svgTitle}</h1>
              </div>
            );
          })}
        </div>

        <div
          className="content-container bg-blue-50 border-2 border-[#0073bda6] rounded-lg"
          style={{ padding: "30px", margin: "50px auto", maxWidth: "1100px" }}
        >
          {ClaimData.map((content) => {
            if (content.id === activeTab) {
              return (
                <div className="content" key={content.id}>
                  <h2 className="text-[#002249] text-lg">
                    {content.content.guidLinesTitle}
                  </h2>
                  <ul style={{ paddingLeft: "15px" }}>
                    <li
                      className="text-[#000000a6] list-disc"
                      style={{ padding: "5px 0" }}
                    >
                      {content.content.point1}
                    </li>
                    <li
                      className="text-[#000000a6] list-disc"
                      style={{ padding: "5px 0" }}
                    >
                      {content.content.point2}
                    </li>
                    <li
                      className="text-[#000000a6] list-disc"
                      style={{ padding: "5px 0" }}
                    >
                      {content.content.point3}
                    </li>
                    <li
                      className="text-[#000000a6] list-disc"
                      style={{ padding: "5px 0" }}
                    >
                      {content.content.point4}
                    </li>
                  </ul>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Guidlines;
