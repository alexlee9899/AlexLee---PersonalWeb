"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      from: e.target.email.value, // user's email as sender
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    console.log(JSONdata);
    const endpoint = "/api/send"; // API route

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Contact Me</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm ready for the next challenge! If you have any questions or would
          like to collaborate, please feel free to contact me. I'll reply to
          your message as soon as possible!
        </p>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Email: lyanlin99@gmail.com
        </p>
        <p className="text-[#ADB7BE] mb-4 max-w-md">Phone: +61 426 103 899</p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/alexlee9899"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="bg-white border border-white rounded-xl"
              src="/images/githubIcon.png"
              alt="Github Icon"
              width={50}
              height={50}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/alex-yanlin-li/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="bg-white border border-white rounded-xl"
              src="/images/linkedIcon.png"
              alt="Linkedin Icon"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@xxx.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="I'd like to know more about your projects..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
