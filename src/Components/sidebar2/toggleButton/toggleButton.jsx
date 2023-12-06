import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ToggleButton = ({ setOpen }) => {
  const [lock, setLock] = useState(false);

  const buttonClick = () => {
    setOpen((prev) => !prev);
    setLock((prevLock) => !prevLock);
  };

  return (
    <motion.button
    className = "toggleBtn"
      onClick={buttonClick}
    >
      {!lock && (
        <motion.i
          className="fa-solid fa-lock fa-xl"
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        ></motion.i>
      )}
      {lock && (
        <motion.i
          className="fa-solid fa-lock-open fa-xl"
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        ></motion.i>
      )}
    </motion.button>
  );
};

export default ToggleButton;
