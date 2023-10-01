import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const HamburgerMenu = ({ handleCloseMenu }) => {
  const delayClose = () => {
    setTimeout(() => {
      handleCloseMenu();
    }, 300);
  };

  return (
    <motion.div
      key="hamburger"
      initial={{ x: 500, borderRadius: "30vw" }}
      animate={{ x: 0, borderRadius: "0" }}
      transition={{ duration: 0.7 }}
      exit={{ x: 500, borderRadius: "30vw" }}
      className="flex gap-3 md:gap-5 p-7 text-lg md:text-2xl fixed right-0 flex-col bg-[#141414] h-screen w-3/4 md:w-1/3 justify-center z-50"
    >
      <div
        className="bg-light rounded-full cursor-pointer text-dark fixed top-0 right-0 p-2 mt-8 mr-9"
        onClick={handleCloseMenu}
      >
        <AiOutlineClose />
      </div>
      <div className="ml-12 flex flex-col gap-20">
        <div className="flex flex-col gap-7">
          <p className="font-['Raleway'] text-light text-sm">Navigation</p>
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Raleway'] text-light text-4xl font-semibold flex"
          >
            <a
              href="#home"
              className="cursor-pointer hover:scale-110 transition-all "
              onClick={delayClose}
            >
              Home
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-['Raleway'] text-light text-4xl font-semibold flex"
          >
            <a
              href="#about"
              className="cursor-pointer hover:scale-110 transition-all "
              onClick={delayClose}
            >
              About
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-['Raleway'] text-light text-4xl font-semibold flex"
          >
            <a
              href="#work"
              className="cursor-pointer hover:scale-110 transition-all "
              onClick={delayClose}
            >
              Work
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-['Raleway'] text-light text-4xl font-semibold flex"
          >
            <a
              href="#contact"
              className="cursor-pointer hover:scale-110 transition-all "
              onClick={delayClose}
            >
              Contact
            </a>
          </motion.div>
        </div>
        <div className="text-light flex flex-col font-['Raleway'] gap-7">
          <p className="text-sm">Socials</p>
          <div className="flex gap-7">
            <a
              href="https://www.linkedin.com/in/karthik-manthitta/"
              className="font-semibold hover:scale-110 hover:underline transition-all"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/karthikmanthitta"
              className="font-semibold hover:scale-110 hover:underline transition-all"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HamburgerMenu;
