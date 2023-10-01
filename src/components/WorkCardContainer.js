import { motion } from "framer-motion";
import { useState } from "react";
import docker from "../assets/tech/docker.svg";
import kubernetes from "../assets/tech/kubernetes.svg";

const WorkCardContainer = () => {
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
        Containerization
      </motion.div>
      <div className="flex gap-4">
        <motion.img
          src={docker}
          style={{ height: "5vh" }}
          initial={{ x: 0, scale: 1 }}
          animate={hovered ? { x: -10, scale: 1.2 } : { x: 0, scale: 1 }}
        />
        <motion.img
          src={kubernetes}
          style={{ height: "5vh" }}
          className="self-center"
          initial={{ x: 0, scale: 1 }}
          animate={hovered ? { x: 10, scale: 1.2 } : { x: 0, scale: 1 }}
        />
      </div>
    </motion.div>
  );
};

export default WorkCardContainer;
