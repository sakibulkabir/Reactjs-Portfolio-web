import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_axbtt7a",
        "template_1ziboq3",
        form.current,
        "Rz7W9pVF0HdDryNNL"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16 animate-fadeInUp opacity-0">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d be happy to connect—feel free to reach out for opportunities,
          collaborations, or any questions.
        </p>
      </div>

      {/* Contact Form */}
      <div
        className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-xl border border-gray-700
        shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_35px_rgba(139,92,246,0.4)]
        transition-all duration-500 animate-fadeInUp opacity-0 delay-200"
      >
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me 🚀
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600
            focus:outline-none focus:border-purple-500 transition-all duration-300 focus:scale-[1.02]"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600
            focus:outline-none focus:border-purple-500 transition-all duration-300 focus:scale-[1.02]"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600
            focus:outline-none focus:border-purple-500 transition-all duration-300 focus:scale-[1.02]"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600
            focus:outline-none focus:border-purple-500 transition-all duration-300 focus:scale-[1.02]"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-md
            bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90
            transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-md"
          >
            Send ✉️
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
