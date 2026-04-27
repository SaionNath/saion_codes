import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Work from "./components/sections/Work";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </>
  );
}

export default App;