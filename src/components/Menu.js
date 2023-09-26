import { motion } from "framer-motion";

export default function Menu() {
  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: 0, scale: 1 }}
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
  );
}
