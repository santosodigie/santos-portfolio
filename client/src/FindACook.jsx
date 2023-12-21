import React from "react";
import ReactPlayer from "react-player";
import { FaGithub } from "react-icons/fa";

const FindACook = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-4 p-4 py-16 rounded-lg shadow-lg shadow-black bg-green-400 mt-5">
      <h1 className="text-4xl font-bold text-center text-[#ffff15]">
        FindACook
      </h1>
      <p className="mt-7">
        Welcome to "Find a Cook," an innovative platform where culinary passion
        meets convenience. This project is designed to revolutionize the way
        people order food by connecting them directly with skilled chefs in
        their area. Users can sign up either as a guest to order food or as a
        cook to offer their culinary services. <br />
        <br /> Chefs have the flexibility to showcase their unique recipes and
        specialties, creating a personalized menu for potential customers. To
        ensure trust and authenticity, cooks are required to upload relevant
        documentation and, upon verification, are designated as verified cooks
        on the platform. Moreover, guests have the convenience of booking chefs
        for specific dates, adding a personalized touch to their dining
        experience. <br />
        <br />
        Under the hood, "Find a Cook" is powered by a robust combination of
        React and Node.js, with MongoDB handling the database management,
        ensuring a seamless and dynamic user experience.
      </p>
      <div>
        <h3 className="text-3xl text-center font-bold text-[#ffff15] pb-9 mt-6">
          Technologies used
        </h3>
        <div className="flex justify-between w-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
            alt=""
            className="h-24 w-1/3 max-w-[calc(33.33%-1rem)] object-contain shadow-lg bg-white shadow-black"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
            alt=""
            className="h-24 w-1/3 max-w-[calc(33.33%-1rem)] object-contain shadow-lg bg-white shadow-black"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1024px-MongoDB_Logo.svg.png"
            alt=""
            className="h-24 w-1/3 max-w-[calc(33.33%-1rem)] object-contain shadow-lg bg-white shadow-black"
          />
        </div>
      </div>
      <h3 className="text-3xl text-center font-bold text-[#ffff15] mt-5">
        Demonstration
      </h3>
      <div className="mt-4 pb-10">
        <ReactPlayer
          url="https://youtu.be/nkNsfIBaWqg"
          controls
          width="100%"
          height="33em"
        />
      </div>

      <div className="flex justify-center items-center mt-16">
        <a
          href="https://github.com/Team7-Collab-Project/Find-A-Cook"
          className="p-4 bg-black text-white rounded-lg inline-flex items-center hover:bg-blue-500 duration-300"
        >
          <button className="flex items-center">
            Link to Github <FaGithub className="ml-3" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default FindACook;
