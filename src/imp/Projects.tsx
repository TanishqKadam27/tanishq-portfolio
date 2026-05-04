import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen p-10 bg-black text-[#00ffff] text-center font-mono relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00ffff] opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00ffff] opacity-5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10">
        <h2 className="text-5xl mb-8 font-bold text-[#ff1c7f] animate-slide-in-top">PROJECTS</h2>

      <div className="max-w-2xl mx-auto animate-scale-in animate-delay-2">
        <div className="bg-gray-900 p-6 rounded-lg border border-[#ff1c7f] shadow-lg hover:shadow-[0_0_40px_#ff1c7f] transition-all duration-300">
          <h3 className="text-4xl font-bold mb-4">Melt & Match </h3>
          <h3 className="text-4xl font-bold mb-4">(Candy Crush Clone)</h3>
          <p className="text-xl mb-4">
            A fun and addictive match-3 puzzle game built with modern web technologies.
            Features colorful candies, challenging levels, and smooth animations.
          </p>
          <div className="mb-4">
            <h4 className="text-2xl font-bold mb-2">Technologies Used:</h4>
            <ul className="text-lg space-y-1">
              <li>HTML5 & CSS3</li>
              <li>JavaScript</li>
              <li>Canvas API</li>
              <li>Game Logic Algorithms</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <a href="/candy-crush/index.html" target="_blank" className="px-4 py-2 border border-[#ff1c7f] hover:bg-[#ff1c7f] hover:text-black font-bold">
              Play Game
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Projects;
