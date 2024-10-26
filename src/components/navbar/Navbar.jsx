import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          PORTFOLIO
        </motion.span>
        <div className="social">
        <a href="https://in.linkedin.com/in/razikha-parveen" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://github.com/razikhaNawaz" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://leetcode.com/u/razikha/" target="_blank" rel="noopener noreferrer">
            <img src="/youtube.png" alt="" />
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
