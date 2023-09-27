import { motion } from "framer-motion";

export default function Menu() {
  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: 0, scale: 1 }}
      transition={{ duration: 1.3 }}
      className="flex gap-3 md:gap-7 p-7 text-lg md:text-2xl fixed right-0"
    >
      <p className="font-['Raleway'] text-light font-semibold cursor-pointer hover:scale-125 transition-all">
        About
      </p>
      <p className="font-['Raleway'] text-light font-semibold cursor-pointer hover:scale-125 transition-all">
        Work
      </p>
      <p className="font-['Raleway'] text-light font-semibold cursor-pointer hover:scale-125 transition-all">
        Contact
      </p>
    </motion.div>
  );
}
