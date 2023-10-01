import WorkCardAgile from "./WorkCardAgile";
import WorkCardContainer from "./WorkCardContainer";
import WorkCardVcs from "./WorkCardVcs";
import WorkCardWeb from "./WorkCardWeb";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.6 }}
      className="font-['Raleway'] text-light flex flex-col pb-0 p-4 md:p-4 items-center gap-3 md:gap-2"
    >
      <div className="font-bold text-xl md:text-3xl items-center">Skills</div>
      <div className="flex flex-row md:flex-col">
        <div className="w-1/2 md:w-full flex flex-col">
          <WorkCardWeb />
          <WorkCardVcs />
        </div>
        <div className="w-1/2 md:w-full">
          <WorkCardContainer />
          <WorkCardAgile />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
