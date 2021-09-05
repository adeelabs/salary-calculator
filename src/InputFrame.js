import { React } from "react";
import { motion } from "framer-motion";

export const InputFrame = (props) => {
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
    <motion.div
      className="main-blocks"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h5 className="block-heading">{props.heading}</motion.h5>
      <input
        placeholder="12,00,000"
        className="block-input"
        onChange={e => props.onChange(e.target.value)}
        value={props.value !== '' ? new Intl.NumberFormat('en-IN').format(String(props.value).replace(/,/g, '')) : ''}
        disabled={props.disabled}
      />
    </motion.div>
  );
};
