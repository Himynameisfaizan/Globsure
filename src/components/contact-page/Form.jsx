import React, { useState } from "react";
import "./styling/form.css";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  // State for Loading and Messages
  const [status, setStatus] = useState({ loading: false, type: "", msg: "" });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // 🛑 Page Reload Rokna
    setStatus({ loading: true, type: "", msg: "" });

    try {
      // API Call using Fetch
      // 👇 IMPORTANT: Yahan apne localhost PHP file ka sahi path daalo
      const response = await fetch(
        "http://localhost/phpMailer/globsure-api/index.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Data ko JSON banake bhejo
        }
      );

      const result = await response.json(); // PHP se JSON response padho

      if (result.status === "success") {
        setStatus({ loading: false, type: "success", msg: result.message });
        // Form Clear karo
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus({ loading: false, type: "error", msg: result.message });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        loading: false,
        type: "error",
        msg: "Server Error. Please try again later.",
      });
    }
  };
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
                <h1 className="text-lg  text-[#002249]">
                  globsureinternational@gmail.com
                </h1>
              </div>
            </div>

            <div className="contact-detail flex items-center gap-5 border-b  border-[#00224930]">
              <div className="icon">
                <i className="ri-user-voice-line"></i>
              </div>
              <div className="information">
                <h5 className="text-[#0073bd] text-base">Phone no.</h5>
                <h1 className="text-lg  text-[#002249]">+91 9274741151</h1>
              </div>
            </div>

            <div className="contact-detail flex items-center gap-5">
              <div className="icon">
                <i className="ri-map-pin-user-line"></i>
              </div>
              <div className="information">
                <h5 className="text-[#0073bd] text-base">Office visit</h5>
                <h1 className="text-lg  text-[#002249]">
                  3rd Floor, Bhanushali Avenue, Kutch, Gujarat – 370201
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="sending-form w-3/5 h-full">
          <form action="" onSubmit={handleSubmit}>
            <input
              className="bg-pink-50 rounded outline-0 border-0"
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="bg-pink-50 rounded outline-0 border-0"
              type="text"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="bg-pink-50 rounded outline-0 border-0"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <input
              className="bg-pink-50 rounded outline-0 border-0"
              type="number"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              className="w-[98%] bg-pink-50 rounded outline-0 border-0"
              name="message"
              id=""
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Write a message"
            ></textarea>
            {status.msg && (
              <p className={`mb-2 text-center ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {status.msg}
              </p>
            )}
            <input
              className="bg-[#002249] rounded text-white hover:bg-[#0072bd] cursor-pointer duration-250"
              type="submit"
              disabled={status.loading}
              value={status.loading? 'Sending...': 'Send message'}
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
