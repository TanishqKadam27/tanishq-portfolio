import React from "react";

const Skills: React.FC = () => {
  return (
    <section className="min-h-screen p-10 bg-black text-[#00ffff] text-center font-mono relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00ffff] opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00ffff] opacity-5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10">
        <h2 className="text-5xl mb-12 font-bold text-[#ff1c7f]">Skills</h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* Skill Card 1 */}
        <div className="bg-gray-900 p-8 rounded-lg border border-[#00ffff] shadow-lg hover:shadow-[0_0_30px_#00ffff] transition-all duration-300">
          <div className="text-6xl mb-4">💻</div>
          <h3 className="text-2xl font-bold text-[#ff1c7f] mb-2">Programming</h3>
          <p className="text-lg">C, C++, HTML, CSS, JavaScript</p>
        </div>

        {/* Skill Card 2 */}
        <div className="bg-gray-900 p-8 rounded-lg border border-[#00ffff] shadow-lg hover:shadow-[0_0_30px_#00ffff] transition-all duration-300">
          <div className="text-6xl mb-4">🎮</div>
          <h3 className="text-2xl font-bold text-[#ff1c7f] mb-2">Game Dev</h3>
          <p className="text-lg">Game Development Concepts</p>
        </div>

        {/* Skill Card 3 */}
        <div className="bg-gray-900 p-8 rounded-lg border border-[#00ffff] shadow-lg hover:shadow-[0_0_30px_#00ffff] transition-all duration-300">
          <div className="text-6xl mb-4">🛠️</div>
          <h3 className="text-2xl font-bold text-[#ff1c7f] mb-2">Tools</h3>
          <p className="text-lg">Blender, Unity, Unreal Engine</p>
        </div>

        {/* Skill Card 4 */}
        <div className="bg-gray-900 p-8 rounded-lg border border-[#00ffff] shadow-lg hover:shadow-[0_0_30px_#00ffff] transition-all duration-300">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-2xl font-bold text-[#ff1c7f] mb-2">Version Control</h3>
          <p className="text-lg">Git & GitHub</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
