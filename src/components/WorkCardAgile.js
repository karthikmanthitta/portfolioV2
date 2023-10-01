import { motion } from "framer-motion";
import { useState } from "react";
import jira from "../assets/tech/jira.svg";

const WorkCardAgile = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      // className="flex justify-center items-center bg-light flex-col p-4 rounded-lg font-['Raleway'] font-semibold gap-4"
      className="flex justify-center items-center flex-col p-4 rounded-lg font-['Raleway'] font-semibold gap-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ scale: 1 }}
      animate={hovered ? { scale: 1.1 } : { scale: 1 }}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={hovered ? { scale: 1.1 } : { scale: 1 }}
        // className="text-dark font-bold text-xs md:text-md"
        className="text-light font-bold text-xs md:text-lg"
        style={{ visibility: hovered ? "visible" : "hidden" }}
      >
        Agile
      </motion.div>
      <div className="flex gap-4 justify-center w-full">
        <motion.img
          src={jira}
          initial={{ scale: 1 }}
          animate={hovered ? { scale: 1.2 } : { scale: 1 }}
          className="w-1/6"
        />
      </div>
    </motion.div>
  );
};

export default WorkCardAgile;
