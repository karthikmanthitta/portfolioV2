import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const HamburgerMenu = ({ handleCloseMenu }) => {
  return (
    <motion.div
      key="hamburger"
      initial={{ x: 500, borderRadius: "30vw" }}
      animate={{ x: 0, borderRadius: "0" }}
      transition={{ duration: 0.7 }}
      exit={{ x: 500, borderRadius: "30vw" }}
      className="flex gap-3 md:gap-5 p-7 text-lg md:text-2xl fixed right-0 flex-col bg-[#000] h-screen w-3/4 md:w-1/3 justify-center"
    >
      <div
        className="bg-light rounded-full cursor-pointer text-dark fixed top-0 right-0 p-2 mt-8 mr-9"
        onClick={handleCloseMenu}
      >
        <AiOutlineClose />
      </div>
      <div className="ml-12 flex flex-col gap-10">
        <p className="font-['Raleway'] text-light font-semibold cursor-pointer text-4xl">
          About
        </p>
        <p className="font-['Raleway'] text-light font-semibold cursor-pointer text-4xl">
          Work
        </p>
        <p className="font-['Raleway'] text-light font-semibold cursor-pointer text-4xl">
          Contact
        </p>
      </div>
    </motion.div>
  );
};

export default HamburgerMenu;
