import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex h-full md:mt-8 w-full justify-center md:justify-start">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col md:px-8 w-3/4 md:w-2/3 justify-center items-start gap-4 font-['Raleway']"
      >
        <label className="font-bold">Name</label>
        <input
          type="text"
          name="name"
          className="bg-[#000] border-b-[0.1vw] border-light w-full pb-4 rounded-md pl-1"
          placeholder="John Doe"
          required
        />
        <label className="font-bold">Email</label>
        <input
          type="email"
          name="email"
          className="bg-[#000] border-b-[0.1vw] border-light w-full pb-4 rounded-md pl-1"
          placeholder="john.doe@something.com"
          required
        />
        <label className="font-bold">Message</label>
        <textarea
          name="message"
          className="bg-[#000] border-b-[0.1vw] border-light w-full pb-4 resize-none rounded-md pl-1"
          placeholder="Your Message"
          required
          rows='1'
        />
        <input
          type="submit"
          value="Send"
          className="font-bold self-end mt-8 border-2 py-3 px-6 rounded-2xl bg-light text-dark cursor-pointer"
        />
      </form>
    </div>
  );
};
