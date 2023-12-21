import React from "react";
import ProjectItem from "./ProjectItem";
import AzurcamImg from "../assets/azurcam.jpg";
import FindACookImg from "../assets/findacook.jpg";
import SearchCountriesImg from "../assets/searchcountries.jpg";
import SpidermanImg from "../assets/spiderman.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Welcome to the Projects section of my portfolio, where I showcase a
        curated collection of my most significant and innovative work. Each
        project presented here is a testament to my skills and dedication as a
        developer, ranging from intricate web applications to dynamic software
        solutions. These projects not only demonstrate my technical abilities
        but also reflect my problem-solving prowess and creativity in tackling
        diverse challenges. This section is designed to give you a glimpse into
        my professional journey, highlighting my accomplishments and the
        practical application of my expertise in various domains. Whether you're
        interested in the intricacies of my development process or the outcomes
        of my endeavors, this section offers a comprehensive view of what I
        bring to the table as a software and full-stack developer.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={AzurcamImg}
          title="Azurcam"
          framework="Python, Flask"
          url="/azurcam"
        />
        <ProjectItem
          img={FindACookImg}
          title="Find A Cook"
          framework="React, NodeJS"
          url="/findacook"
        />
        <ProjectItem
          img={SearchCountriesImg}
          title="Search Countries"
          framework="React, Vite, NodeJS"
          url="/countriesinfo"
        />
        <ProjectItem
          img={SpidermanImg}
          title="Spiderman"
          framework="Vite, React, TailwindCSS"
          url="/spiderman"
        />
      </div>
    </div>
  );
};

export default Projects;
