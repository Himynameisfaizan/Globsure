import React from 'react';

const WhatsAppBtn = () => {
  const phoneNumber = "919876543210"; 

  const message = "Hello Globsure, I want to know more about insurance plans.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 focus:outline-none"
        title="Chat with us on WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        
        <i className="ri-whatsapp-line text-3xl text-white relative z-10"></i>

        {/* Optional: Hover karne par "Chat" text dikhana ho to ye uncomment karein */}
        <span className="absolute right-16 bg-white text-gray-800 text-xs font-bold rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap" style={{padding:'4px 8px'}}>
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default WhatsAppBtn;