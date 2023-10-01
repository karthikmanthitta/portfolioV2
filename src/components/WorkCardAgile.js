import { motion } from "framer-motion";
import { useState } from "react";
import jira from "../assets/tech/jira.svg";

const WorkCardAgile = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex justify-center items-center bg-light flex-col p-4 rounded-lg font-['Raleway'] font-semibold gap-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ scale: 1 }}
      animate={hovered ? { scale: 1.1 } : { scale: 1 }}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={hovered ? { scale: 1.1 } : { scale: 1 }}
        className="text-dark font-bold"
      >
        Agile Methodology
      </motion.div>
      <div className="flex gap-4">
        <motion.img
          src={jira}
          style={{ height: "5vh" }}
          initial={{ scale: 1 }}
          animate={hovered ? { scale: 1.2 } : { scale: 1 }}
        />
      </div>
    </motion.div>
  );
};

export default WorkCardAgile;
