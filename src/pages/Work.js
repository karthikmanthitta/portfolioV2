import lti from "../assets/lti.svg";
import Skill from "../components/Skill";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Docker",
  "Kubernetes",
  "JAVA",
  "SpringBoot",
  "Git",
];

const passion = ["React Native", "Tailwind CSS"];

const Work = () => {
  return (
    <div className="h-screen">
      <div className="h-full flex w-full font-['Raleway'] flex-col items-center">
        <p className="text-light text-2xl md:text-4xl font-semibold h-[13vh] md:h-1/6 flex justify-center items-center">
          Where I've Worked
        </p>
        <div className="flex flex-col md:h-5/6 items-center w-3/4 md:w-1/2 text-light mt-0 md:mt-6">
          <motion.div
            className="flex gap-3 md:gap-8"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-1/3 flex items-center bg-light p-2 rounded-xl">
              <img src={lti} />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-bold text-sm md:text-md">
                Product Engineer at LTIMindtree
              </p>
              <p className="text-sm md:text-md">AUG 2021 - Present</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-sm md:text-md [word-spacing:0.4vw] tracking-wide font-semibold"
          >
            <ul className="m-3">
              <li className="list-item list-[disclosure-closed]">
                Achieved a 25% increase in user satisfaction scores by
                implementing a user tour system, resulting in a 30% reduction in
                user support inquiries.
              </li>
              <li className="list-item list-[disclosure-closed]">
                Developed and maintained 20+ reusable UI components, resulting
                in a 40% decrease in redundant coding efforts.
              </li>
              <li className="list-item list-[disclosure-closed]">
                Successfully designed and developed a fullstack comprehensive
                User Management System for a major bank client achieving a 30%
                increase in user registration efficiency and ensured seamless
                integration with the bank's existing systems.
              </li>
            </ul>
          </motion.div>
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
          <div className="mt-6 self-start">
            <p className="font-semibold text-sm md:text-md">Passionate about</p>
            <div className="flex mt-2 gap-3">
              {passion.map((skill, i) => (
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
