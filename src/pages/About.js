import { Box } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box height="100vh" bgcolor={"#fff"}>
      <div className="flex w-full h-full p-1 md:p-8 flex-col justify-center md:justify-start gap-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 p-4 md:p-32">
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "linear", duration: 0.4 }}
              className="text-xl md:text-3xl font-['Raleway'] font-semibold tracking-wider [word-spacing:0.1vw]"
            >
              Helping teams build vibrant user interfaces faster and better with the
              best practices in mind.
            </motion.p>
          </div>
          <div className="md:w-1/3 p-4 md:pt-32 md:pr-16">
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "linear", duration: 0.4 }}
              className="md:text-md font-['Raleway'] font-semibold tracking-wider"
            >
              I bring a holistic approach to product development, emphasize
              client satisfaction, and maintain a strong commitment to learning
              and adapting to emerging technologies to deliver the best possible
              solutions.
            </motion.p>
          </div>
        </div>
        <div className="p-4 w-full flex justify-center">
          <motion.p
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "linear", duration: 0.4 }}
            className="text-lg md:text-2xl font-['Raleway'] font-semibold tracking-wider [word-spacing:0.1vw]"
          >
            2+ years of experience in the software industry specializing in
            product development
          </motion.p>
        </div>
      </div>
    </Box>
  );
};

export default About;
