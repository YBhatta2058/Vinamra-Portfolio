import "./Event2.scss";
import React, { useRef } from "react";
import EventsInfo from "./Event.js";
import { motion , useScroll , useSpring, useTransform } from 'framer-motion'


const Single = ({ item }) => {
    const targetRef = useRef();
    const {scrollYProgress} = useScroll({
        target: targetRef
    })

    const y = useTransform(scrollYProgress,[0,1],[-300,200])
    
  return (
    <section className="majorSection ptop">
      <div className="eventsContainer">
        <motion.div className="imgSection" ref = {targetRef}>
          <img src={item.img} alt="" />
        </motion.div>
        <motion.div className="contentSection" style = {{y}}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </motion.div>
      </div>
    </section>
  );
};

const Event2 = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({target:ref,offset:["end end","start start"]})

    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30
    })
  return (
    <div id = "Events" className = "eventSection" ref = {ref}>
    <div className="progress">
      <h1 className = "eventTitle">Overview</h1>
      <motion.div style = {{scaleX}} className="progressBar"></motion.div>
    </div>
      {EventsInfo.map((item, i) => {
        return <Single item={item} key={i} />;
      })}
    </div>
  );
};

export default Event2;
