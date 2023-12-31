import lti from "../assets/lti.svg";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="font-['Raleway'] text-light flex flex-col pt-1 p-8 md:p-4 items-center gap-3 md:gap-8"
    >
      <div className="font-bold text-xl md:text-3xl items-center">
        Experience
      </div>
      <div className="bg-light text-dark p-4 w-full md:w-2/3 rounded-xl">
        <div className="flex flex-col md:flex-row gap-3 md:gap-8 font-bold px-4">
          <div className="w-2/3 md:w-1/2 flex items-center">
            <img src={lti} />
          </div>
          <div className="flex flex-row md:flex-col gap-4 md:gap-0 text-sm md:text-lg">
            <div>
              <p>LTIMindtree</p>
              <p>Product Engineer</p>
            </div>
            <div>
              <p>Mumbai, India</p>
              <p>AUG 2021 - Present</p>
            </div>
          </div>
        </div>
        <div className="text-sm md:text-lg [word-spacing:0.7vw] tracking-wide font-semibold px-4">
          <ul className="m-3">
            <li className="list-item list-disc">
              Achieved a 25% increase in user satisfaction scores by
              implementing a user tour system, resulting in a 30% reduction in
              user support inquiries.
            </li>
            <li className="list-item list-disc">
              Developed and maintained 20+ reusable UI components, resulting in
              a 40% decrease in redundant coding efforts.
            </li>
            <li className="list-item list-disc">
              Successfully designed and developed a fullstack comprehensive User
              Management System for a major bank client achieving a 30% increase
              in user registration efficiency and ensured seamless integration
              with the bank's existing systems.
            </li>
          </ul>
        </div>{" "}
      </div>
    </motion.div>
  );
};

export default Experience;
