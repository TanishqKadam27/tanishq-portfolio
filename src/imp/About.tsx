import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-[#00ffff] p-10 text-center font-mono relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00ffff] opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00ffff] opacity-5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-5xl mb-12 font-bold text-[#ff1c7f]">About Me</h2>
        
        {/* Welcome Section */}
        <div className="mb-12 animate-slide-in-top">
          <h3 className="text-3xl font-bold text-[#00ffff] mb-4">👋 Hello, I'm Tanishq Kadam</h3>
          <p className="text-xl leading-relaxed mb-4">
            A passionate Game Developer dedicated to creating interactive and engaging gaming experiences that captivate players.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-gray-900 p-6 rounded-lg border border-[#00ffff] shadow-lg hover:shadow-[0_0_30px_#00ffff] transition-all duration-300 animate-scale-in animate-delay-1">
            <div className="text-5xl mb-3">🎮</div>
            <h4 className="text-xl font-bold text-[#ff1c7f] mb-2">Gaming Passion</h4>
            <p className="text-base">Creating fun, visually appealing games with strong technical foundations.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 p-6 rounded-lg border border-[#00ffff] shadow-lg hover:shadow-[0_0_30px_#00ffff] transition-all duration-300 animate-scale-in animate-delay-2">
            <div className="text-5xl mb-3">🎨</div>
            <h4 className="text-xl font-bold text-[#ff1c7f] mb-2">Creative Design</h4>
            <p className="text-base">Interested in game mechanics, storytelling, and exceptional user experience design.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 p-6 rounded-lg border border-[#00ffff] shadow-lg hover:shadow-[0_0_30px_#00ffff] transition-all duration-300 animate-scale-in animate-delay-3">
            <div className="text-5xl mb-3">🚀</div>
            <h4 className="text-xl font-bold text-[#ff1c7f] mb-2">Continuous Learning</h4>
            <p className="text-base">Always experimenting with new tools, engines, and development techniques.</p>
          </div>
        </div>

        {/* Skills & Technology Section */}
        <div className="bg-gray-900 p-8 rounded-lg border border-[#ff1c7f] mb-12 animate-slide-in-left animate-delay-3">
          <h3 className="text-2xl font-bold text-[#ff1c7f] mb-4">💻 Technologies & Tools</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div>
              <p className="font-bold text-[#00ffff] mb-2">Programming:</p>
              <p className="text-base">C, C++, HTML, CSS, JavaScript</p>
            </div>
            <div>
              <p className="font-bold text-[#00ffff] mb-2">Game Engines:</p>
              <p className="text-base">Unity, Unreal Engine, Blender</p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="p-1 rounded-lg shadow-lg animate-slide-in-right animate-delay-4" style={{background: 'linear-gradient(to right, #ff1c7f, #00ffff)'}}>
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-[#ff1c7f] mb-3">🎯 My Vision</h3>
            <p className="text-lg leading-relaxed">
              To build unique and immersive games that not only entertain but also leave a lasting impression. 
              I'm committed to creating experiences that players truly enjoy and remember.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;