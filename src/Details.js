import { Fragment, React, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { DetailsFrame } from "./DetailsFrame";

export const Details = (props) => {
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

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      className="details-container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {
        props.datagrid.map((salaryHead, index) => (
          <motion.div
            className="account-heads"
            key={salaryHead.columnTitle}
          >
            {
              salaryHead.accountHeads.map((row, index) => (
                <motion.div
                  variants={item}
                  key={salaryHead.accountHeadTitle}
                >
                  <DetailsFrame heading={row.accountHeadTitle} subheading={row.amount} />
                </motion.div>
              ))
            }
          </motion.div>
        ))
      }
    </motion.div>
  );
};
