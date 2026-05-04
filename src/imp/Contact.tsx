import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-[#00ffff] p-10 text-center font-mono relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00ffff] opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00ffff] opacity-5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10">
        <h2 className="text-5xl mb-6 font-bold text-[#ff1c7f] animate-slide-in-top">Contact</h2>
      <div className="flex justify-center animate-slide-in-bottom animate-delay-2">
        <form className="flex flex-col max-w-md space-y-4 text-xl">
          <input placeholder="Name" className="p-3 bg-gray-800 border border-[#00ffff]" />
          <input placeholder="Email" className="p-3 bg-gray-800 border border-[#00ffff]" />
          <textarea placeholder="Message" className="p-3 bg-gray-800 border border-[#00ffff]" />
          <button className="p-3 border border-[#00ffff] hover:bg-[#00ffff] hover:text-black shadow-[0_0_15px_#00ffff] font-bold">
            Send Message
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
