import Pic from "../assets/favicon.png";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="h-screen bg-[#000] text-light font-['Raleway']">
      <div className="h-5/6 flex justify-center items-center px-8 md:px-56">
        <div className="w-full p-8">
          <div className="text-5xl md:text-6xl p-8 md:pl-8 flex gap-8 items-center pl-0">
            <img src={Pic} className="rounded-full h-24" />
            <p>Get in touch</p>
          </div>
          <hr />
          <div className="flex gap-8 md:gap-16 px-2 py-8 md:p-8 font-semibold flex-col md:flex-row">
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              href="mailto:karthikmanthitta@gmail.com"
              className="border-2 border-[rgba(255,255,255,0.4)] rounded-2xl p-4 text-sm justify-center flex items-center hover:scale-125 transition-all"
            >
              karthikmanthitta@gmail.com
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              href="tel:+919920993844"
              className="border-2 border-[rgba(255,255,255,0.4)] rounded-2xl p-4 flex justify-center items-center hover:scale-125 transition-all"
            >
              +91 9920993844
            </motion.a>
          </div>
        </div>
      </div>
      <div className="h-1/6 flex flex-col justify-end items-end pb-8 pr-8 gap-4">
        <div className="flex flex-col gap-4">
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
    </div>
  );
};

export default Contact;
