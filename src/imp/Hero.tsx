import React from "react";
import { ReactTyped } from "react-typed";

const Hero: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black font-mono relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00ffff] opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00ffff] opacity-5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 text-center">
        {/* Main title */}
        <h1 className="text-8xl text-[#ff1c7f] font-bold mb-2 drop-shadow-lg leading-tight animate-slide-in-top">
          Tanishq Hiresh Kadam
        </h1>
        
        {/* Subtitle */}
        <p className="text-2xl text-[#ff1c7f] mb-6 font-bold tracking-widest animate-slide-in-top animate-delay-1">
          [ GAME DEVELOPER ]
        </p>

        {/* Typed text */}
        <div className="animate-fade-in animate-delay-2">
          <ReactTyped
            strings={["🎮 Welcome Player", "⚙️ Game Dev", "🎨 Animation + Graphics", "💻 C, C++, HTML, CSS, JavaScript", "🚀 Unity, Blender, Unreal Engine"]}
            typeSpeed={60}
            backSpeed={40}
            loop
            className="text-[#00ffff] text-3xl mb-10 font-bold min-h-16"
          />
        </div>

        {/* Profile image with enhanced styling */}
        <div className="mb-8 animate-scale-in animate-delay-3">
          <img 
            src="/profile.jpg" 
            alt="Tanishq Hiresh Kadam" 
            className="w-56 h-56 rounded-full mx-auto mb-4 border-4 border-[#00ffff] shadow-[0_0_30px_#00ffff] hover:shadow-[0_0_50px_#00ffff] transition-all duration-300 animate-glow"
          />
        </div>

        {/* Enhanced button with project page navigation */}
        <a 
          href="#projects" 
          className="relative inline-block px-10 py-3 font-bold text-xl text-black bg-[#00ffff] rounded-lg hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_#00ffff] hover:shadow-[0_0_40px_#00ffff] transform hover:scale-110 active:scale-95 cursor-pointer animate-slide-in-bottom animate-delay-4 animate-float"
        >
          ▶ PROJECTS
        </a>

        {/* Footer text */}
        <p className="text-[#00ffff] text-sm mt-8 opacity-70 animate-fade-in animate-delay-5">
          Press Projects to Play Games & Explore My Portfolio! 🚀
        </p>
      </div>
    </div>
  );
};

export default Hero;
