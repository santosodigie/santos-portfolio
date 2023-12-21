import React from "react";
import ReactPlayer from "react-player";
import { FaGithub } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";

const CountriesInfo = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-8 p-4 py-16 bg-purple-500 rounded-lg mt-5 shadow-lg shadow-black">
      <h1 className="text-4xl font-bold text-center text-[#1603c5]">
        Countries Information
      </h1>
      <p className="text-white mt-5">
        Welcome to the "Countries Information" project, an interactive web
        application designed to bring the world closer to your fingertips.
        Leveraging the power of React Vite and Node.js, this project exemplifies
        a seamless integration of front-end dynamism with back-end efficiency.
        At its core, the application allows users to search for any country and
        receive a comprehensive array of information about it. <br />
        <br />
        Additionally, it features a functionality to display a complete list of
        countries at the click of a button, making global exploration more
        accessible than ever. Hosted on Vercel for the front-end and Render for
        the back-end, this project stands as a testament to modern web
        development practices.
      </p>
      <div>
        <h2 className="text-3xl font-bold text-center text-[#1603c5] mt-5">
          Technologies Used
        </h2>
        <div className="flex justify-between w-full mt-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png"
            alt=""
            className="h-24 w-1/3 max-w-[calc(33.33%-1rem)] object-contain shadow-lg shadow-black bg-white"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
            alt=""
            className="h-24 w-1/3 max-w-[calc(33.33%-1rem)] object-contain shadow-lg shadow-black bg-white"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
            alt=""
            className="h-24 w-1/3 max-w-[calc(33.33%-1rem)] object-contain shadow-lg shadow-black bg-white"
          />
        </div>
        <div className="flex justify-between w-full mt-8">
          <img
            src="https://docs.cypress.io/img/logo/cypress-logo-dark.png"
            alt=""
            className="h-24 w-1/2 max-w-[calc(50%-1rem)] object-contain shadow-lg shadow-black bg-purple-200"
          />
          <img
            src="https://miro.medium.com/v2/resize:fit:300/1*veOyRtKTPeoqC_VlWNUc5Q.png"
            alt=""
            className="h-24 w-1/2 max-w-[calc(50%-1rem)] object-contain shadow-lg shadow-black bg-white"
          />
        </div>
        <div className="flex justify-between w-full mt-8">
          <img
            src="https://cdn.worldvectorlogo.com/logos/vercel.svg"
            alt=""
            className="h-24 w-1/2 max-w-[calc(50%-1rem)] object-contain shadow-lg shadow-black bg-white"
          />
          <img
            src="https://intellyx.com/wp-content/uploads/2019/08/Render-cloud-intellyx-BC-logo.png"
            alt=""
            className="h-24 w-1/2 max-w-[calc(50%-1rem)] object-contain shadow-lg shadow-black bg-white"
          />
        </div>
        <h2 className="text-3xl font-bold text-center text-[#1603c5] mt-10">
          Video Demonstration
        </h2>
        <div className="mt-4 pb-10">
          <ReactPlayer
            url="https://youtu.be/OHUvAqj3w9U"
            controls
            width="100%"
            height="39em"
          />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center text-[#1603c5] mt-5">
        Links
      </h2>
      <div className="flex flex-col justify-center items-center mt-8">
        <a
          href="https://countries-information-hv4xsantos.vercel.app/"
          className="pl-4 pr-4 pt-1 pb-1 bg-white rounded-lg inline-flex items-center hover:bg-blue-600 duration-300 hover:text-white"
        >
          <button className="flex items-center">
            Link to live Project <CgMediaLive className="ml-3" />
          </button>
        </a>
        <a
          href="https://github.com/santosodigie/countries-information"
          className="pl-8 pr-8 pt-1 pb-1 bg-black text-white rounded-lg inline-flex items-center mt-8 hover:bg-blue-600 duration-300 hover:text-white"
        >
          <button className="flex items-center">
            Link to Github <FaGithub className="ml-3" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default CountriesInfo;
