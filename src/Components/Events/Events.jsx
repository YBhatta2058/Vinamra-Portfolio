// Events.js
import { motion } from "framer-motion";

import React, { useEffect } from "react";
import "./Events.scss"; // Import your SCSS file


const Events = () => {
  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            let mainService = document.querySelector('.service__main');
            let nodeArray = mainService.children;
            for (let i = 0; i < nodeArray.length; i++) {
                if (i % 2 !== 0) {
                    nodeArray[i].querySelector('.service__image').style.order = '1';
                    nodeArray[i].querySelector('.service__image').style.clipPath =
                        'polygon(100% 0%, 100% 51%, 100% 100%, 0 100%, 8% 50%, 0 0)';
                    nodeArray[i].querySelector('.service__image').style.borderRadius = '0 12px 12px 0';
                }
            }
        } else {
            let mainService = document.querySelector('.service__main');
            let nodeArray = mainService.children;
            for (let i = 0; i < nodeArray.length; i++) {
                if (i % 2 !== 0) {
                    nodeArray[i].querySelector('.service__image').style.order = 'unset';
                    nodeArray[i].querySelector('.service__image').style.clipPath = 'none';
                    nodeArray[i].querySelector('.service__image').style.borderRadius = '12px';
                }
            }
        }
    };

    handleResize(); // Call the handler initially

    window.addEventListener('resize', handleResize); // Add event listener

    return () => {
        window.removeEventListener('resize', handleResize); // Cleanup: remove event listener
    };
}, []);
  return (
    <div>
      <div className="container" id="service">
        <h1>Projects Overview</h1>
        <div className="service__main">
          <div className="service__box">
            
            <motion.div className="service__image" initial = {{opacity: 0,x:-200}} whileInView = {{opacity: 1,x:0,transition:{duration:.5,delay:.3}}}>
            <motion.div className="overlay" initial = {{opacity: 0}} whileHover={{ opacity: 1 }}>
              Click here to view the gallery
            </motion.div>
              <img
                src="https://www.motortrend.com/uploads/2022/08/2022-Bugatti-Chiron-Super-Sport-2-1.jpg"
                alt="frontend optimize"
              />
            </motion.div>
            <motion.div className="service__content" initial = {{opacity: 0,x:200}} whileInView = {{opacity: 1,x:0,transition:{duration:.5,delay:1}}}>
              <div className="content__title">
                <h2>Work Number One</h2>
              </div>
              <div className="content__para">
                <p>
                  I can analyze and optimize existing React applications,
                  enhancing performance, loading speed, and user experience. By
                  identifying and resolving bottlenecks, implementing code
                  splitting, lazy loading, and other techniques, I optimize
                  rendering and reduce load times.
                </p>
              </div>
              <div className = "workDate">
                2023/07/03
              </div>
            </motion.div>
          </div>

          <div className="service__box">
            <motion.div className="service__image"  initial = {{opacity: 0,x:200}} whileInView = {{opacity: 1,x:0,transition:{duration:.5,delay:.3}}}>
            <motion.div className="overlay" initial = {{opacity: 0}} whileHover={{ opacity: 1 }}>
              Click here to view the gallery
            </motion.div>
              <img
                src="https://www.motortrend.com/uploads/2022/08/2022-Bugatti-Chiron-Super-Sport-2-1.jpg"
                alt="frontend"
              />
            </motion.div>
            <motion.div className="service__content" initial = {{opacity: 0,x:-200}} whileInView = {{opacity: 1,x:0,transition:{duration:.5,delay:1.2}}}>
              <div className="content__title">
                <h2>Work Number 3</h2>
              </div>
              <div className="content__para">
                <p>
                  I can create responsive and interactive web applications using
                  React.js. This includes designing and developing user
                  interfaces, implementing complex functionality, and
                  integrating APIs and backend services.
                </p>
              </div>
              <div className = "workDate">
                2023/07/03
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Events;
