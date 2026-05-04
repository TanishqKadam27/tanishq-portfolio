import React from "react";

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-[#00ffff] p-10 text-center font-mono relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00ffff] opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00ffff] opacity-5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-5xl mb-12 font-bold text-[#ff1c7f]">Experience</h2>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full" style={{background: 'linear-gradient(to bottom, #ff1c7f, #00ffff)'}}></div>
          
          {/* Experience Entry 1 */}
          <div className="mb-12 relative">
            <div className="flex items-center mb-4">
              <div className="flex-1"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#ff1c7f] rounded-full border-4 border-black shadow-[0_0_15px_#ff1c7f]"></div>
              <div className="flex-1"></div>
            </div>
            
            <div className="mr-auto w-5/12 text-right pr-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-[#00ffff] shadow-lg hover:shadow-[0_0_30px_#00ffff] transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#ff1c7f] mb-2">Game Developer</h3>
                <p className="text-[#ff1c7f] font-bold mb-3">2024 – Present</p>
                <p className="text-sm mb-3">Self Projects</p>
                <ul className="text-sm space-y-2 text-[#00ffff]">
                  <li>✓ Developed small games to practice core game mechanics and logic building</li>
                  <li>✓ Worked on player movement, collision detection, and basic physics concepts</li>
                  <li>✓ Focused on improving gameplay experience and UI design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Entry 2 */}
          <div className="mb-12 relative">
            <div className="flex items-center mb-4">
              <div className="flex-1"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00ffff] rounded-full border-4 border-black shadow-[0_0_15px_#00ffff]"></div>
              <div className="flex-1"></div>
            </div>
            
            <div className="ml-auto w-5/12 text-left pl-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-[#ff1c7f] shadow-lg hover:shadow-[0_0_30px_#ff1c7f] transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#00ffff] mb-2">Frontend Developer</h3>
                <p className="text-[#ff1c7f] font-bold mb-3">Intern Experience</p>
                <p className="text-sm mb-3">Web Development</p>
                <ul className="text-sm space-y-2 text-[#00ffff]">
                  <li>✓ Built React projects with modern web technologies</li>
                  <li>✓ Worked with TypeScript and component-based architecture</li>
                  <li>✓ Collaborated on responsive UI/UX implementations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Entry 3 */}
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="flex-1"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#ff1c7f] rounded-full border-4 border-black shadow-[0_0_15px_#ff1c7f]"></div>
              <div className="flex-1"></div>
            </div>
            
            <div className="mr-auto w-5/12 text-right pr-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-[#00ffff] shadow-lg hover:shadow-[0_0_30px_#00ffff] transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#ff1c7f] mb-2">Continuous Learner</h3>
                <p className="text-[#ff1c7f] font-bold mb-3">Ongoing</p>
                <p className="text-sm mb-3">Tools & Technologies</p>
                <ul className="text-sm space-y-2 text-[#00ffff]">
                  <li>✓ Learning advanced game development with C++</li>
                  <li>✓ Mastering Blender for 3D graphics and animation</li>
                  <li>✓ Exploring Unreal Engine and Unity Game Engine capabilities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;