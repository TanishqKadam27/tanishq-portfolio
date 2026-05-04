import React from "react";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full flex justify-between p-4 bg-black border-b border-[#ff1c7f] z-50 font-mono">
      <h1 className="text-[#00ffff] text-xl font-bold">Tanishq Hiresh Kadam</h1>

      <div className="space-x-6">
        <button onClick={() => scrollTo("home")} className="text-[#ff1c7f] hover:text-[#00ffff] font-bold">Home</button>
        <button onClick={() => scrollTo("about")} className="text-[#ff1c7f] hover:text-[#00ffff] font-bold">About</button>
        <button onClick={() => scrollTo("experience")} className="text-[#ff1c7f] hover:text-[#00ffff] font-bold">XP</button>
        <button onClick={() => scrollTo("projects")} className="text-[#ff1c7f] hover:text-[#00ffff] font-bold">Projects</button>
        <button onClick={() => scrollTo("skills")} className="text-[#ff1c7f] hover:text-[#00ffff] font-bold">Skills</button>
        <button onClick={() => scrollTo("contact")} className="text-[#ff1c7f] hover:text-[#00ffff] font-bold">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
