import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contactme.css";

// npm i @emailjs/browser
const Result = () => {
  return <p>Your message has been succesfully sent. I will contact you soon</p>;
};

export default function ContactMe() {
  const form = useRef();
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_72cqwx9",
        "template_699xcli",
        form.current,
        "rjGD0upct9sN7206V"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  return (
    <div className="flex-shrink-0 w-full h-full flex items-center justify-center bg-black">
      <div className="w-full h-full">
        <h1 className="glitch text-2xl text-center lg:text-6xl lg:text-left sm:text-2xl md:text-2xl top-8">
          Contact Me
        </h1>
        <div className="justify-center items-center flex flex-col relative lg:top-[14%] md:top-12 top-8 h-[70vh]">
          <div className="flex flex-col space-y-4">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col lg:w-[46rem] sm:w-fit md:w-[46rem]"
            >
              <div className="flex mb-4 font-bold text-lg">
                {result ? <Result /> : null}
              </div>
              <input
                name="name"
                type="text"
                className="feedback-input w-full md:h-5 lg:h-14"
                placeholder="Name"
              />
              <input
                name="email"
                type="text"
                className="feedback-input md:h-5 lg:h-14"
                placeholder="Email"
              />
              <input
                name="subject"
                type="text"
                className="feedback-input md:h-5 lg:h-14"
                placeholder="Subject"
              />
              <textarea
                name="message"
                className="feedback-input h-40 md:h-16 lg:h-28 md:resize-none sm:resize-none"
                placeholder="Message"
              />
              <input
                type="submit"
                value="SUBMIT"
                className="md:h-8 lg:h-14 flex flex-col text-sm items-center justify-center"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
