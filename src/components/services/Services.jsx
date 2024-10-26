import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I am an enthusiastic developer
          <br /> and an honest person
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>My</motion.b> Skills
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Educational</motion.b> Background.
          </h1>
          <button>WHAT I DID?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
  <motion.div
    className="box"
    whileHover={{ background: "lightgray", color: "black" }}
  >
    <h2>Skills</h2>
    <p>
      HTML <br />
      CSS <br />
      JavaScript <br />
      OOPs <br />
      React.js <br />
      Next.js <br />
      Bootstrap
    </p>
    <button>Go</button>
  </motion.div>
  <motion.div
    className="box"
    whileHover={{ background: "lightgray", color: "black" }}
  >
    <h2>Education</h2>
    <br />
    <p>
      Government Engineering College, Hassan <br />
      Electronics and Communication Engineering <br /><br />
      
      Reva Institute of Technology and Management, Bengaluru <br />
      M.Tech in Signal Processing
    </p>
    <button>Go</button>
  </motion.div>


        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Work Experience</h2>
          <p>
          <h3>Lunara Solutions-Frontend developer intern</h3>
          <br />
          Developed responsive web pages using React.js, CSS, Tailwind, and
          HTML5 for cross-device compatibility.
          Integrated APIs with live servers for dynamic functionality.
          Built modules for admissions, account management, and real-time
          dashboards for administrators and teachers.
          Enhanced user experience by improving features and functionality.
          </p>
          <button>Go</button>
        </motion.div>
      
      </motion.div>
    </motion.div>
  );
};

export default Services;
