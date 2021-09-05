import { React } from "react";
import { motion } from "framer-motion";

export const DetailsFrame = (props) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      className="detail-blocks"
      variants={item}
    >
      <motion.div className="detail-heading">{props.heading}</motion.div>
      <motion.div className="detail-subheading">₹{new Intl.NumberFormat('en-IN').format(props.subheading)}</motion.div>
    </motion.div>
  );
};
