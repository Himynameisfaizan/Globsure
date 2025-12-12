import React from "react";
import "./styling/form.css";
const Form = () => {
  return (
    <>
      <div className="contact-container flex">
        <div className="massage w-2/5 h-full ">
          <div className="massage-texting">
            <h4 className="text-[#00000075]">Contact with us</h4>
            <h1 className="text-4xl  leading-8 text-[#002249] font-normal">
              Write a message or call anytime
            </h1>
          </div>

          <div className="contact-information flex flex-col gap-10">
            <div className="contact-detail flex items-end gap-5 border-b  border-[#00224930]">
              <div className="icon">
                <i className="ri-mail-ai-line"></i>
              </div>
              <div className="information">
                <h5 className="text-[#0073bd] text-base font-light">Email</h5>
                <h1 className="text-lg  text-[#002249]">info@globsure.com</h1>
              </div>
            </div>

            <div className="contact-detail flex items-center gap-5 border-b  border-[#00224930]">
              <div className="icon">
                <i className="ri-user-voice-line"></i>
              </div>
              <div className="information">
                <h5 className="text-[#0073bd] text-base">Phone no.</h5>
                <h1 className="text-lg  text-[#002249]">+91 78452 - 54218</h1>
              </div>
            </div>

            <div className="contact-detail flex items-center gap-5">
              <div className="icon">
                <i className="ri-map-pin-user-line"></i>
              </div>
              <div className="information">
                <h5 className="text-[#0073bd] text-base">Office visit</h5>
                <h1 className="text-lg  text-[#002249]">
                  Y/21 Greater noida 410026
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="sending-form w-3/5 h-full">
          <form action="">
            <input
              className="bg-pink-50 rounded outline-0 border-0"
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-pink-50 rounded outline-0 border-0"
              type="text"
              placeholder="Email address"
            />
            <input
              className="bg-pink-50 rounded outline-0 border-0"
              type="text"
              placeholder="Subject"
            />
            <input
              className="bg-pink-50 rounded outline-0 border-0"
              type="number"
              placeholder="Phone number"
            />
            <textarea
              className="w-[98%] bg-pink-50 rounded outline-0 border-0"
              name=""
              id=""
              rows={6}
              placeholder="Write a massage"
            ></textarea>
            <input
              className="bg-[#002249] rounded text-white hover:bg-[#0072bd] cursor-pointer duration-250"
              type="submit"
              value="Send a massage"
            />
          </form>
        </div>
      </div>

      <div className="map w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17461.00207609134!2d70.11784901784672!3d23.070595974184613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b98c3352f395%3A0x56c67e2f31352e23!2sGreen%20Palace%20The%20Restaurant!5e0!3m2!1sen!2sin!4v1765521535104!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default Form;
