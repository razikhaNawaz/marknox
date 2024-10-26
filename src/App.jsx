import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Introduction">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="Skills" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Projects">
        <Parallax type="projects" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
