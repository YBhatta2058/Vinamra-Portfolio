import "./Landing.scss";
import { motion } from "framer-motion";

import React from "react";

const landingVariants = {
  initial:{
    opacity: 0,x:-150
  },
  animate:{
    opacity: 1,x:0,transition:{delay:.9,duration: .5}
  }
}

const Landing = () => {
  return (
    <motion.div id = "Home" initial = {{opacity: 0}} animate = {{opacity: 1,transition:{duration: .3,ease:"easeInOut"}}} className="landing">
        <div className="textContainer">
          <motion.h2 variants = {landingVariants} initial = "initial" animate = "animate">Vinamra Lama</motion.h2>
          <motion.h1 variants = {landingVariants} initial = "initial" animate = "animate">Graphic Designer and Event Organizer</motion.h1>
          <motion.div variants = {landingVariants} initial = "initial" animate = "animate">
            <p style = {{fontSize:"20px",color: "grey"}}>Experienced Event Manager skilled at organizing and 
            executing impactful events with 
            creative flair and precision, ensuring a smooth and memorable experience</p>
          </motion.div>
          <motion.div className="btn" initial = {{opacity: 0}} animate = {{opacity: 1,transition:{duration: .3,delay:.5}}}>
            <a href = "./CV.pdf" className = "resumeBtn" download>Resume<i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            <a href = "#Contact" className = "contactBtn">Contact Me</a>
          </motion.div>
        </div>
      <motion.div
        className="imageContainer"
        initial={{ opacity: 0,y:-250 }}
        animate={{ opacity: 1, scale: 0.8, y:0 ,transition: { type:'spring',
        stiffness:40,delay:.9 } }}
        whileHover = {{scale:.82}}
        style = {{cursor: "pointer"}}
      >
        <img src="/vinamra.png" alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Landing;
