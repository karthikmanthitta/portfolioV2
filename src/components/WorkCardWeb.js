import { motion } from "framer-motion";
import { useState } from "react";
import html from "../assets/tech/html.svg";
import css from "../assets/tech/css.svg";
import js from "../assets/tech/js.svg";
import tailwind from "../assets/tech/tailwind.svg";
import react from "../assets/tech/react.svg";

const WorkCardWeb = () => {
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
        // className="text-dark font-bold text-xs md:text-lg"
        className="text-light font-bold text-xs md:text-lg"
        style={{ visibility: hovered ? "visible" : "hidden" }}
      >
        Web Development
      </motion.div>
      <div className="flex gap-4 justify-center">
        <motion.img
          src={html}
          // style={{ height: "5vh" }}
          initial={{ x: 0, scale: 1 }}
          animate={hovered ? { x: -10, scale: 1.2 } : { x: 0, scale: 1 }}
          className="w-1/6"
        />
        <motion.img
          src={css}
          // style={{ height: "5vh" }}
          initial={{ scale: 1 }}
          animate={hovered ? { scale: 1.2 } : { scale: 1 }}
          className="w-1/6"
        />
        <motion.img
          src={js}
          // style={{ height: "5vh" }}
          initial={{ x: 0, scale: 1 }}
          animate={hovered ? { x: 10, scale: 1.2 } : { x: 0, scale: 1 }}
          className="w-1/6"
        />
      </div>
      <div className="flex gap-4 justify-center">
        <motion.img
          src={react}
          // style={{ height: "5vh" }}
          initial={{ x: 0, scale: 1 }}
          animate={hovered ? { x: -10, scale: 1.2 } : { x: 0, scale: 1 }}
          className="w-1/6"
        />
        <motion.img
          src={tailwind}
          // style={{ height: "3vh" }}
          initial={{ x: 0, scale: 1 }}
          animate={hovered ? { x: 10, scale: 1.2 } : { x: 0, scale: 1 }}
          className="w-1/6 self-center"
        />
      </div>
    </motion.div>
  );
};

export default WorkCardWeb;
