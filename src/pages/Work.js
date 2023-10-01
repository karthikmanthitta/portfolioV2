import Experience from "../components/Experience";
import Skills from "../components/Skills";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="h-screen">
      <div className="h-full flex gap-0 md:gap-10 w-full flex-col md:flex-row">
        <div className="w-full md:w-1/4" transition={{ duration: 0.4 }}>
          <Skills />
        </div>
        <div className="w-full md:w-3/4 overflow-y-scroll">
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default Work;
