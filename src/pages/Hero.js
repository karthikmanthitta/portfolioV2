import { Box, Button, Card, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Pic from "../assets/pic.png";
import India from "../assets/india.jpg";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <Box height="100vh">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
        style={{ overflowX: "hidden" }}
      >
        <div className="flex h-1/6 w-full justify-between">
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.3 }}
            className="p-3 gap-3 self-start h-1/2 flex text-theme font-bold font-['Raleway'] text-sm md:text-lg bg-light mt-5 rounded-tr-xl rounded-br-xl w-2/6 md:w-1/6 justify-center items-center"
          >
            Based in India
            <img src={India} className="h-3/4 md:h-full" />
          </motion.div>
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.3 }}
            className="flex gap-3 md:gap-5 p-7 text-lg md:text-2xl fixed right-0"
          >
            <p className="font-['Raleway'] text-light font-semibold cursor-pointer">
              About
            </p>
            <p className="font-['Raleway'] text-light font-semibold cursor-pointer">
              Work
            </p>
            <p className="font-['Raleway'] text-light font-semibold cursor-pointer">
              Contact
            </p>
          </motion.div>
        </div>
        <Box height="83.3%" display="flex" width="100%" justifyContent="center">
          <Box
            style={{
              left: 0,
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
            }}
            className="justify-center md:justify-start gap-5"
          >
            <motion.img
              src={Pic}
              style={{
                display: "flex",
                // height: "75vh",
                left: 0,
                zIndex: 100,
              }}
              className="h-3/5 md:h-4/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.3 }}
            />
            <p className="text-light font-['Raleway'] text-2xl md:text-4xl justify-center items-center flex font-bold">
              Frontend Web Developer
            </p>
          </Box>
          <Box position="absolute" className="w-full">
            <Marquee speed={30} delay={1.3}>
              <p className="text-light text-7xl md:text-9xl font-['Raleway'] font-extrabold overflow-hidden">
                Karthik&nbsp;&nbsp;
              </p>
              <p className="text-light text-7xl md:text-9xl font-['Raleway'] font-extrabold overflow-hidden">
                Manthitta&nbsp;&nbsp;
              </p>
            </Marquee>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
