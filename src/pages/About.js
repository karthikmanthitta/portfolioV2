import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { assetsBasePath } from "../info";

const About = () => {
  function getExperienceString(startMonth = 7, startYear = 2021) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    let years = currentYear - startYear;

    if (currentMonth < startMonth) {
      years -= 1;
    }

    return `${years}+ years of experience`;
  }

  return (
    <Box height="100vh" bgcolor={"#fff"}>
      <div className="flex w-full h-full p-1 md:p-8 flex-col justify-center gap-10">
        <div className="flex w-full flex-col md:flex-row">
          <div className="flex flex-col w-full md:w-1/3 gap-4 md:gap-16 justify-center">
            <div className="p-4">
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "linear", duration: 0.4 }}
                className="text-lg md:text-2xl font-['Raleway'] font-semibold tracking-wider [word-spacing:0.1vw]"
              >
                Helping teams build scalable full-stack applications faster and better, with clean architecture and best 
                practices in mind right from robust backend services to vibrant, user-centric interfaces.
              </motion.p>
            </div>
            <div className="p-4">
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "linear", duration: 0.4 }}
                className="text-lg md:text-2xl font-['Raleway'] font-semibold tracking-wider"
              >
                {getExperienceString()} in the software industry specializing in
                product development
              </motion.p>
            </div>
          </div>
          <div className="flex md:w-2/3 w-full flex-col md:flex-row">
            <div className="md:w-1/2 md:p-16 p-2 flex justify-center h-fit">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                src={`${assetsBasePath}/pic2.jpg`}
                className="md:w-3/4 w-full hidden md:flex"
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                src={`${assetsBasePath}/pic3.jpg`}
                className="max-w-[40vw] rounded-full md:hidden"
              />
            </div>
            <div className="p-4 md:w-1/2 flex items-center">
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "linear", duration: 0.4 }}
                className="text-xl md:text-2xl font-['Raleway'] font-semibold tracking-wider [word-spacing:0.1vw]"
              >
                I bring a holistic approach to product development, emphasize
                client satisfaction, and maintain a strong commitment to
                learning and adapting to emerging technologies to deliver the
                best possible solutions.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default About;
