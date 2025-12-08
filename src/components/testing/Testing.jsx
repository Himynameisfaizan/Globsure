import React from "react";
import { motion } from "motion/react";
const Testing = () => {
  return (
    <>
      <motion.div
        className="w-40 h-40"
        initial={{
            backgroundColor:'black',
          
        }}
        animate={{
            x:[0,800,800,0,0],
            y:[0,0,100,100,0],
            rotate:360,
            scale:0.4
        }}

        transition={{
            duration:2,
            delay:1,
            // repeat:Infinity,
            ease: 'backInOut'
        }}
        style={{ margin: "50px" }}
      ></motion.div>
    </>
  );
};

export default Testing;
