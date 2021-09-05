import { React } from "react";
import { motion } from "framer-motion";

export const SignBlock = (props) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="center-sign"
    >
      {props.sign}
    </motion.h1>
  );
};
