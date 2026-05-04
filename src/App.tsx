import React from "react";
import Navbar from "./imp/Navbar";
import Hero from "./imp/Hero";
import About from "./imp/About";
import Experience from "./imp/Experience";
import Projects from "./imp/Projects";
import Skills from "./imp/Skills";
import Contact from "./imp/Contact";
import Footer from "./imp/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />

      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>

      <Footer />
    </div>
  );
};

export default App;
