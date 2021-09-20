import { useState } from "react";
import Menu from "./components/menu/Menu";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Tech from "./components/tech/Tech";
import Contact from "./components/contact/Contact";
import "./scripts/fontawesome";

import "./app.scss";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <Menu />
      <div className="sections">
        <Hero />
        <About />
        <Projects isOpen={isOpen} openModal={setIsOpen} />
        <Tech />
        <Contact />
      </div>
    </div>
  );
}

export default App;
