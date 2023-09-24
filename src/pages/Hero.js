import { Box, Button, Card, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Pic from "../assets/pic.png";
import Flag from "../utils/Flag";
import Marquee from "react-fast-marquee";
import { colors, fonts } from "../utils/theme";

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
      >
        <Box height="10%" display="flex" alignSelf="flex-start">
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              width: "fit-content",
              height: "1.7vw",
              gap: "1vw",
              padding: "0.4vw 1vw",
              marginTop: "1vw",
              borderRadius: "0 0.7vw 0.7vw 0",
            }}
          >
            <Typography
              style={{
                color: colors.dark,
                fontFamily: fonts.bold,
                fontSize: "1.176vw",
              }}
            >
              Based in India
            </Typography>
            <Flag />
          </Card>
        </Box>
        <Box height="90%" display="flex" width="100%" justifyContent="center">
          <Box
            style={{
              left: 0,
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <motion.img
              src={Pic}
              style={{
                display: "flex",
                height: "35vw",
                left: 0,
                zIndex: 100,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.7 }}
            />
            <Typography
              style={{
                fontSize: "2.941vw",
                color: colors.light,
                fontFamily: fonts.light,
                textAlign: "center",
              }}
            >
              Frontend Web Developer
            </Typography>
          </Box>
          <Box position="absolute" top="30vh">
            <Marquee>
              <Typography
                style={{
                  fontSize: "9.559vw",
                  color: colors.light,
                  fontFamily: fonts.bold,
                }}
              >
                Karthik Manthitta
              </Typography>
            </Marquee>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
