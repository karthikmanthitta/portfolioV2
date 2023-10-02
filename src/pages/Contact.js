import Pic from "../assets/favicon.png";
import { motion } from "framer-motion";
import { ContactUs } from "../components/Email";

const Contact = () => {
  return (
    <div className="h-screen bg-[#000] text-light font-['Raleway']">
      <div className="h-5/6 flex">
        <div className="w-full flex flex-col md:flex-row">
          <div className="flex flex-row md:flex-col w-full md:w-1/2 justify-center items-center gap-8 px-8 h-1/3 md:h-full">
            <div className="flex gap-4 items-center flex-col md:flex-row">
              <img src={Pic} className="rounded-full h-24" />
              <p className="text-xl md:text-6xl">Get in touch</p>
            </div>
            <div className="border-[0.1vw] border-light w-full rounded-3xl hidden md:block" />
            <div className="flex flex-col text-sm md:text-xl">
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                href="mailto:karthikmanthitta@gmail.com"
                className="rounded-2xl justify-center flex items-center hover:scale-125 transition-all"
              >
                karthikmanthitta@gmail.com
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                href="tel:+919920993844"
                className="rounded-2xl p-4 flex justify-center items-center hover:scale-125 transition-all"
              >
                +91 9920993844
              </motion.a>
            </div>
          </div>
          <div className="h-2/3 md:h-full md:w-1/2 w-full flex justify-center md:block">
            <ContactUs />
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
