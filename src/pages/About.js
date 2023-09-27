import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Pic from "../assets/pic2.jpg";
import Pic2 from "../assets/pic3.jpg";

const About = () => {
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
                className="text-xl md:text-4xl font-['Raleway'] font-semibold tracking-wider [word-spacing:0.1vw]"
              >
                Helping teams build vibrant user interfaces faster and better
                with the best practices in mind.
              </motion.p>
            </div>
            <div className="p-4">
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "linear", duration: 0.4 }}
                className="text-lg md:text-2xl font-['Raleway'] font-semibold tracking-wider"
              >
                2+ years of experience in the software industry specializing in
                product development
              </motion.p>
            </div>
          </div>
          <div className="flex md:w-2/3 w-full flex-col md:flex-row">
            <div className="md:w-1/2 md:p-16 p-2 flex justify-center h-fit">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={Pic}
                className="md:w-3/4 w-full hidden md:flex"
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={Pic2}
                className="h-32 rounded-full md:hidden w-fit"
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
