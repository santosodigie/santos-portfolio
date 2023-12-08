import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    company: "Irish Life",
    title: "IT support/Customer Representative",
    duration: "1.5 Years",
    details:
      "I efficiently managed a constant flow of customer calls, ensuring minimal wait times, while also handling key IT-related tasks. My responsibilities included updating and managing direct debit details for customers transitioning from KBC and Ulster Bank, ensuring uninterrupted financial operations. In addition, I addressed inquiries about products, services, and company information, and provided primary support to both internal and external customers. My role extended to troubleshooting technical issues in online banking, enhancing digital user experience, and liaising with the IT department to maintain service continuity and digital security. My expertise in customer service and IT played a crucial role in offering tailored assistance and maintaining a high standard of digital banking services.",
  },
  {
    year: "2022",
    company: "Experlogix Digital Commerce",
    title: "Junior Software Developer",
    duration: "6 Months",
    details:
      "In my role as a Junior Software Developer, I actively collaborated with project managers to set ambitious yet achievable coding milestones for pre-release software projects. My contributions included revising, modularizing, and updating legacy code to align with modern development standards, which notably reduced operating costs and enhanced functionality. I specialized in designing reusable and reliable code, particularly for distributed cloud environments, ensuring scalability and efficiency. My involvement extended to active participation in team meetings, where I offered valuable insights on design and functionality. Working closely with my colleagues, I ensured the delivery of high-quality project outcomes.",
  },
  {
    year: "2021",
    company: "The Guiness Storehouse",
    title: "Waiter",
    duration: "4 Months",
    details:
      "At the Guinness Storehouse, my role as a waiter allowed me to engage directly with customers from diverse backgrounds, providing them with a memorable dining experience. In this fast-paced environment, I was responsible for taking orders, serving food and beverages, and ensuring customer satisfaction. My experience at the Guinness Storehouse enhanced my skills in customer service, attention to detail, and time management. Working in this iconic and bustling setting, I also developed a deep appreciation for the hospitality industry, learning the intricacies of food service and the importance of creating a welcoming atmosphere for guests. My time there was not only a valuable addition to my skill set but also an enriching personal experience, allowing me to connect with people from all walks of life.",
  },
  {
    year: "2021",
    company: "GAMA Construction",
    title: "Counstruction Worker",
    duration: "3 Months",
    details:
      "During my tenure at GAMA Construction, I was extensively involved in fire installation and general labor work, a role that took me across numerous sites in Dublin. My responsibilities included the installation of fire safety systems, ensuring adherence to rigorous safety standards and protocols. This work required a keen attention to detail and a strong commitment to safety practices. In addition to fire installation, I engaged in a variety of labor tasks, adapting to different work environments and teams. My experience at GAMA Construction not only honed my technical skills in fire safety installations but also strengthened my adaptability and teamwork abilities. Working in diverse locations around Dublin, I developed a deep understanding of the construction sector's dynamics and challenges, making me a versatile and reliable member of any construction team.",
  },
  {
    year: "2020",
    Company: "AppleGreen",
    title: "Crew Member",
    duration: "1 Year",
    details:
      "During my employment at Apple Green's Burger King, I primarily served as a crew member at the drive-through. This role required me to maintain a high level of customer service efficiency, especially during peak hours. My responsibilities included taking orders with accuracy, processing payments, and ensuring that customers received their meals promptly and correctly. Working in this fast-paced environment, I developed excellent communication skills and the ability to multitask effectively under pressure.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
