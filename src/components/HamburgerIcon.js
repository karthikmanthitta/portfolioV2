import { motion } from "framer-motion";
import { HiOutlineMenu } from "react-icons/hi";

export default function HamburgerIcon({ handleHamburgerOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: [2, 1] }}
      transition={{ duration: 0.5 }}
      className="flex gap-3 md:gap-5 p-7 text-lg md:text-2xl fixed right-0 z-[1001]"
      onClick={handleHamburgerOpen}
    >
      <div className="bg-[#000] rounded-full">
        <p className="text-light cursor-pointer p-4">
          <HiOutlineMenu />
        </p>
      </div>
    </motion.div>
  );
}
