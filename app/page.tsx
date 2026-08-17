

import About from "./about/page";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

import Hero from "./components/hero";
import Journey from "./components/Journey";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

import Contact from "./contact/page";
import SkillsPage from "./skills/page";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />

<Hero/>
<Featured/>
  <About/>
    <SkillsPage/>
      <Projects/>
      <Journey/> 
      <Contact/>
      <Footer/>
    </main>
  );
}