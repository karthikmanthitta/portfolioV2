import { useEffect, useState } from "react";
import Skill from "../components/Skill";
import { motion } from "framer-motion";
import { skills, workExp } from "../info";

const Work = () => {
  const [currentWorkItem, setCurrentWorkItem] = useState(0);

  const nextItem = () => {
    setCurrentWorkItem((prevState) => prevState + 1);
  };

  const prevItem = () => {
    setCurrentWorkItem((prevState) => prevState - 1);
  };

  return (
    <div className="h-screen">
      <div className="h-full flex w-full font-['Raleway'] flex-col items-center">
        <p className="text-light text-2xl md:text-4xl font-semibold h-[13vh] md:h-1/6 flex justify-center items-center">
          Where I've Worked
        </p>
        <div className="flex flex-col md:h-5/6 items-center w-3/4 md:w-1/2 text-light mt-0 md:mt-6">
          <div className="flex gap-4 md:gap-16">
            <p
              className="text-4xl font-bold self-center cursor-pointer"
              style={
                currentWorkItem === 0 ? { visibility: "hidden" } : undefined
              }
              onClick={prevItem}
            >
              &lt;
            </p>
            <div className="flex flex-col">
              <motion.div
                className="flex gap-3 md:gap-8"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-1/3 flex items-center bg-light p-2 rounded-xl">
                  <img src={workExp[currentWorkItem].orgImage} />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-sm md:text-md">
                    {workExp[currentWorkItem].heading}
                  </p>
                  <p className="text-sm md:text-md">
                    {workExp[currentWorkItem].time}
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-sm md:text-md [word-spacing:0.4vw] tracking-wide font-semibold"
              >
                <ul className="m-3">
                  {workExp[currentWorkItem].highlights.map((highlight) => (
                    <li className="list-item list-[disclosure-closed]">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <p
              className="text-4xl font-bold self-center cursor-pointer"
              style={
                currentWorkItem === workExp.length - 1
                  ? { visibility: "hidden" }
                  : undefined
              }
              onClick={nextItem}
            >
              &gt;
            </p>
          </div>

          <div className="mt-6 self-start">
            <p className="font-semibold text-sm md:text-md">
              Technologies I've worked on
            </p>
            <div className="flex mt-2 gap-2 md:gap-3 flex-wrap">
              {skills.map((skill, i) => (
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Skill title={skill} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
