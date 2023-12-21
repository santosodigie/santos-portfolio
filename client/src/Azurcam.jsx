import React from "react";
import ReactPlayer from "react-player";
import { FaGithub } from "react-icons/fa";

const Azurcam = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-4 p-4 py-16 rounded-lg shadow-lg shadow-black bg-blue-700 mt-10">
      <h1 className="text-4xl font-bold text-center text-[#a0bdff]">Azurcam</h1>
      <p className="text-white mt-8">
        Welcome to Azurcam, an innovative security camera project designed to
        bring cutting-edge surveillance technology right to your fingertips. At
        the heart of Azurcam lies a seamless integration of Python Flask, AWS S3
        buckets, Raspberry Pi, and PubNub, creating a robust and efficient
        security solution. <br />
        <br /> Our platform allows users to effortlessly create an account and
        log in, with all credentials securely stored in a MySQL database.
        Azurcam's intelligent design ensures that any motion detected by the
        Raspberry Pi triggers the capture of a high-quality image. This image is
        then promptly sent as a reference through PubNub to an AWS S3 bucket.{" "}
        <br />
        <br /> Users can view these images on their personalized dashboard, each
        meticulously timestamped with the date and time of capture. Azurcam is
        more than just a security camera; it's a peace of mind, delivered
        through the power of advanced technology and user-friendly design.
      </p>
      <div>
        <h2 className="text-3xl font-bold text-center text-[#a0bdff] mt-10">
          Technologies Used
        </h2>
        <div className="flex justify-between w-full mt-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
            alt=""
            className="h-24 w-1/3 max-w-[calc(33.33%-1rem)] object-contain shadow-md bg-white shadow-black"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/920px-Flask_logo.svg.png"
            alt=""
            className="h-24 w-1/3 max-w-[calc(33.33%-1rem)] object-contain shadow-md bg-white shadow-black"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png?20080127184102"
            alt=""
            className="h-24 w-1/3 max-w-[calc(33.33%-1rem)] object-contain shadow-md bg-white shadow-black"
          />
        </div>
        <div className="flex justify-between w-full mt-8">
          <img
            src="https://www.raspberrypi.com/app/uploads/2022/02/COLOUR-Raspberry-Pi-Symbol-Registered.png"
            alt=""
            className="h-24 w-1/2 max-w-[calc(50%-1rem)] object-contain shadow-md bg-white shadow-black"
          />
          <img
            src="https://thumbs.bfldr.com/at/onulnv0a?expiry=1703447046&fit=bounds&height=800&sig=OTIwNmEyNDMxYTMzMWFmYjViZWY3YTc5OWM1NGE3Njc0ODVlMGE5ZA%3D%3D&width=1100"
            alt=""
            className=" h-24 w-1/2 max-w-[calc(50%-1rem)] object-contain shadow-md bg-white shadow-black"
          />
        </div>
        <h2 className="text-3xl font-bold text-center text-[#a0bdff] mt-10">
          Video Demonstration
        </h2>
        <div className="mt-4 pb-10">
          <ReactPlayer
            url="https://youtu.be/UlfDLpw04us"
            controls
            width="100%"
            height="33em"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-16">
        <a
          href="https://github.com/santosodigie/HomeSecuritySystem"
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

export default Azurcam;
