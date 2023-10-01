import { motion } from "framer-motion";
import { useState } from "react";
import gitlab from "../assets/tech/gitlab.svg";
import github from "../assets/tech/github.svg";

const WorkCardVcs = () => {
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
        Version Control
      </motion.div>
      <div className="flex gap-4">
        <motion.img
          src={gitlab}
          style={{ height: "5vh" }}
          initial={{ x: 0, scale: 1 }}
          animate={hovered ? { x: -10, scale: 1.2 } : { x: 0, scale: 1 }}
        />
        <motion.img
          src={github}
          style={{ height: "5vh" }}
          className="self-center"
          initial={{ x: 0, scale: 1 }}
          animate={hovered ? { x: 10, scale: 1.2 } : { x: 0, scale: 1 }}
        />
      </div>
    </motion.div>
  );
};

export default WorkCardVcs;
