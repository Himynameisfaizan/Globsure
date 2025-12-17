import React from "react";
import './responsive.css'
const Blog_contain = ({date, admin, title, desc, image}) => {
  return (
    <>
      <div
        className="blog-parent max-w-[1100px]"
        style={{ margin: "auto", padding: "50px" }}
      >
        <img
          className="w-full h-100 object-cover rounded-lg"
          style={{ margin: "auto" }}
          src={image}
          alt=""
        />
        <div className="date-container flex gap-10" style={{ marginTop: "5px" }}>
          <div className="date flex items-center gap-2">
            <i className="text-[#0022497c] ri-history-line"></i>
            <h4 className="text-[#0073bd] text-sm">{date}</h4>
          </div>
          <div className="author flex items-center gap-2">
            <i className="text-[#0022497c] ri-user-line"></i>
            <h4 className="text-[#0073bd] text-sm">By {admin}</h4>
          </div>
        </div>

        <h2 className="text-3xl text-[#002249]" style={{ padding: "10px 0" }}>
         {title}
        </h2>
        <p className="text-[15px] leading-6 text-[#000000a6] text-justify">
         {desc}
        </p>
      </div>
    </>
  );
};

export default Blog_contain;
