import React from "react";
import { FaGithub } from "react-icons/fa";

const Spiderman = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-4 p-4 py-16 bg-red-600 rounded-lg mt-5 shadow-lg shadow-black">
      <h1 className="text-4xl font-bold text-center text-white">
        Spiderman Encyclopedia
      </h1>
      <p className="text-center text-white">
        Embarking on an exciting journey into the world of web development, I've
        conceptualized a unique project that combines my passion for the
        Spider-Man universe with cutting-edge web technologies. The core idea is
        to develop an interactive, encyclopedia-style web application dedicated
        to exploring the diverse array of Spider-Men from various dimensions.
        This platform, harnessing the power of React, Vite, Node.js, and
        MongoDB, aims to offer fans a comprehensive and engaging repository of
        information about each Spider-Man character. Beyond just being a static
        database, the project will feature a distinctive twist: it will
        encourage fan participation by allowing users to submit and vote on
        their own fan-created Spider-Men, turning it into a dynamic and evolving
        hub of creativity and fandom. This innovative approach not only serves
        as a tribute to the beloved Spider-Man franchise but also fosters a
        vibrant community where fans can contribute, learn, and celebrate the
        rich tapestry of stories and characters in the Spider-Verse.
      </p>
      <img
        src="https://media.istockphoto.com/id/185244309/photo/work-in-progress.jpg?s=612x612&w=0&k=20&c=ECQ9StWhFTfFjWg_yt8ITEyAuZpRLVV8akD20jagc-Y="
        alt=""
        className="w-full"
      />
      <h2 className="text-3xl font-bold text-center text-white mt-5">Links</h2>
      <div className="flex justify-center items-center mt-4">
        <a
          href="https://github.com/santosodigie/Spiderman-tailwind-project"
          className="py-2 bg-black text-white rounded-lg inline-flex items-center hover:bg-blue-400 duration-300"
        >
          <button className="flex items-center px-8">
            Link to Github <FaGithub className="ml-3" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Spiderman;
